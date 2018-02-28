'use strict';
// // declaration
// function modulus(){

// }
// expression
// const modulus2 = function(params){

// }


// const isEven = function(param) {
//     const result = param % 2 === 0;
//     console.log(result);
//     return result;
// };

// const wellIsIt = isEven (10);
// console.log(wellIsIt);

// const adder = function (eggs, bacon) {
//     const halfRecipe = eggs + 1;
//     const  secondHalf = bacon + 2;
//     const result = halfRecipe + secondHalf;
//     return result;
// };

// const sandwich = adder (9 , 2);
// console.log(sandwich);

// const subtractor = function (myPart , yourPart) {
//             const result = myPart - yourPart;
//             return result
// };
// const rentDue = subtractor (600 , 450);
// console.log(rentDue);


const mathTeacher = {
    name: "Kendra",
    good: false,
    adder: function(arg1, arg2){
    const result = arg1 + arg2;
    return result;
    },
}

console.log (mathTeacher.adder(1,2));
