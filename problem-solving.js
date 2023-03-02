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

//* problem-11
//? Kilometers to Miles

// function converter(km) {
//     return km * 0.621371;
// }

// document.getElementById('convert-btn').addEventListener('click', () => {
//     const inputField = document.getElementById('input-filed');
//     const kilometers = inputField.value;
//     const result = document.getElementById('result');

//     const miles = converter(kilometers);
//     result.innerText = `${kilometers} Kilometers = ${parseFloat(miles.toFixed(4))} Miles`;

// })

//* problem-12
//? Celsius to Fahrenheit
// function converter(celsius) {
//     return (celsius * 1.8) + 32
// }

// function celsiusToFahrenheit() {
//     const inputField = document.getElementById('input-field');
//     const celsius = inputField.value;
//     const fahrenheit = converter(celsius);

//     const result = document.getElementById('result');
//     result.innerText = `${celsius} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
// }

//* problem-13
//? Check if a number is Positive, Negative, or zero.

//? using Math.sign()
// function checkNumber(num) {
//     const result = Math.sign(num);
//     if (result === 1) {
//         return 'Positive Number';
//     } else if (result === -1) {
//         return 'Negative Number';
//     } else if (result === 0) {
//         return 'Positive 0';
//     } else if (result === -0) {
//         return 'Negative -0';
//     }else{
//         return 'Not a Number';
//     }
// }
// const res = checkNumber('fewew');
// console.log(res);

//? using user defined function
// function checkNumber(num) {
//     if (num > 0) {
//         return 'Positive Number';
//     } else if (num < 0) {
//         return 'Negative Number';
//     } else if (typeof num !== 'number') {
//         return 'Invalid Number'
//     }else if(num === 0){
//         return 'Zero'
//     }
// }
// const res = checkNumber(-587);
// console.log(res);

//* Problem-14
//? Generate a random number

// function generateRandomNumber() {
//     const randomNumbers = Math.round(Math.random() * 1000000000);
//     const randomString = randomNumbers + '';
//     if (randomString.length === 9) {
//         return randomNumbers;
//     } else {
//         return generateRandomNumber();
//     }
// }

// function displayRandomNumber() {
//     const numbers = generateRandomNumber();
//     const randomField = document.getElementById('random-number');
//     randomField.innerText = '017'+numbers;
// }

//* problem-15
//? Check if a number is odd or even
// function oddEven(num) {
//     if (num % 2 === 0){
//         return 'Odd Number';
//     }else{
//         return 'Even Numbers'
//     }
// }
// console.log(oddEven(251))

//* problem-16
//? Check if a number is a prime number or not
// function checkPrimeNumber(num) {
//     if (num === 1) {
//         return `${num} is not a prime number`;
//     } else if (num < 1) {
//         return `Negative value cannot be a prime number`;
//     } else if (num === 2) {
//         return `${num} is a prime number`;
//     }
//     let prime = '';
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             prime = `${num} is a not a prime number`;
//             break;
//         } else {
//             prime = `${num} is a prime number`;
//         }
//     };
//     return prime;
// }
// console.log(checkPrimeNumber(57))

//* problem-17
//? find the highest/lowest number within an array using Math.max()/ Math.min()
// const arr = [35, 45, 15, 25, 85, 65, 47, 38];
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))

//? find the highest/lowest number within an array using array sort()

// const lowest = arr.sort((a, b) => a - b);
// console.log(lowest[0])
// console.log(lowest[1]) //? second lowest

// const highest = arr.sort((a, b) => b-a);
// console.log(highest[0])
// console.log(highest[1]) //? second highest


//? find the highest/lowest number within an array using bangla systems
//? highest
// function highest(num){
//     let i = 0;
//     let highest = num[0];
//     while(i<num.length){
//         const number = num[i];
//         if(number > highest){
//             highest = number
//         }
//         i++;
//     };
//     return highest;
// }
// console.log(highest(arr))


//? lowest
// function lowest(num){
//     let lowest = num[0];
//     for(let i = 0; i < num.length; i++){
//         const number = num[i];
//         if(number < lowest){
//             lowest = number
//         }
//     }
//     return lowest;
// };
// console.log(lowest(arr))

//* problem-18
//? find the second highest/second lowest number within an array using bangla systems
//? second highest
// const arr = [35, 45, 15, 25, 85, 65, 47, 38];
// function secondHighest(arr) {
//     let highest = arr[0];
//     let secondHighest = arr[0];
//     for (const num of arr) {
//         if (num > highest) {
//             highest = num;
//         } else if (num > secondHighest && highest > secondHighest) {
//             secondHighest = num;
//         }
//     };
//     return secondHighest;

// }
// console.log(secondHighest(arr))

//? second lowest
// function secondLowest(arr) {
//     let lowest = arr[0];
//     let secondLowest = arr[0];
//     let i = 0;
//     while(i < arr.length){
//         const element = arr[i];
//         if(element < lowest){
//             lowest = element
//         }else if(element < secondLowest && lowest < secondLowest){
//             secondLowest = element
//         }
//         i++;
//     };
//     return secondLowest;
// }
// console.log(secondLowest(arr))

//* problem-19
//? find the largest among three numbers
// const num1 = 50;
// const num2 = 7;
// const num3 = 9;
// if (num1 > num2 && num1 > num3) {
//     console.log(`${num1} is bigger`)
// } else if (num2 > num1 && num2 > num3) {
//     console.log(`${num2} is bigger`)
// } else {
//     console.log(`${num3} is bigger`)
// }

//* problem-20
//? find the factorial of a number
// function factorial(num) {
//     let fact = 1;
//     for (let i = num; i >= 1; i--) {
//         fact *= i;
//     }
//     return fact
// }
// console.log(factorial(10))

//* problem-21
//? find the factorial of a number using recursion
// function recursion(num) {
//     if (num === 1) {
//         return num;
//     }
//     return num * recursion(num - 1)
// }
// console.log(recursion(5))

//? another way
// let factorial = 1;
// function recursion(num) {
//     if (num > 17) {
//         return;
//     };
//     let temp = factorial
//     factorial *= num;
//     console.log(`${temp} X ${num} = ${factorial}`)
//     num++;
//     recursion(num);
// }
// recursion(1);
// console.log(factorial)

//* problem-22 
//? print the table of any user define number
// function table(num){
//     let res = 1;
//     for(let i = 1; i<=10; i++){
//         res = num * i
//         console.log(`${num} X ${i} = ${res}`);
//     }
// }
// table(19)

//* problem-23
//? find armstrong number
// function armstrong(num) {
//     let temp = num;
//     const numLength = temp.toString().length;
//     let sum = 0;
//     while (temp > 0) {
//         const digit = temp % 10;
//         sum += digit ** numLength;
//         temp = parseInt(temp / 10);
//     };
//     if (num === sum) {
//         return `${num} is an armstrong number`;
//     } else {
//         return `${num} is not an armstrong number`;
//     }
// }


//* problem-24
//? check if the numbers have same last digit

// function findLastDigit(num1, num2, num3) {
//     const digit1 = num1%10;
//     const digit2 = num2%10;
//     const digit3 = num3%10;
//     if(digit1 === digit2 && digit1 === digit3 && digit2 === digit3){
//         console.log('same last digit')
//     }else{
//         console.log('not the same last digit')
//     }
// }

//* problem-25
//? check if a string is palindrome or not

// function palindrome(string) {
//     const splittedString = string.split('');
//     const reversedString = splittedString.reverse();
//     const joinedString = reversedString.join('');
//     if (string === joinedString) {
//         console.log(`${string} is a palindrome`)
//     } else {
//         console.log(`${string} is not a palindrome`)
//     }
// }
// palindrome('madam');

//* problem-26
//? check the number of occurrences of a string
function stringCount(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] === letter){
            count++;
        }
    }
    console.log(count)
}
stringCount('takbir', 'i');