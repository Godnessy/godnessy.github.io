"use strict";
const arg1_ui = document.getElementById("arg1");
const result_ui = document.getElementById("result");
let operand = null;
const operand_ui = document.getElementById("operand");
result = "";
arg1 = "";

function calc(num) {
  if (operand === null) {
    arg1 += num;
    showUi(arg1_ui, arg1);
    console.log(`result is ${result} and is ${typeof result}`);
  } else {
    result = num;
    showUi(result_ui, result);
    operator(operand);
    console.log(`arg2 is ${arg2} and is ${typeof result}`);
  }
}

function operator(sign) {
  operand = sign;
  showUi(operand_ui, operand);
  let a = parseInt(arg1);
  let b = parseInt(result);
  let c = 0;
  if (result == "") {
  } else {
    switch (sign) {
      case `+`:
        c = a + b;
        break;
      case `-`:
        c = a - b;
        break;
      case `*`:
        c = a * b;
        break;
      case `/`:
        c = a / b;
        break;
    }
  }
  console.log(`arg1 (a) is ${a},result  (arg2) is ${b}, c is currently ${c}`);
  result = c.toString();
}

// }

function reset() {
  result = "";
  arg1 = "";
  arg2 = null;
  operand = null;
  document.getElementById("result").innerHTML = "";
  document.getElementById("arg1").innerHTML = arg1;
  document.getElementById("operand").innerHTML = operand;
  document.getElementById("arg2").innerHTML = arg2;
}

//UI functions

const showResult = () => {
  showUi(arg1_ui, "");
  showUi(operand_ui, "");
  showUi(result_ui, result);
};

const showUi = (ui, value) => {
  ui.innerHTML = value;
};
