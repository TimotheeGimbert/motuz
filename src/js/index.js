import '../style/index.scss';

const main = () => {

  const words = ['potirons','unitaire','diverger','desordre','arthrose','sourdine','courants','baignade','dauphins','bacterie','bannette','brodeurs','bretelle','nautisme','narcisse','nouveaux','rajuster','rallonge','remorque','usinages','usuriere','zodiaque','emmarger','gendarme','galopade','immature','inconnus','sentiers','sensitif', ];
  let status;

  const game = () => {

    let wordToFind;
    let maxAttempts;
    let lettersFound;
    let round;

    const initialize = () => {

      const generateWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex].toUpperCase();
      }
  
      const buildBoard = (nbLetters) => {
        const board = document.querySelector('.board');
        board.innerHTML = '';
        [...Array(maxAttempts)].map( () => board.innerHTML += `<div class="line"></div>` );
        const lines = [...document.querySelectorAll('.line')];
        lines.map( (line) => {
          [...Array(nbLetters)].map( () => line.innerHTML += `<div class="box"></div>` );
        });
      }

      document.getElementById('submitButton').style.display = 'flex';
      document.getElementsByTagName('input')[0].value = '';
      wordToFind = generateWord();                 
      maxAttempts = wordToFind.length-1;  
      lettersFound = [...Array(wordToFind.length)];  
      round = 0;
      status = 'playing';       
      buildBoard(wordToFind.length);   
    }

    const handleInput = () => {

      const verifyInput = (input) => {
        const regexpString = `(^([a-z]){${wordToFind.length}}$)`;
        var regex = new RegExp(regexpString, 'i');
        return regex.test(input) ? true : false;
      }

      const colorInput = () => {
        const inputDiv = document.getElementsByClassName('input')[0];
        inputDiv.classList.add('wrongInput');
      }

      const input = document.querySelector('input').value;
      verifyInput(input) ? attempt(input.toUpperCase()) : colorInput() ;
    }

    const attempt = (guess) => {

      const displayGuess = () => {
        const boxes = document.querySelectorAll('.line')[round].childNodes;
        boxes.forEach( (box, i) => {
          box.innerHTML = guess[i];
          if (guess[i] === wordToFind[i]) {
            box.classList.add('placed');
            lettersFound[i] = wordToFind[i];
          }
          else if (box.classList.contains('placed')) {
            box.classList.remove('placed');
            box.classList.add('wrong');
          }
        });
      }

      const prepareNextRound = () => {

        const colorizeCurrentMisplaced = () => {

          const boxes = document.querySelectorAll('.line')[round].childNodes;
          boxes.forEach( (box, i) => {
            if (box.classList.contains('placed')) return;
            else if (wordToFind.includes(guess[i])) {
              const neededOccurences = wordToFind.split('').filter( (e) => e === guess[i] ).length;
              const wellPlacedOccurences = lettersFound.filter( (e) => e === guess[i] ).length;
              let misplacedColorizedOccurences = 0;
              boxes.forEach( (box) => {
                if (box.innerHTML === guess[i] && box.classList.contains('misplaced')) misplacedColorizedOccurences ++;
              });
              const occurencesToColorize = neededOccurences - wellPlacedOccurences - misplacedColorizedOccurences;
              if (occurencesToColorize > 0) {
                box.classList.add('misplaced');
              }
            }
          });
        }

        const displayNextLine = () => {
          const nextBoxes = document.querySelectorAll('.line')[round+1].childNodes;
          nextBoxes.forEach( (box, i) => {
            if (lettersFound[i] != undefined) {
              box.innerHTML = wordToFind[i];
              box.classList.add('placed');
            }
          });
        }

        colorizeCurrentMisplaced();
        displayNextLine();
      }

      const showAnswer = () => {
        const boxes = document.querySelectorAll('.line')[round].childNodes;
        boxes.forEach( (box, i) => {
          box.innerHTML = wordToFind[i];
          if (!box.classList.contains('placed')) box.classList.add('wrong');
        });
      }

      const inputDiv = document.getElementsByClassName('input')[0];
      inputDiv.classList.remove('wrongInput');

      if (guess === wordToFind) {
        status = 'winner';
        displayGuess();
        return;
      }
      else if (round === maxAttempts - 1) {
        status = 'looser';
        showAnswer();
        return;
      }
      else {
        displayGuess();
        prepareNextRound();
        round ++;
      }
    }
    
    initialize();
    document.getElementById('submitButton').addEventListener('click', handleInput );
    document.getElementById('replayButton').addEventListener('click', initialize );

    document.getElementsByTagName('input')[0].addEventListener('keypress', (event) => {
      if (event.target.value.length >= 8)  event.preventDefault();
    });

  }

  game();
}

main();
