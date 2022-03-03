'use strict';

let arg1 = '';
let arg2 = '';
let result = '';
let operand = null;
let historyBox = new Map();
const showUi = (ui, value) => {
  ui.innerHTML = value;
};
const arg1_ui = document.getElementById('arg1');
const arg2_ui = document.getElementById('arg2');
const result_ui = document.getElementById('result');
const operand_ui = document.getElementById('operand');
const history_ui = document.getElementById('history');
const historyCalc_ui = document.getElementById('historyCalc');

// History display/hide

// function clearHistory() {
//   historyBox.clear();
//   showUi(history_ui, '');
//   showUi(historyCalc_ui, '');
//   console.log('clear history123');
// }
// document.getElementById('deleteHist').onclick = clearHistory();

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

//Adding numbers to calculate
function calc(num) {
  if (operand === null) {
    arg1 += num;
    showUi(arg1_ui, arg1);
  } else {
    arg2 += num;
    showUi(arg2_ui, arg2);
  }
}

//What each operator does
const operatorMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '÷': (a, b) => a / b,
};

//working the opeartor on the numbers set
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
}

//record the args, operator and result to be saved into history calc map
function recordHistory(arg1, operator, arg2, result) {
  let calc = String(`${arg1} ${operator} ${arg2}`);
  historyBox.set(result, calc);
  showHistory(result, calc);
}

function showHistory(result, calc) {
  showUi(history_ui, `${result} <br>`);
  showUi(historyCalc_ui, `=  ${calc}`);
}

//UI functions
document.getElementById('equals').onclick = showResult;

function showResult() {
  operator(operand);
  recordHistory(arg1, operand, arg2, result);
  operand = null;
  showUi(arg1_ui, '');
  showUi(arg2_ui, '');
  showUi(operand_ui, '');
  showUi(result_ui, result);
  arg1 = result;
  arg2 = '';
}
