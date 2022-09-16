const input = document.querySelector('.container-box-input');
const button = document.querySelector('.container-box-button');
const valueArray = document.querySelectorAll('.container-box-value');
console.log(valueArray);

valueArray[0].innerHTML = '1';
valueArray[1].innerHTML = '0';
valueArray[2].innerHTML = '1';
valueArray[3].innerHTML = '0';

let userInput;

button.addEventListener('click', () => {
  userInput = input.value;
});
