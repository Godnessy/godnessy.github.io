'use strict';

let arg1 = '';
let arg2 = '';
let operand = null;
let historyBox = '';
const showUi = (ui, value) => {
  ui.innerHTML = value;
};
const arg1_ui = document.getElementById('arg1');
const arg2_ui = document.getElementById('arg2');
const result_ui = document.getElementById('result');
const operand_ui = document.getElementById('operand');
const history_ui = document.querySelector('.historyBox');

//Number button selector
document.querySelectorAll('.numberBtn').forEach((a) => {
  a.addEventListener('click', (a) => {
    addArgs(a.target.textContent);
  });
});

//Operator button selector
document.querySelectorAll('.operandBtn').forEach((a) => {
  a.addEventListener('click', (a) => {
    calculate(a.target.textContent);
  });
});

//-+ button function^
document.getElementById('plusMinus').onclick = plusMinus;
function plusMinus() {
  if (arg2 === '') {
    if (arg1[0] === '-') {
      arg1 = arg1.substring(1);
      showUi(arg1_ui, arg1);
    } else {
      arg1 = `-${arg1}`;
      showUi(arg1_ui, arg1);
    }
  } else if (arg2[0] != '-') {
    arg2 = `-${arg2}`;
    showUi(arg2_ui, arg2);
  } else {
    arg2 = arg2.substring(1);
    showUi(arg2_ui, arg2);
  }
}

function addArgs(num) {
  if (operand === null) {
    arg1 += num;
    showUi(arg1_ui, arg1);
    console.log(`arg1 is ${arg1}`);
  } else {
    arg2 += num;
    showUi(arg2_ui, arg2);
    console.log(`arg2 is ${arg2}`);
  }
}

const operatorMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  X: (a, b) => a * b,
  '/': (a, b) => a / b,
};

function calculate(sign) {
  operand = sign;
  showUi(operand_ui, sign);
  if (arg2 === '') return;
  const int1 = Number(arg1);
  const int2 = Number(arg2);
  const func = operatorMap[sign];
  return func(int1, int2);
}

document.getElementById('reset').onclick = reset;
function reset() {
  arg1 = '';
  arg2 = '';
  operand = null;
  showUi(arg1_ui, arg1);
  showUi(result_ui, '');
  showUi(arg2_ui, arg2);
  showUi(operand_ui, null);
}

// document.getElementById('history').onclick = () => {
//   historyBox = '';
//   showUi(history_ui, `${historyBox} `);
// };

function recordHistory(result) {
  historyBox = `${(historyBox += result)}, `;
  showUi(history_ui, `${historyBox}`);
}

//UI functions
document.getElementById('equals').onclick = showResult;
function showResult() {
  const result = calculate(operand);
  recordHistory(result);
  showUi(history_ui, `${historyBox} `);
  operand = null;
  showUi(arg1_ui, '');
  showUi(arg2_ui, '');
  showUi(operand_ui, '');
  showUi(result_ui, result);
  arg1 = result;
  arg2 = '';
}
