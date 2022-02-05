import '../style/index.scss';

const app = () => {

  let wordToFind;
  let maxAttempts;
  let lettersFound;
  let round = 0;

  const prepareGame = () => {

    const generateWord = () => {
      return 'nolwenn'.toUpperCase();
    }

    const buildBoard = (nbLetters) => {
      const board = document.querySelector('.board');
      [...Array(maxAttempts)].map( () => board.innerHTML += `<div class="line"></div>` );
      const lines = [...document.querySelectorAll('.line')];
      lines.map( (line) => {
        [...Array(nbLetters)].map( () => line.innerHTML += `<div class="box"></div>` );
      });
    }

    wordToFind = generateWord();                  // calls API to get a random word to find
    lettersFound = [...Array(wordToFind.length)]; // sets the empty array of letters found by the player
    maxAttempts = wordToFind.length-1;            // calculates the total possible attempts depending on the length of the word to find
    buildBoard(wordToFind.length);                // build the adequate numbers of rows and boxes for the board
  }

  const game = () => {

    const handleInput = () => {

      const verifyInput = (input) => {
        const regex = /^([a-z]){7}$/i;
        return regex.test(input) ? true : false;
      }

      const input = document.querySelector('input').value;
      verifyInput(input) ? attempt(input.toUpperCase()) : console.log('wrong') ;
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
          else if (box.classList.contains('placed')) box.classList.remove('placed');
        });
      }

      const prepareNextRound = () => {

        const colorizeCurrentMisplaced = () => {
          const boxes = document.querySelectorAll('.line')[round].childNodes;
          boxes.forEach( (box, i) => {
            if (box.classList.contains('placed')) return;
            else if (wordToFind.includes(guess[i])) {
              const totalIterations = wordToFind.split(guess[i]).length - 1;
              const foundIterations = lettersFound.filter( (e) => e === guess[i] ).length;

              if (foundIterations < totalIterations) {
                box.classList.add('misplaced');
              }
            }
          });
        }

        const displayNextLine = () => {
          const nextBoxes = document.querySelectorAll('.line')[round+1].childNodes;
          nextBoxes.forEach( (box, i) => {
            if (lettersFound[i] != undefined) {
              nextBoxes[i].innerHTML = wordToFind[i];
              nextBoxes[i].classList.add('placed');
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
        console.log('winner');
        displayGuess();
        return;
      }
      else if (round === maxAttempts - 1) {
        console.log('looser');
        showAnswer();
        return;
      }
      else {
        displayGuess();
        prepareNextRound();
        round ++;
      }
    }

    const guessButton = document.getElementsByTagName('button')[0];
    guessButton.addEventListener('click', () => handleInput() );
  }

  prepareGame();
  game();
}

app();