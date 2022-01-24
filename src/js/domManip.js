const buttonRemover = () => {
  const btn = document.getElementsByTagName('button')[0];
  btn.addEventListener('click', () => {
    btn.style.display = 'none';
  });
}

export { buttonRemover };