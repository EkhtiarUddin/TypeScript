"use strict";
//even number
// function isEven(a:number):boolean{
//     return a % 2 == 0;
// }
// console.log(isEven(5));
//..............//
// is Divisible by 4 & 8
// function isDisible(a:number):boolean{
//     return(a%4 && a%8)==0
// }
// console.log(isDisible(16))
//..................//
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }
// console.log(circ(3.4));
//...............//
let greet;
greet = () => {
    console.log('hello, lead');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
