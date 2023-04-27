const display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value.length === 0 && operator !== '-') return;
  if (isNaN(display.value.slice(-1))) return;
  display.value += operator;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() 
