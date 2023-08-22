/*
getBudgets([
    ( names: "John", age: 21, budget: 23000),
    ( names: "Steve", age: 32, budget: 40000),
    ( names: "Martin", age: 16, budget: 2700)
]) -> 65700

getBudgets([
    ( names: "John", age: 21, budget: 29000),
    ( names: "Steve", age: 32, budget: 32000),
    ( names: "Martin", age: 16, budget: 1600)
]) -> 62600
*/

function getBudgets(people) {
    let totalBudget = 0;
    for (let i = 0; i < people.length; i++) {
        totalBudget += people[i].budget;
    }
    return totalBudget;
}

console.log(getBudgets([
    { names: "John", age: 21, budget: 23000 },
    { names: "Steve", age: 32, budget: 40000 },
    { names: "Martin", age: 16, budget: 2700 }
])); // 65700

console.log(getBudgets([
    { names: "John", age: 21, budget: 29000 },
    { names: "Steve", age: 32, budget: 32000 },
    { names: "Martin", age: 16, budget: 1600 }
])); // 62600
