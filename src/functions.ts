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

// let greet: Function;
// greet = () => {
//     console.log('hello, lead');
// }

// const add = (a: number, b: number, c:number | string = 10): void => {
//     console.log(a+b);
//     console.log(c);
// }

// add(5, 10, '20');

// const minus = (a: number, b: number): number => {
//     return a+b;
// }
// let result = minus(10,7);

//~~~~~functions signatures~~~~~~~//
// example 1:

// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }

//example:2
// let calc: (a: number, b: number, c: string) => number;
// calc = ( numOne: number, numTwo: number, action: string) => {
//     if (action == 'add'){
//         return numOne + numTwo;
//     } else{
//         return numOne - numTwo;
//     }
// }

//example 3
let logDetails: (obj: {name:string, age: number}) => void;
type person = {name: string, age: number};

logDetails = (nin: person) => {
    console.log(`${nin.name} is ${nin.age} years old`);
}