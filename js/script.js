/**
 * JS
 */

 function convertCurrency(amount) {
  const converted = {
    USD: amount * 0.76,
    GPB: amount * 0.53,
    AUD: amount * 1.01,
    MEX: amount * 13.30
  };
  return converted;
}

const { USD, GPB, AUD, MEX } = convertCurrency(100);
console.log(USD, GPB, AUD, MEX);

function tipCalc({
  total = 100, 
  tax = 0.13, 
  tip = 0.15,
} = {}) {
  return total + (tip * total) + (tax * total);
}

const bill = tipCalc({});
console.log(bill);


