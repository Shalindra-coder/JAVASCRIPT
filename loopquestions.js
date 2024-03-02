//for loops 
// var readlineSync = require('readline-sync');
// let number = (readlineSync.question("enter number-"));

// for(let i=1; i<=number; i++){
    
//     console.log(i);
// }
//****************************** 
//question 1
// var readlineSync = require('readline-sync');
// let number = (readlineSync.question("enter number:"));
// let sum=0;
// for(let i=1; i<=number; i++){
//     sum=sum+i;
// }
// console.log(sum);
//*******************************************

//question 2
//1to n number print;
// var readlineSync = require('readline-sync');
// let number = (readlineSync.question("enter number:"));
// let sum=0;
// for(let i=1; i<=number; i++){
//     console.log(i);
// }
//*********************************
//question 3
//even number print
// var readlineSync = require('readline-sync');
// let number = (readlineSync.question("enter number:"));

// for(let i=1; i<=number; i++){
//    if( even = i % 2===0){
//     console.log(i);
// }
// }
//*******************************************
//question 4
//odd number print
// var readlineSync = require('readline-sync');
// let number = (readlineSync.question("enter number:"));

// for(let i=1; i<=number; i++){
//    if( even = i % 2!=0){
//     console.log(i);
// }
// }
//******************************************* 
//question 5
//write a program to take a number from the user and print
// the number digit in the given number
// var readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("Enter number: "));
// let count = 0;

// while (number !== 0) {
//    let digit = number % 10;
//    count = count + 1;
//    number = Math.floor(number / 10); 
// }

// console.log("Sum of digits:", count);
//*************************** 
//question 6
//write a program to take a number from the user and print 
// the sum of the digits of the given number;
// var readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("Enter number: "));
// let count = 0;

// while (number !== 0) {
//    let digit = number % 10;
//    count = count + digit;
//    number = Math.floor(number / 10); 
// }

// console.log("Sum of digits:", count);
//**************************************
//question 7
// while loop use 
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }
//*********************************************
//question 8 
// write a program that takes a number from the user
//and prints the number that is formed by reversing the digit
//the number
// var readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("Enter number: "));
// let count = 0;

// while (number !== 0) {
//    let digit = number % 10;
//    count = (count*10)+digit;
//    number = Math.floor(number / 10);  
// }

// console.log(count);
//***************************************** 
//question 9
//check palindrome number check
// var readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("Enter number: "));
// let count = 0;
// let number1 = number;

// while (number !== 0) {
//    let digit = number % 10;
//    count = (count*10)+digit;
//    number = Math.floor(number / 10);  
// }
// if(count===number1){
// console.log("palindrome number");
// }else{
//     console.log("not palindrome number")
// }
//********************************************
//question 10
//write a program to take a number from user and print all the factor of the given number A factor is a number that can divide another number evenly without leaving a remainder
// var readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("Enter number: ")); 

//  for(let i=1; i<=number; i++ ) {
//    if(number % i ===0){
//     console.log(i);
//    }
//    }
//*********************************** 
//question 11
//check prime number 
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
//********************************************
//question 12 
//write a program to take two numbers from the user as input and obtain the hcf and lcm of the two number
// var readlineSync = require('readline-sync');
// let number1 = parseInt(readlineSync.question("Enter number1: "));
// let number2 = parseInt(readlineSync.question("Enter number2: ")); 
// let hcf =0;

// if(number1<number2){

//  for(let i=1; i<=number1; i++ ) {
    
// if(number1 % i ===0 && number2 % i===0){
// hcf = i;
    
//(    }
//    }
// }
// lcm = (number1*number2)/hcf;
//     console.log(hcf, lcm);
//************************************
//question 13
//check perfect number
// var readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("Enter number1: "));
// let sum = 0;
// for(let i=1; i<number; i++){
//     if(number % i===0){
//     sum = sum+i;
//     }
// }
// if(sum === number){
//     console.log("perfect number");

// }
// else
// {
//     console.log("not perfect number");
// }
//************************************
// do while loops use
// let i=1;
// do{
// console.log("shalindra aporiya")
// }
// while(i<=10);
//****************************** 
// for-of loops use
// let str = "shalindraaporiya";
// for(let i of str){
//     console.log("i",i);
// }
//******************************
//for  in loop
// let student = {
// name: "shalindra aporiya",
// age: 33,
//     cgpa:  5.8,
//     ispass: true,
// }
// for(let key in student){
//     console.log("key",key, "value=", student[key]);
// }