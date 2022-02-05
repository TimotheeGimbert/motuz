import '../style/index.scss';

const app = () => {

  let wordToFind;
  let maxAttempts;
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

    wordToFind = generateWord();        // calls API to get a random word to find
    maxAttempts = wordToFind.length-1;  // calculates the total possible attempts depending on the length of the word to find
    buildBoard(wordToFind.length);      // build the adequate numbers of rows and boxes for the board
  }

  const game = () => {

    const attempt = (guess) => {

      const displayAnswer = () => {
        const boxes = document.querySelectorAll('.line')[round].childNodes;

        boxes.forEach( (box, i) => {
          box.innerHTML = wordToFind[i];
          if (!box.classList.contains('placed')) box.classList.add('wrong');
        });
      }

      const displayGuess = () => {
        const boxes = document.querySelectorAll('.line')[round].childNodes;

        boxes.forEach( (box, i) => {
          if (guess[i] === wordToFind[i]) {
            box.innerHTML = wordToFind[i];
            box.classList.add('placed');
          }
          else if (box.classList.contains('placed')) {
            box.innerHTML = guess[i];
            box.classList.remove('placed');
          }
          else box.innerHTML = guess[i];
        });
      }

      const prepareNextLine = () => {
        const boxes = document.querySelectorAll('.line')[round].childNodes;
        const nextBoxes = document.querySelectorAll('.line')[round+1].childNodes;
        boxes.forEach( (box, i) => {
          if (guess[i] === wordToFind[i]) {
            nextBoxes[i].innerHTML = wordToFind[i];
            nextBoxes[i].classList.add('placed');
          }
        });

      }

      if (guess === wordToFind) {
        console.log('winner');
        return;
      }
      else if (round === maxAttempts - 1) {
        console.log('looser');
        displayAnswer();
        return;
      }
      else {
        prepareNextLine();
        displayGuess();
        round++;
      }
    }

    const handleInput = () => {

      const verifyInput = (input) => {
        const regex = /^([a-z]){7}$/i;
        return regex.test(input) ? true : false;
      }

      const input = document.querySelector('input').value;
      verifyInput(input) ? attempt(input.toUpperCase()) : console.log('wrong') ;
    }

    if (round < maxAttempts) {
      const proposeButton = document.getElementsByTagName('button')[0];
      proposeButton.addEventListener('click', () => handleInput() );
    }
    else return;
  }

  prepareGame();
  game();
}

app();