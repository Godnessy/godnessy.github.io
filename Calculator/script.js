'use strict';
/* TODO:
3. find way to change calc to accept numbers (get input from user*10 +input *10 etc etc and then /10 when input goes to operator)
4. make all outputs intergers and not strings.
7. Make the Ui nicer - Maybe use tailwindCSS for the exp. 
*/
let arg1 = '';
let arg2 = '';
let result = '';
let operand = null;
let historyBox = new Map();
const showUi = (ui, value) => {
  ui.innerHTML = value;
};

//UI change variables
const arg1_ui = document.getElementById('arg1');
const arg2_ui = document.getElementById('arg2');
const result_ui = document.getElementById('result');
const operand_ui = document.getElementById('operand');
const history_ui = document.getElementById('historyResult');
const historyCalc_ui = document.getElementById('historyCalc');

// History display/hide

document.getElementById('histDisp').onclick = showHide;

function showHide() {
  document.getElementById('historyContainer').style.display == 'none'
    ? (document.getElementById('historyContainer').style.display = 'grid')
    : (document.getElementById('historyContainer').style.display = 'none');
}

const allowedString = '0 1 2 3 4 5 6 7 8 9 Enter Backspace . + - * /';
const allowedArr = allowedString.split(' ');

window.addEventListener('keyup', (e) => {
  const key = String(e.key);
  if (!allowedArr.includes(key)) {
    console.log('nothing');
    return;
  }
  if (Number.isInteger(Number(key))) {
    console.log(`Adding ${key} to calc`);
    return calc(key);
  }
  switch (key) {
    case '+':
    case '-':
    case '*':
      return console.log(`${operator(key)}`), operator(key);
    case '/':
      return operator('÷');
    case 'Enter':
      return showResult();
    case 'Backspace':
      return reset();
    case '.':
    case ',':
      return calc(key);
  }
});

//Number button selector
document.querySelectorAll('.numberBtn').forEach((a) => {
  a.addEventListener('click', (a) => {
    calc(Number(a.target.textContent));
  });
});

//Operator button selector
document.querySelectorAll('.operandBtn').forEach((a) => {
  a.addEventListener('click', (a) => {
    operator(a.target.textContent);
  });
});

//Plus minus functionality
let plusMinus = () => {
  if (operand == null) {
    console.log('lvl1');
    String(arg1)[0] == '-'
      ? (arg1 = String(arg1).substring(1))
      : (arg1 = `-${arg1}`);
  } else {
    console.log('lvl2');
    arg2[0] === '-' ? (arg2 = arg2.substring(1)) : (arg2 = `-${arg2}`);
    showUi(arg2_ui, '');
  }
  showUi(result_ui, '');
  showUi(arg1_ui, arg1);
  showUi(arg2_ui, arg2);
};
document.getElementById('plusMinus').onclick = plusMinus;

//fractional numbers functionality
let fraction = () => {
  showUi(result_ui, '');
  arg2 == '' ? (arg1 = `${arg1}.`) : (arg2 = `${arg2}.`);
  showUi(arg1_ui, arg1);
  showUi(arg2_ui, arg2);
};

document.getElementById('point').onclick = fraction;

// document
//   .getElementById('plusMinus')
//   .addEventListener('click', plusMinus(operand));
//Adding numbers to args
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
  const int1 = Number(arg1);
  const int2 = Number(arg2);
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

//record the args, operator and result to be saved into history calc object
function recordHistory(arg1, operator, arg2, result) {
  let calc = String(`${arg1} ${operator} ${arg2}`);
  historyBox.set(result, calc);
}

//Insert history into 2 lists to be picked later by clicking on them

function showHistory(historyBox) {
  showUi(history_ui, '');
  showUi(historyCalc_ui, '');
  for (const [key, value] of historyBox) {
    const newValue = `<li class ="data" id="histResult">= ${String(key)}</li>`;
    const newCalc = `<li class ="data" id="histCalc">${String(value)}</li>`;

    history_ui.insertAdjacentHTML('afterbegin', newValue);
    historyCalc_ui.insertAdjacentHTML('afterbegin', newCalc);
  }
}

//Adding elements from history back to calculation
document.querySelectorAll('.dataInputs').forEach((a) => {
  a.addEventListener('click', (a) => {
    let innerHtml = a.target.innerHTML;

    if (a.target.id == 'histCalc') {
      reset();
      let futureCalc = innerHtml.split(' ');
      calc(futureCalc[0]);
      operator(futureCalc[1]);
      calc(futureCalc[2]);
    } else if (operand == null) {
      reset();
      calc(innerHtml.substring(2));
    } else if (arg2 == '') {
      calc(innerHtml.substring(2));
    }
  });
});

document.getElementById('deleteHist').onclick = clearHistory;
function clearHistory() {
  historyBox.clear();
  showUi(history_ui, '');
  showUi(historyCalc_ui, '');
}

//UI functions
document.getElementById('equals').onclick = showResult;

function showResult() {
  if (operand == null) {
    return;
  } else if (arg2 == '') {
    return;
  } else {
    operator(operand);
    recordHistory(arg1, operand, arg2, result);
    showHistory(historyBox);
    operand = null;
    showUi(arg1_ui, '');
    showUi(arg2_ui, '');
    showUi(operand_ui, '');
    showUi(result_ui, result);
    arg1 = result;
    arg2 = '';
  }
}
