// Assignment 2: Operators, Expressions, and Input Handling
const readline = require("node:readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function prompt(message) {
  return new Promise((resolve) => rl.question(message, resolve));
}

async function main() {
  const subtotal = Number(await prompt("Enter bill subtotal (sample: 100): "));
  const tipPercentage = Number(await prompt("Enter tip percentage (sample: 15): "));

  if (!Number.isFinite(subtotal) || subtotal < 0 || !Number.isFinite(tipPercentage) || tipPercentage < 0) {
    console.log("Please enter valid non-negative numbers for the subtotal and tip percentage.");
    return;
  }

  const tip = subtotal * tipPercentage / 100;
  let total = subtotal;
  total += tip;
  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
}

main().catch((error) => {
  console.error("Assignment could not finish:", error.message);
  process.exitCode = 1;
}).finally(() => rl.close());

