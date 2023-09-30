'use strict';
// Ex 1
var input = "the quick brown fox";
var arr = input.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
var result = arr.join(" ");
console.log(result);


// Ex 2
console.log(Math.max(1,0,1));
console.log(Math.max(0,-10,-20));
console.log(Math.max(1000, 510, 440));


// Ex 3
function right(ex3str) {
    if (ex3str.length > 3) {
        return ex3str.slice(-3) + ex3str.slice(0,-3)
    }
    return ex3str;
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


// Ex 4
function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    }
    if (angle == 90) {
        return "Right angle";
    }
    if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    }
    if (angle == 180) {
        return "Straight angle";
    }
    return "Unexpected input."
}
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));
