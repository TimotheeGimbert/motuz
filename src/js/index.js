import '../style/index.scss';

const nbLetters = 7;
const nbLines = nbLetters-1;

const board = document.querySelector('.board');
[...Array(nbLines)].map( () => board.innerHTML += `<div class="line"></div>` );

const lines = [...document.querySelectorAll('.line')];
lines.map( (line) => {
  [...Array(nbLetters)].map( () => line.innerHTML += `<div class="box"></div>` );
});

const game = () => {
  const wordToFind = 'nolwenn';
  const wordProposed = 'nageurs';

  let placedLetters = [...Array(nbLetters)];

  lines[0].childNodes.forEach( (box, index) => {
    box.innerHTML = wordProposed[index].toUpperCase();
    if (wordProposed[index].toUpperCase() === wordToFind[index].toUpperCase()) {
      box.classList.add('placed');
      placedLetters[index] = wordProposed[index];
      console.log(placedLetters);
    }
    else if (wordToFind.toUpperCase().includes(wordProposed[index].toUpperCase())) {
      box.classList.add('misplaced');
    }
  });
}

game();