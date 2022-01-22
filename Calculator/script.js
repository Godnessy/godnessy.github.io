let result = "";
let arg1 = "";
let arg2 = null;
let operand = null;

function calc(num) {
  if (operand === null) {
    arg1 += num;
    showArg1();
  } else {
    arg2 = num;
    showArg2();
    operator(operand);
  }
}

function operator(sign) {
  operand = sign;
  showOperand();
  if (arg2 === null) {
  } else {
    switch (sign) {
      case `+`:
        a = parseInt(arg1) + parseInt(arg2);
        result = a.toString();
        console.log();
        break;
      case `-`:
        a = parseInt(arg1) - parseInt(arg2);
        result = a.toString();

        break;
      case `*`:
        a = parseInt(arg1) * parseInt(arg2);
        result = a.toString();

        break;
      case `/`:
        a = parseInt(arg1) / parseInt(arg2);
        result = a.toString();

        break;
    }
  }
}

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

const showOperand = () => {
  document.getElementById("operand").innerHTML = operand;
};

const showResult = () => {
  document.getElementById("arg1").innerHTML = "";
  document.getElementById("arg2").innerHTML = "";
  document.getElementById("operand").innerHTML = "";
  document.getElementById("result").innerHTML = result;
};
const showArg1 = () => {
  document.getElementById("arg1").innerHTML = arg1;
};
const showArg2 = () => {
  document.getElementById("arg2").innerHTML = arg2;
};
