'use strict';
// Ex 1 - ES6 Syntax
const gretter = (myArray, counter) => {  
    const greetText = "Hello";

    for (const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
};

gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3); 


// Ex 2 - destructuring assignment syntax + spread operator 
function capialize(word) {
    // lower case for all char
    let lower = [...word.toLowerCase()];
    // upper case for 1st char
    let upper = lower.join("");
    let result = upper[0].toUpperCase() + upper.slice(1);
    return result;
}
console.log(capialize('fooBar'));
console.log(capialize('nodeJs'));


// Ex 3 - array.proto.map
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map((x) => capialize(x));
console.log(capitalizedColors);


// Ex 4 - array.proto.filter
var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter((values) => values < 20);
console.log(filterLessThan20);


// Ex 5 - array.proto.reduce
var array = [1, 2, 3, 4];
const calculateSum = array.reduce((prevValue, currValue) => prevValue + currValue, 0);
const calculateProduct = array.reduce((prevValue, currValue) => prevValue * currValue,1);
console.log(calculateSum);
console.log(calculateProduct);


// Ex 6 - 
class Car {
    constructor(name, year, balance) {
        this.n = name;
        this.y = year;
        this.b = balance;
    }
    details() {
        return `Model: ${this.n} Engine ${this.y}`;
    }
}
class Sedan extends Car{
    info() {
        return `${this.n} has a balance of \$${this.b}`;
    }
}

const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());
const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());