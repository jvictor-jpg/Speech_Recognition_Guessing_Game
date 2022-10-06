const minValue = 1;
const maxValue = 1000;
const secretNumber = pickRandomNumber();

const elementMinValue = document.getElementById('min-value');
elementMinValue.innerHTML = minValue;

const elementMaxValue = document.getElementById('max-value');
elementMaxValue.innerHTML = maxValue;

function pickRandomNumber() {
  return parseInt(Math.random() * maxValue + 1);
}

console.log(secretNumber);
