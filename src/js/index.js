import '../style/index.scss';


const game = (wordToFind) => {

  let lettersFound = [...Array(nbLetters)];

  const buildBoard = () => {
    const board = document.querySelector('.board');
    [...Array(attemptsLeft)].map( () => board.innerHTML += `<div class="line"></div>` );
    const lines = [...document.querySelectorAll('.line')];
    lines.map( (line) => {
      [...Array(nbLetters)].map( () => line.innerHTML += `<div class="box"></div>` );
    });
    const proposeButton = document.getElementsByTagName('button')[0];
    proposeButton.addEventListener('click', () => handleInput() );
  }

  const handleInput = () => {
    const verifyInput = (input) => {
      const regex = /^([a-z]){7}$/i;
      return regex.test(input) ? true : false;
    }
    const input = document.querySelector('input').value;
    verifyInput(input) ? round(input) : null ;
  }

  const round = (input) => {

    const displayInput = (word) => {
      const lineIndex = totalAttempts - attemptsLeft;
      const line = document.querySelectorAll('.line')[lineIndex];
      line.childNodes.forEach( (box, index) => {
        box.innerHTML = word[index];
        if (word[index] === wordToFind[index]) {
          box.classList.add('placed');
          lettersFound[index] = word[index];
        }
        else if (wordToFind.includes(word[index])) box.classList.add('misplaced');
        else if (box.classList.contains('placed')) box.classList.remove('placed');
      });
    }
  
    const prepareNextLine = () => {
      attemptsLeft--;
      let lineIndex = totalAttempts - attemptsLeft;
      const line = document.querySelectorAll('.line')[lineIndex];
      lettersFound.forEach( (letter, index) => {
        if (letter != undefined) {
          line.childNodes[index].classList.add('placed');
          line.childNodes[index].innerHTML = letter;
        }
      });
    }

    displayInput(input.toUpperCase());
    prepareNextLine();
  }
  
  buildBoard();
}


const generatedWordToFind = 'nolwenn'.toUpperCase();
const nbLetters = generatedWordToFind.length;
const totalAttempts = nbLetters-1;
let attemptsLeft = totalAttempts;

game(generatedWordToFind);