// program to calculate BMI
//BMI = weight (kg) / (height (m) * height (m))

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// declare variables
var name, weight, height, bmi;

// promt user for name, weight and height
rl.question("Enter your name: ", (answer) => {
  name = answer;
  rl.question("Enter your weight (in kg): ", (answer) => {
    weight = answer;
    rl.question("Enter your height (in m): ", (answer) => {
      height = answer;
      bmi = weight / (height * height);
      // display the result in 2 decimal places
      console.log(`${name}, your BMI is ${bmi.toFixed(2)}`);
      rl.close();
    });
  });
});
