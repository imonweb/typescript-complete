"use strict";
/* ====== Arrays & Objects ====== */
/*  3 types of array */
let stringArr = ['one', 'hey', 'John'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Jack';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
// guitars = stringArr 
// mixedData = guitars 
// guitars = mixedData
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Jake', 44, true];
let mixed = ['John', 1, false];
// mixed = myTuple
// myTuple = mixed
myTuple[1] = 44;
/*  Objects */
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop1 = 'johnny';
let evh = {
    name: 'Eddie',
    // active: false,
    active: true,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
// evh = jp
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
// enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
