// libHello.js
const person ={
    name: 'Wanprasert' ,
    weight: 63
}

function sayHello(){
    console.log("Hello World!")
}

function cube(x){
    return x*x*x;
}

const add = (a,b) => a+b;

const status = true;

module.exports = {person, sayHello,cube, add, status}