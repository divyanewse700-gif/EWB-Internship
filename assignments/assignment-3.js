// Assignment 3: Conditional Logic Implementation
const score = 85;
let grade;

if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else grade = "F";

switch (Math.floor(score / 10)) {
  case 10:
  case 9: grade = "A"; break;
  case 8: grade = "B"; break;
  case 7: grade = "C"; break;
  case 6: grade = "D"; break;
  default: grade = "F";
}

const status = score >= 60 ? "Passed" : "Failed";
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);

