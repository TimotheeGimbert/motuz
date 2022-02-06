import '../style/index.scss';

const main = () => {

  const words = ['marmotte', 'potiron', 'citron', 'chaton', 'marmitte', 'parasol', 'balade', 'mousson', 'parquet', 'belgique'];
  let wordToFind;
  let maxAttempts;
  let lettersFound;
  let round = 0;
  let status = 'playing';

  const prepareGame = () => {

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

    status = 'playing';
    round = 0;
    wordToFind = generateWord();                 
    lettersFound = [...Array(wordToFind.length)];
    maxAttempts = wordToFind.length-1;           
    buildBoard(wordToFind.length);               
  }

  const game = () => {

    const handleInput = () => {

      const verifyInput = (input) => {
        console.log(wordToFind.length);
        const regexpString = `(^([a-z]){${wordToFind.length}}$)`;
        var regex = new RegExp(regexpString, 'i');
        return regex.test(input) ? true : false;
      }

      const input = document.querySelector('input').value;
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
        document.getElementById('submitButton').style.display = 'none';
        displayGuess();
        displayResult(status);
        return;
      }
      else if (round === maxAttempts - 1) {
        status = 'looser';
        document.getElementById('submitButton').style.display = 'none';
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

    const submitButton = document.getElementById('submitButton');
    submitButton.removeEventListener('click', handleInput() );
    submitButton.addEventListener('click', handleInput() );
  }

  const replayButton = document.getElementById('replayButton');
    replayButton.addEventListener('click', () => {
    document.getElementById('resultModal').style.display = 'none';
    document.getElementById('submitButton').style.display = 'flex';
    prepareGame();
    game();
  });

  prepareGame();
  game();
}

main();

