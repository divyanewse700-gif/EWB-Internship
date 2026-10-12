// Assignment 4: Loop Control Structures
console.log("-- Multiplication Table of 5 --");
for (let multiplier = 1; multiplier <= 5; multiplier++) {
  console.log(`5 x ${multiplier} = ${5 * multiplier}`);
}

console.log("\n-- First number > 10 divisible by 6 --");
let candidate = 11;
while (candidate > 10) {
  if (candidate % 6 === 0) {
    console.log(`Found: ${candidate}`);
    break;
  }
  candidate++;
}

console.log("\n-- do...while with continue (odd numbers 1 through 5) --");
let number = 0;
do {
  number++;
  if (number % 2 === 0) continue;
  console.log(`Odd number: ${number}`);
} while (number < 5);

