// const readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-");
// for(let i=1; i<=number; i++){
//     console.log("bedanti");
// }
//**********************************
//question 2
//Imagine you're on a fun journey of exploring numbers! You're interested in 
//finding out all the even numbers up to a certain value. Even numbers a
//re those that are divisible by 2 without leaving a 
//remainder. Your task is to print all the even 

//numbers from 1 up to the number you choose.
// const readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-");
// for(let i=1; i<number; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }
//*************************************************
//question 3
//Imagine you're on an adventurous quest to unravel the mysteries of numbers! Today, your quest involves exploring the realm of odd numbers. Odd numbers are those that are not divisible by 2, leaving a remainder of 1. Your task is to calculate the sum of all the odd numbers up to a certain value chosen by you.
// const readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-");
// let sum = 0;
// for(let i=1; i<number; i++){
//     if(i % 2!== 0){
//         sum = sum+i;
//     }
// }
// console.log(sum);
//****************************************** 
//question 4
//Write a program to take two integers M, and N and print the sum of numbers in the range M to N.
// const readlineSync = require('readline-sync');
// let number1 = parseInt(readlineSync.question("Enter number1: "));
// let number2 = parseInt(readlineSync.question("Enter number2: "));
// let sum = 0;
// for(let i = number1; i <= number2; i++) {
//     sum += i;
// }
// console.log("Sum:", sum);
//***************************************************** */
//question 5
//Write a program to take a number from the user and print the number of digits in the given number. (can you do it without  loop O(1) 
// const readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("Enter number: "));
// let digitcount = 0;
// while(number !== 0){
//     let lastdigit = number % 10;
//     digitcount += 1;
//     number = Math.floor(number / 10);
// }
// console.log("Number of digits:", digitcount);
//***********************************************
//question 6
//digit sum 
// const readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("Enter number: "));
// let sum = 0;
// while(number !== 0){
//     let lastdigit = number % 10;
//     sum = sum+lastdigit;
//     number = Math.floor(number / 10);
// }
// console.log("Number of digits:", sum);
//*************************************************** */
//question 7
// Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number
// const readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("Enter number: "));
// let revers = 0;
// while(number !== 0){
//     let lastdigit = number % 10;
//     revers  = revers*10+lastdigit;
//     number = Math.floor(number / 10);
// }
// console.log("Number of digits:", revers);
//************************************************** */
//questtion 8 
//prime number check
// program to check if a number is prime or not
// var readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("Enter number: ")); 
// let count =0;
//  for(let i=1; i<=number; i++ ) {
//    if(number % i ===0){
//     count = count+1;

//    }
//    }
// if(count===2){
//     console.log("primenumber");
// }
// else{
//     console.log("not prime number");
// }
//*********************************************
//question 9
//check perfect number 
const readlineSync = require('readline-sync');
let number = parseInt(readlineSync.question("Enter number: "));
let sum = 0;

for (let i = 1; i < number; i++) {
    if (number % i === 0) {
        sum += i;
    }
}

if (sum === number) {
    console.log("The number is perfect.");
} else {
    console.log("The number is not perfect.");
}
