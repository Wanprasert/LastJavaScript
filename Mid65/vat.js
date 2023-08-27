const persons = [ {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    budget: 45000,
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

let arr = [];

for (let person of persons) {

    if (person.budget <= 35000) arr.push(7);
    else arr.push(10);
}

for (let index = 0 ; index < persons.length ; index++) {

    console.log(persons[index].firstName + "\nVax : " + (persons[index].budget * (arr[index] / 100)) + "\n");
}

