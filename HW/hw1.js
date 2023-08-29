//Program to remove leading and trailing zeros from an input string
//example: "230.500" -> "230.5"
//example: "00402" -> "402"
//example: "03.1600" -> "3.16"
//example: "00.00" -> "0"

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  var num;
  
  rl.question("Enter a string: ", (answer) => {
    num = answer;
    var x = Number(num);
  
    console.log(`The input string is ${num} output is ${x} `);
    rl.close();
  });
// Enter a string: 230.500
// The input string is 230.500 output is 230.5 