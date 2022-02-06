import '../style/index.scss';

const main = () => {

  const words = ['marmotte', 'potiron', 'citron', 'chaton', 'marmitte', 'parasol', 'balade', 'mousson', 'parquet', 'belgique'];
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
      
      wordToFind = generateWord();                 
      maxAttempts = wordToFind.length-1;  
      lettersFound = [...Array(wordToFind.length)];  
      round = 0;
      status = 'playing';       
      buildBoard(wordToFind.length);               
    }

    const handleInput = () => {

      const verifyInput = (input) => {
        console.log(wordToFind.length);
        const regexpString = `(^([a-z]){${wordToFind.length}}$)`;
        var regex = new RegExp(regexpString, 'i');
        return regex.test(input) ? true : false;
      }

      const input = document.querySelector('input').value;
      console.log(input);
      verifyInput(input) ? attempt(input.toUpperCase()) : console.log('wrong input') ;
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

      if (guess === wordToFind) {
        status = 'winner';
        displayGuess();
        displayResult(status);
        return;
      }
      else if (round === maxAttempts - 1) {
        status = 'looser';
        showAnswer();
        displayResult(status);
        return;
      }
      else {
        displayGuess();
        prepareNextRound();
        round ++;
      }
    }
    
    const displayResult = (status) => {
      const modal = document.getElementById('resultModal');
      if (status === 'winner') {
        modal.innerHTML = 'BRAVO ! Vous avez gagné !'        
        modal.style.display = 'flex';
      }
      else {
        modal.innerHTML = 'Dommage c\'est perdu ...'        
        modal.style.display = 'flex';
      }
    }

    initialize();
    document.getElementById('submitButton').addEventListener('click', handleInput );
    document.getElementById('replayButton').addEventListener('click', () => {
      document.getElementById('resultModal').style.display = 'none';
      document.getElementById('submitButton').style.display = 'flex';
      initialize();
    });
  }

  game();
}

main();

