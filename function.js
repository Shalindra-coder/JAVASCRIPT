// function myfunction(){
// console.log("welcome to career tak classes");
// console.log("shalindra aporiya");
// }
// myfunction();
//********************************
// function myFunction(msg){
//     //perameter - input
//     console.log(msg);
// }
// myFunction("shalindra aporiya");//argument
//********************************
// function use sum two number
// function sum(x,y){
//     console.log(x+y);
// }
//************************** 
//return val

// function sum(x,y){
//     // local variable - scope
//     s = x+y;
//     return s;
// }
// let val =sum(2,4);
// console.log(val);
//************************* 
//arrow function use
//function sum(a,b){
   // return a+b;
//}
// const arrowSum = (x, y) => {  
//   console.log(x + y);        
// }
//****************************
//multification arrow function
// const arrowMul = (x,y) => {
//     console.log(x*y);
// }
//  const printhallo = () =>{
//     console.log("hallo");
//  }
//wovals count
// function countwovals(s) {
//    let count = 0;
//    for(const char of s){
//       if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//          count++;
//       }
//    }
//    console.log(count);
// }

// // Example usage:
// countwovals("shalindraaporiya");
//*****************************************
//arrowfunctionuse
// const arrowcountvowels = (s) => {
//    let count = 0;
//    for(const char of s){
//       if(char === "a" || char === "e"
//        || char === "i" || char === "o" 
//        || char === "u"){
//          count++;
//        }
//    }
//    console.log(count);
// }

// // Test the function
// arrowcountvowels("shalindraaporiya"); // This should output the number of vowels in the string
//*************************************************
//for each methods
// let arr = [3,3,33,4,5,5,6,];
// arr.forEach((val) =>{
//    console.log(val);
// });
// let arr = ["delhi", "morena", "gwalior"];
// arr.forEach((val,idx,arr)=>{
//    console.log(val.toUpperCase(),idx,arr);
// });
//******************************
//for given array of number, print the squar of each value using the foreach loop
// let arr = [1,2,3,4,5,6,7,];
// arr.forEach((val) => {
//    console.log(val*val);

// });
//********************************** 
//use map mehods
// let arr = [1,2,3,5,6,6,8,];
// let newArr = arr.map((val)=>{
//    return val*val;
// });
// console.log(newArr);
//************************ 
//use filter methods 
// let arr = [1,2,3,4,5,6,6,78,9,];
// let evenArr = arr.filter((val)=>{
//    return val%2===0;
// });
// console.log(evenArr);
//************************** 
//use reduce mthods
// let arr = [1,2,3,4,5,6,7,8,9];
// let sum = arr.reduce((res,val)=>{
//    return res+val;

// });

// console.log(sum);
//*********************** 
//find max number use reduce mathods
// let arr = [1,2,3,4,5,6,7,8,9];
// let maxNum = arr.reduce((prev,curr)=>{
//    return prev>curr ? prev:curr;

// });

// console.log(maxNum);
//********************* 
// we are given array marks of students. filter out of the marks of students that scored 90+
// let arr = [30,98,91,94,93,];
// let newArr = arr.filter((val)=>{
//    return val>90;

// });

// console.log(newArr); 
//*********************
//take a number n as input from user a creat an array of numbers from 1 to N
//  var readlineSync = require('readline-sync');
// let number  = parseInt(readlineSync.question("enter number:-"));
// let arr = [];
// for(let i=1; i<=number; i++){
//    arr[i-1]=i;
// }
// console.log(arr);
//**********************
//used the reduce methods to calculate sum of all number in the array
// var readlineSync = require('readline-sync');
// let number  = parseInt(readlineSync.question("enter number:-"));
// let arr = [];
// for(let i=1; i<=number; i++){
//    arr[i-1]=i
// }
// sum = arr.reduce((res, curr)=>{
//    return res+curr;
// });
// console.log(sum);
//******************** 
// //use the reduce methods calculate all number product
var readlineSync = require('readline-sync');
let number  = parseInt(readlineSync.question("enter number:-"));
let arr = [];
for(let i=1; i<=number; i++){
   arr[i-1]=i
}
product = arr.reduce((res, curr)=>{
   return res*curr;
});
console.log(product);