    //question1 
//given three number by user check max number;
//var readlineSync = require('readline-sync');

// let num1 = readlineSync.question("enter num1-");
// let num2 = readlineSync.question("enter num2-");
// let num3 = readlineSync.question("enter num3-");
// if(num1>=num2 && num1>=num3 )
//     console.log(num1);
//    else if(num2>num1 && num2>num3){
//         console.log(num2);

//     }
// else{
// console.log(num3);
// }
//************************************
//question2 
// var readlineSync = require('readline-sync');
// let num1 = readlineSync.question("enter num1-");
// let num2 = readlineSync.question("enter num2-");
// let num3 = readlineSync.question("enter num3-");
// let num4 = readlineSync.question("enter num4-");
// if(num1>=num2 && num1>=num3 && num1>num4){
//     console.log(num1);
// }
//    else if(num2>num1 && num2>num3 && num2>num4){
//         console.log(num2);
//    }
//         else if(num3>num1 && num3>num2 && num3>num4){
//             console.log(num3);
//         }
//             else{
// console.log(num4);
// };
//************************************************ *
//question 3:
// var readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-")
// if(number>=1000 && number<9999){
//     console.log("yes");
// }
//     else{
//         console.log("no");
//     }
//***************************** *
//question4
//largest three digit number
// var readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-")
// if(number>998 && number<=999){
//     console.log("yes");
// }
//     else{
//         console.log("no");
//     }
//**************************************** *
//question5:
// var readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-")
// if(number % 7 === 0){
//     console.log("yes");
// }
//     else{
//         console.log("no");
//     }
//*************************************** *
//question6
// var readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-")
// if(number % 2 === 0){
//     console.log("even");
// }
//     else{
//         console.log("odd");
//     }
//********************************************* *
//question7
// var readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-");
// let lastdigit = number % 10;
// if(lastdigit % 3 ===0){
//     console.log("yes");
// }
//     else{
//         console.log("no");
//     }
//************************************* *
//question7
// var readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-");

// if(number>=100){
//     console.log("yes");
// }
//     else{
//         console.log("no");
//     }
//************************************ *
//question 8 
// var readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-");

// if(number % 5 === 0){
//     console.log("yes");
// }
//     else{
//         console.log("no");
//     }

//************************************* *
//question9
// write a program to check whether a person is eligible for 
// votting or not. age for voting is 18 years
// var readlineSync = require('readline-sync');
// let age = readlineSync.question("enter age:-");

// if(age>=18){
//     console.log("can vote");
// }
//     else{
//         console.log("no");
//     }
//******************************************* *
//question 10
//write a program to display "hello" if a number entered by 
// the user is a multiple of five, otherwise print "bye"
// var readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-");

// if(number % 10 === 0){
//     console.log("hello");
// }
//     else{
//         console.log("bye");
//     }
//**************************************** *
//question 11 
//write a program to check whether entered is a three digit number or not
// var readlineSync = require('readline-sync');
// let number = readlineSync.question("enter number:-");

// if(number>=100 && number <1000){
//     console.log("yes");
// }
//     else{
//         console.log("no");
//     }
//************************************ 
//question12
//write a program to check whether a person is a senior citizen or not 
// var readlineSync = require('readline-sync');
// let age = readlineSync.question("enter age:-");

// if(age>=60){
//     console.log("senior citzen");
// }
//     else{
//         console.log("not senior citizen");
//     }
//*********************************** *
//question13 
//accept the tempreture in degree celsius of water 
//and check whether it is boiling tempreture of not (boiling point 100)
// var readlineSync = require('readline-sync');
// let tempreture = readlineSync.question("enter tempreture:-");

// if(tempreture>=100){
//     console.log("water boil");
// }
//     else{
//         console.log("no");
//     }
//******************************* *
//question14
//a shopn will give a discount of 10% if the cost of the purchase quality is more than 1000 ask the userfor quantity suppose one until will cost 100 . judge and print total cost for the user;
// var readlineSync = require('readline-sync');
// let numberofobjects = readlineSync.question("enter numberofobjects:-");
// totalamount = numberofobjects*100;

// if(totalamount>=1000){

//     console.log(totalamount-totalamount*(10/100));
// }
//     else{
//         console.log(totalamount);
//     }
//****************************************** *
//queston15
//A company decided to give a bonus of 5% of his salary to an
// employee if his/her year of service is more than 5 years
// ask users for their salary and year of service and print
// the bonus amount
// var readlineSync = require('readline-sync');
// let years = readlineSync.question("enter years:-");
// let salary = readlineSync.question("enter salary-");
// if(years>=5){
// console.log("bonus amount", salary*(5/100));
// }
//     else{
//         console.log("bye");
//     }
//******************************* *
//question16
// A student will not be allowed to sit in an exam if his/her
// attendance is less than 75% Take following input from the user
// number of classes held number of classes attended And
// print percantage of class attended is the student allowed 
// to sit in the exam or not
// var readlineSync = require('readline-sync'); 
// let classheld = readlineSync.question("enter classheld:-");
// let classattended = readlineSync.question("enter class attended");
// attendence = (classattended/classheld)*100

// if(attendence>=75){
//     console.log("allow");
// }
//     else{
//         console.log("notallow");
//     }
//*************************************** 
//question17
//writer a program to check whether is the 4 digit number and it should
//be divisible 7 amd ots qoutient after dividing with 7 should
// ever
// var readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("enter number:-"));

// if (number >= 1000 && number < 10000) {
//     let quotient = number / 7;
//     console.log("Quotient:", quotient);
// } else if (quotient % 7 === 0) {
//     console.log("yes");
// } else {
//     console.log("no");
// }
//***
//**************************************** *
//question 18
// take an inteege N as input and check whether it ends with
// 3or 7 if it ends with 3 if it ends with 3 if it ends print
// ends wht 7 otherwise print th number itself
// var readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("enter number:-"));
// lastdigit = number%10;
// if (lastdigit===3 || lastdigit===7) {
    
//     console.log("last digit:", lastdigit);

    
// } else {
//     console.log(number);
// }

//*********************************************** *
//question19
//write a program to take two number as input and print their
// diffrence if the first number is greater than the second
// number otherwise print their sum;
// var readlineSync = require('readline-sync');
//let number1  = parseInt(readlineSync.question("enter number1:-"));
// let number2 = parseInt(readlineSync.question("enter number2:-"));

// if (number1 > number2) {
//     let differenceTwoNumbers = number1 - number2;
//     console.log("Difference between the two numbers:", differenceTwoNumbers);
// } else {
//     let sumTwoNumbers = number1 + number2;
//     console.log("Sum of the two numbers:", sumTwoNumbers);
// }
//********************************** *
//question20
//write a program to obtain a number N and increamnt its value
// 1 if the number is divisible by 4, otherwise decreament its
// value by 1
// var readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("enter number:-"));

// if (number %4 === 0) {
    
//     console.log("number increament its value 1:", number+1);
// } else {

//     console.log("number decreament its value 1:", number-1);
// } 
//*********************************************** *
//question 21
//write a program to obtain 2 number (A and B )and an arithmetic
// opretor(c) and then design calculator depending upon th opon
// the operator entere by the user
// var readlineSync = require('readline-sync');
// let a = parseInt(readlineSync.question("enter numberA:-"));
// let b = parseInt(readlineSync.question("enter numberB:-"));
// let c = (readlineSync.question("enter opretorC:-"));

// if (c === '+') {
    
//     console.log("sum", a+b);
    
// } else if (c === '-'){

//     console.log("sub", a-b);
// }
//  else if (c === '*'){

//     console.log("sub", a*b);
// }
//  else if (c === '/'){

//     console.log("sub", a/b);
// }
//  else if (c === '%'){

//     console.log("sub", a%b);
// }
//*************************************** 
//question22 
//write a program to input the length and widght of a rectangle
// and output whether its area is greater ot perimeter is greater
// or both are equal;
// var readlineSync = require('readline-sync');
// let length = parseInt(readlineSync.question("enter length:-"));
// let widght = parseInt(readlineSync.question("enter widgth:-"));
// rectanglearea = length*widght;
// rectangleperimeter = 2*(length+widght);
// console.log("greater than perimeter");
//******************************************** *
//question 23 non complete 
//write a program to input the month number and print the number
// of days in that month . Take and input from the user
// between and 12 inclusive (output 28 days for the month of february);
// var readlineSync = require('readline-sync');
// let monthnumber = (readlineSync.question("enter :-monthnumber"));

//************************************************
//question 24
//write a program to input a number and output whether a number
// a number is negative, positive or zero.
// var readlineSync = require('readline-sync');
// let number = parseInt(readlineSync.question("enter number:-"));

// if (number>0) {
    
//     console.log("positive");
// } else if(number<0){

//     console.log("negative");
// } else{
//     console.log("zero");
// }
//******************************************** *
//question25
// input any city from the user and display the monument of the city 
//city monument
//delhi red fort
//agra Tajmahal
// jaipur jaimahal
// for any other city as an input No monument in the database
//for this city

// var readlineSync = require('readline-sync');
// let cityname = (readlineSync.question("enter cityname:-"));
// if(cityname==="delhi"){
// console.log("red fort");
// }else if("cityname"==="agra"){
//     console.log("Taj mahal");
// }else if("cityname"==="jaipur"){
//     console.log("jai mahal");
// }
// else{
//    console.log("no monument");
// }
//********************************************** 
//question 26
// const readlineSync = require('readline-sync');

// let physicsMarks = parseInt(readlineSync.question("Enter physics marks: "));
// let chemistryMarks = parseInt(readlineSync.question("Enter chemistry marks: "));
// let biologyMarks = parseInt(readlineSync.question("Enter biology marks: "));
// let mathMarks = parseInt(readlineSync.question("Enter math marks: "));
// let computerMarks = parseInt(readlineSync.question("Enter computer marks: "));

// let totalMarks = physicsMarks + chemistryMarks + biologyMarks + mathMarks + computerMarks;

// let percentage = (totalMarks / 500) * 100;

// if (percentage >= 90) {
//     console.log("Grade A");
// } else if (percentage >= 80) {
//     console.log("Grade B");
// } else if (percentage >= 70) {
//     console.log("Grade C");
// } else if (percentage >= 60) {
//     console.log("Grade D");
// } else if (percentage >= 40) {
//     console.log("Grade E");
// } else {
//     console.log("Grade F");
// }
//*********************************************** 
//question 27

