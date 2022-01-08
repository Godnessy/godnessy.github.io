let result = "";
let arg1 = "";
let arg2 = "";
let operand = null;

const calc = (num) => {
  if (operand === null) {
    num === (arg1 += result);
  } else {
    num.toString((arg2 += result));
  }

  showResult();
};

const showResult = () => {
  document.getElementById("result").innerHTML = result;
};
const showArg1 = () => {
  document.getElementById("arg1").innerHTML = arg1;
};
const showArg2 = () => {
  document.getElementById("arg2").innerHTML = arg2;
};
