const persons = [ {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    budget: 35000,
    eyeColor: "blue"
} ,

{
    firstName: "Dee",
    lastName: "Walk",
    age: 25,
    budget: 30000,
    eyeColor: "blue"
} ,

{
    firstName: "John",
    lastName: "Wick",
    age: 45,
    budget: 50000,
    eyeColor: "blue"
} ,

{
    firstName: "Michael",
    lastName: "John",
    age: 48,
    budget: 56000,
    eyeColor: "blue"
} ,];

let result = 0;

for (let person of persons) {

    result += person.budget;
}

console.log("Sum of Budget : " + result);