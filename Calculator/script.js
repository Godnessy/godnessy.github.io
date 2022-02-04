/* eslint-disable no-debugger */
'use strict';

let arg1 = '';
let arg2 = '';
let result = '';
let operand = null;
const showUi = (ui, value) => {
  ui.innerHTML = value;
};
const arg1_ui = document.getElementById('arg1');
const arg2_ui = document.getElementById('arg2');
const result_ui = document.getElementById('result');
const operand_ui = document.getElementById('operand');

document.querySelectorAll('.numberBtn').forEach((a) => {
  a.addEventListener('click', (a) => {
    calc(a.target.textContent);
  });
});

document.querySelectorAll('.operandBtn').forEach((a) => {
  a.addEventListener('click', (a) => {
    operator(a.target.textContent);
  });
});

function calc(num) {
  if (operand === null) {
    arg1 += num;
    showUi(arg1_ui, arg1);
    console.log(`arg1 is ${arg1} and is ${typeof arg1}`);
  } else {
    arg2 += num;
    showUi(arg2_ui, arg2);
    console.log(`arg2 is ${arg2} and is ${typeof arg2}`);
  }
}

const operatorMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

function operator(sign) {
  operand = sign;
  showUi(operand_ui, sign);
  if (arg2 === '') return;
  const int1 = parseInt(arg1);
  const int2 = parseInt(arg2);
  const func = operatorMap[sign];
  result = func(int1, int2);

  console.log(
    `arg1 (a) is ${int1},arg2 (b) is ${int2}, c is currently ${result}, operand is ${operand}`
  );
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

//UI functions

// eslint-disable-next-line no-unused-vars
document.getElementById('equals').onclick = showResult;

function showResult() {
  operator(operand);
  console.log(
    `arg1 (a) is ${arg1},arg2 (b) is ${arg2}, c is currently ${result}, operand is ${operand}`
  );
  operand = null;
  showUi(arg1_ui, '');
  showUi(arg2_ui, '');
  showUi(operand_ui, '');
  showUi(result_ui, result);
  arg1 = result;
  arg2 = '';
}
