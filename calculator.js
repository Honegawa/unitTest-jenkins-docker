// Handle float results with 2 decimals because of floating point math issue
// cf https://stackoverflow.com/questions/588004/is-floating-point-math-broken
function calculator(a, b, operator) {
  let res;

  if (a === "" || b === "" || operator === "" ) {
    return "Empty paramater detected"
  }

  if (isNaN(a) || isNaN(b)) {
    return "Invalid input";
  }

  switch (operator) {
    case "add":
      res = a + b;
      break;
    case "subtract":
      res = a - b;
      break;
    case "multiply":
      res = a * b;
      break;
    case "divide":
      res = a / b;
      break;
    default:
      res = "Operation not supported";
      break;
  }
  if (res === "Operation not supported") {
    return res;
  }

  return Number(res.toFixed(2));
}

module.exports = calculator;
