
// ! Success

// function frequencySort(data) {

//     let result = "";
//     for (let index = data.length - 1 ; index >= 0 ; index--) result += data[index];
    
//     return (result);
// }

// console.log(frequencySort('tree'));
// console.log(frequencySort('cccaaa'));
// console.log(frequencySort('Aabb'));

// ! Success

// function longestValidParentheses(data) {

//     let left = 0 , right = 0;
//     for (let index = 0 ; index < data.length ; index++) {

//         if (data[index] == "(") left++;
//         else if (data[index] == ")") right++;
//     }

//     let result;
//     if (left > right) {

//         result = data.length % right + left;
//     }
//     else {

//         result = (right - left) * 2;
//     }
    
//     return result;
// }

// console.log(longestValidParentheses("(()"));
// console.log(longestValidParentheses(")()())"));
// console.log(longestValidParentheses("()))))(()())("));

// * old exam

// let arr = [

//     0 , 0 , 0 , 0 , 0 , 0 , 0 ,
//     0 , 0 , 0 , 0 , 0 , 0 , 0 ,
//     0 , 0 , 0 , 999 , 0 , 0 , 0 ,
//     0 , 0 , 0 , 0 , 0 , 0 , 0 ,
//     0 , 0 , 0 , 1 , 0 , 0 , 0 ,
//     0 , 0 , 0 , 0 , 0 , 0 , 0 ,
// ];

// let walk = 31;
// let pattern = ["right" , "right" , "right" , "up" , "up" , "left" , "left" , "left"];

// for (let action of pattern) {

//     if (action == "right") walk += 1;
//     else if (action == "up") walk -= 7;
//     else if (action == "left") walk -= 1;
//     else if (action == "down") walk += 7;
// }

// if (arr[walk] == 999) console.log("Win!!!")
// else console.log("Lose!!!");

// * old exam

// let str = "Hello World";
// let char = [

//     "q" , "w" , "e" , "r" , "t" , "y" ,
//     "u" , "i" , "o" , "p" , "a" , "s" ,
//     "d" , "f" , "g" , "h" , "j" , "k" ,
//     "l" , "z" , "x" , "c" , "v" , "b" , "n" , "m" ,
    
//     "Q" , "W" , "E" , "R" , "T" , "Y" ,
//     "U" , "I" , "O" , "P" , "A" , "S" ,
//     "D" , "F" , "G" , "H" , "J" , "K" ,
//     "L" , "Z" , "X" , "C" , "V" , "B" , "N" , "M"
// ]

// for (let item of str) {

//     for (let dup of char) {

//         if (item === dup) char.splice(char.indexOf(item) , 1);
//     }

// }

// console.log("Missing Char is : " + char);

// * old exam

// const persons = [ {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     budget: 35000,
//     eyeColor: "blue"
// } ,

// {
//     firstName: "Dee",
//     lastName: "Walk",
//     age: 25,
//     budget: 30000,
//     eyeColor: "blue"
// } ,

// {
//     firstName: "John",
//     lastName: "Wick",
//     age: 45,
//     budget: 50000,
//     eyeColor: "blue"
// } ,

// {
//     firstName: "Michael",
//     lastName: "John",
//     age: 48,
//     budget: 56000,
//     eyeColor: "blue"
// } ,];

// let result = 0;

// for (let person of persons) {

//     result += person.budget;
// }

// console.log("Sum of Budget : " + result);

// * old exam

// const persons = [ {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     budget: 35000,
//     eyeColor: "blue"
// } ,

// {
//     firstName: "Dee",
//     lastName: "Walk",
//     age: 25,
//     budget: 30000,
//     eyeColor: "blue"
// } ,

// {
//     firstName: "John",
//     lastName: "Wick",
//     age: 45,
//     budget: 50000,
//     eyeColor: "blue"
// } ,

// {
//     firstName: "Michael",
//     lastName: "John",
//     age: 48,
//     budget: 56000,
//     eyeColor: "blue"
// } ,];

// let result = 0;
// let arr = [];

// for (let person of persons) {

//     if (person.budget <= 35000) arr.push(7);
//     else arr.push(10);
// }

// for (let index = 0 ; index < persons.length ; index++) {

//     console.log(persons[index].firstName + "\nVax : " + arr[index] + "%\n");
// }

// ?