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
// let num = 4;
// function outer(){
//     let num = 2;
//     function inner(){
//         num++;
//         let num = 5;
//         console.log(num);
//     };
//     inner()
// }
// outer()

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