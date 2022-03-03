'use strict';

let arg1 = '';
let arg2 = '';
let result = '';
let operand = null;
const historyBox = [];
const showUi = (ui, value) => {
  ui.innerHTML = value;
};
const arg1_ui = document.getElementById('arg1');
const arg2_ui = document.getElementById('arg2');
const result_ui = document.getElementById('result');
const operand_ui = document.getElementById('operand');
const history_ui = document.querySelector('.historyBox');

// History display/hide

document.getElementById('histDisp').onclick = showHide;

function showHide() {
  document.getElementById('historyContainer').style.display == 'none'
    ? (document.getElementById('historyContainer').style.display = 'grid')
    : (document.getElementById('historyContainer').style.display = 'none');
}

//Number button selector
document.querySelectorAll('.numberBtn').forEach((a) => {
  a.addEventListener('click', (a) => {
    calc(a.target.textContent);
  });
});

//Operator button selector
document.querySelectorAll('.operandBtn').forEach((a) => {
  a.addEventListener('click', (a) => {
    operator(a.target.textContent);
  });
});

function calc(num) {
  if (operand === null) {
    arg1 += num;
    showUi(arg1_ui, arg1);
  } else {
    arg2 += num;
    showUi(arg2_ui, arg2);
  }
}

const operatorMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '÷': (a, b) => a / b,
};

function operator(sign) {
  operand = sign;
  showUi(operand_ui, sign);
  if (arg2 === '') return;
  const int1 = parseInt(arg1);
  const int2 = parseInt(arg2);
  const func = operatorMap[sign];
  result = func(int1, int2);

  return result;
}

document.getElementById('reset').onclick = reset;
function reset() {
  result = '';
  arg1 = '';
  arg2 = '';
  operand = null;
  showUi(arg1_ui, arg1);
  showUi(result_ui, '');
  showUi(arg2_ui, arg2);
  showUi(operand_ui, null);
  // recordHistory(result);
}

function recordHistory() {
  let history = (document.querySelector('.historyBox').value = result);
  historyBox.push(history);
  document.querySelector('.historyBox').innerHTML = historyBox;
}

//UI functions
document.getElementById('equals').onclick = showResult;

function showResult() {
  operator(operand);
  operand = null;
  recordHistory(result);
  showUi(arg1_ui, '');
  showUi(arg2_ui, '');
  showUi(operand_ui, '');
  showUi(result_ui, result);
  arg1 = result;
  arg2 = '';
  showUi(history_ui, historyBox);
}
