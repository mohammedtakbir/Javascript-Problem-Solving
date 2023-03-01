//* problem-01
//? how do you add an element at the beginning of an array and end of an array
// let arr = [1, 2, 3, 4, 5];
// arr.push(100) //? add an element end of the array
// arr.unshift(200) //? add an element beginning of the array
// console.log(arr)

//? we can add element with spread operator
// arr = ['start', ...arr, 'end'];
// console.log(arr)

//* problem-02
//? how do you create a private variable in JS?
// function secret(){
//     const private = 'secret nuclear code';
//     return function(){
//         return private;
//     }
// }
// const getPrivate = secret();
// console.log(getPrivate())

//* problem-03
//? what is the output?
// var num = 4;
// function outer(){
//     var num = 2;
//     function inner(){
//         num++;
//         var num = 5;
//         console.log(num);
//     };
//     inner();
// }
// outer();

//* problem-04
//? What is the output?
// console.log(typeof typeof 1);
// console.log(typeof (typeof 1));

//? typeof 1 return---> number
//? typeof number return ---> string

//* problem-05
//? What is the output?
// const hero = {
//     name: 'John Doe',
//     getSecretIdentity: function(){
//         return this.name;
//     }
// }
// const identity = hero.getSecretIdentity.bind(hero);
// console.log(identity())
// console.log(hero.getSecretIdentity())

//* problem-06
//? add two numbers dynamically using prompt
// const a = prompt('Add first number');
// const b = prompt('Add second number');
// const sum = parseFloat(a) + parseFloat(b);
// console.log(sum)

//* problem-07
//? square root of a number
// console.log(Math.sqrt(128))

//* problem-08
//? calculate the area of a triangle
// const base = 10;
// const height = 15;
// const area = (base * height) / 2;
// console.log(area)

//* problem-09
//? calculate the area of a triangle using Heron's formula
// const a = 10;
// const b = 10;
// const c = 10;
// const s = (a + b + c) / 2;
// const area = Math.sqrt(s*(s - a) * (s - b) * (s - c))
// console.log(area)

//* problem-10
//? swapping variables value
// let a = 5;
// let b = 10;
// console.log(a, b)
//? first way
// let temp = a;
// console.log(a, b)
// a = b;
// b = temp;
// console.log(a, b)
//? second way
// [b, a] = [a, b];
// console.log(a, b)


















//* hackernoon
//* problem-06
//? Print numbers from 1 to 10
// let i = 0;
// while(i < 10){
//     console.log(i)
//     i++;
// }