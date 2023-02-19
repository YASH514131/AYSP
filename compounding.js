// get the necessary elements from the DOM
const principalInput = document.getElementById("principal");
const interestInput = document.getElementById("interest");
const timeInput = document.getElementById("time");
const calculateButton = document.getElementById("calculate");
const resultDiv = document.getElementById("result");

// define the function that calculates the future value
function calculateFutureValue(principal, interest, time) {
  const rate = interest / 100;
  const factor = 1 + rate;
  const exponent = time;
  const futureValue = principal * Math.pow(factor, exponent);
  return futureValue.toFixed(2);
}

// add an event listener to the calculate button
calculateButton.addEventListener("click", function() {
  const principal = parseFloat(principalInput.value);
  const interest = parseFloat(interestInput.value);
  const time = parseInt(timeInput.value);
  const futureValue = calculateFutureValue(principal, interest, time);
  const investment = parseFloat(principalInput.value);
  const totalValue = (parseFloat(futureValue) + investment).toFixed(2);
  resultDiv.innerHTML = `The future value of your investment after ${time} years at an annual interest rate of ${interest}% starting with an initial investment of $${investment} is $${totalValue}.`;
});
