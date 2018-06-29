let buttonOne = document.getElementById('black');
let buttonTwo = document.getElementById('red');

buttonOne.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});

buttonTwo.addEventListener('click', () => {
  document.body.style.backgroundColor = 'black';
});
