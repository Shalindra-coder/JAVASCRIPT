// function myFunction(){
//     console.log("shalindra aporiya");
//     console.log("aporiya")
// }
// myFunction();
// myFunction();

// function myFunction(msg){
//     //perameter => input
//     console.log(msg);

// }
// myFunction("shalindra aporiya");//argument 

// sum two number
// function sum(x,y){
//     console.log(x+y);
// }
// sum(5,6);
// function sum(x,y){
//     //local variable => scope
//     s = x+y;
//     return s;
// }
// let val = sum(3,4);
// console.log(val);
// const arrowsum = (a,b) =>{
// console.log(a+b);
// };
// let sum =arrowsum(12,67);
// console.log(sum);

// const arrowMul = (a,b) =>{
//     return (a*b);
//     };
//     let mul =arrowMul(12,67);
//     console.log(mul);
// const printhallo = () =>{ 
//     console.log("hallo");
// }
// printhallo();
//const readlinesync = require('readline-sync');
//let str = readlinesync.question("enter strings:-");
// function countWovels(str) {
//    let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

//  const countWovels = (str) => {
//     let count = 0;
//      for (let char of str) {
//          if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//              count++;
//          }
//      }
//      console.log(count);
//  }

// for each method - collback functio
// let arr = [1,2,3,4,5,6,7,];
// arr.forEach(function(val){
//     console.log(val);
// });


// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);
// console.log(myFunction);

// Done
// MAP function
// forEach function
// filter

// TODO
// callback function
// async await function
// Promise


// const arr = [{name:"dfghj", age:12}, {name:"shalu", age:23}, {name:"Ravindra", age:23}]
// // console.time()
// const data = arr.map((temp)=>{
//     if (temp.age === 23){
//         return temp
//     }
// })
// // console.timeEnd()
// // console.log(data)

// const arr1 = [{name:"dfghj", age:12}, {name:"shalu", age:23}, {name:"Ravindra", age:23}]
// // console.time()
// arr1.forEach((temp)=>{
//     if (temp.age === 23){
//         temp.age = 24
//     }
// })
// // console.timeEnd()
// // console.log(arr1)

// // filter
// const arr2 = [{name:"dfghj", age:12}, {name:"shalu", age:23}, {name:"Ravindra", age:23}]
// // console.time()
// const res = arr2.filter((temp)=> temp.age >= 21 )
// console.log(res)


// function myFunction(){
//     console.log("shalindra aporiya");
// }
// myFunction();
// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("shalindra aporiya");

// function sum(x,y){
//     console.log(x+y);
// }
// function sum(x,y){
//     sum= x+y;
//     return sum;
// }
// let val = sum(3,6);
// console.log(val);

// let arrowSum = (a,b) => {
//     console.log(a+b);
// }
// let arrowMul = (a,b) => {
//     console.log(a*b);
// }
// let arrowMul = (a,b) => {
// return a*b;
// }
// let printhello = () => {
//     console.log("hello");
//     };
// function countVowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count)
// }

// countVowels("shalindraaporiya");

//use arrowfunction

// let countVowels  = (str) => {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowels("shalindraaporiya");

// let arr = [1,2,3,4,5,6,7,];
// arr.forEach(function printval(val){
//     console.log(val);
// });

// let arr = ["delhi", "mumbai", "agra", "morena"];
// arr.forEach((val, index, a) => {
// console.log(index, val, a);
// })
// function multiple(val){
//     return val**2
// }
// function sum(val){
//     const data = val**2
//     return data
// }

// function example(value, callback){
//     console.log(value)
//     const ele = sum(value)
//     return ele
// }

// const res = example(23, sum)
// console.log(res)

//simle function
// function myFunction(){
//     console.log("hello")
// }
// myFunction();
// function myFunction(msg, m){
//     console.log(msg ,m)
// }
// myFunction("shalindra aporiya", 100);
// function myFunction(x,y){
//     console.log(x+y)
// }
// myFunction( 4,6);
//arrowfunction

// const arrowfunction = ((x,y) => {
// console.log(x+y);
// })

// arrowfunction(3,5);;


// function sum(x,y){
//     s = x+y;
//     console.log("dusra function", s)
//     return s;
// }
// function calcvalue(num, collback){
//     console.log("Pehla function",num )
//  f = collback(num, 8);
//  console.log(f);
// }
// calcvalue(2, sum);

// let arr = [1,2,3,4,5,6,7,8,];
// arr.forEach((num) => {
// console.log(num*num);
// });


// let arr = [1,2,3,4,5,];
// arr.map((val) => {
//     console.log(val);
// })

// let arr = [1,2,3,4,5,];
// let newArr = arr.map((val) => {
//     return val*val;
// })
// console.log(newArr);



// let arr = [ 23,34,12,45,67,];
//  let newArr = arr.filter((val) => {
//     return val%2===0;


// })
// console.log(newArr);



// let arr = [1,2,3,4,5,6,]
// const sum = arr.reduce((res ,cur) =>{
//     return res+cur;
// })
// console.log(sum);


// let arr = [1,2,3,4,56,5,0,]
// const sum = arr.reduce((res ,cur) =>{
//     console.log(res, cur)
//     return res>cur ? res : cur;
// })
// console.log(sum);




// let arr = [56,155,89,95,98,6,]
// const find = arr.filter((val) =>{
//     return val>=90;
// })
// console.log(find);

// let arr = [56,155,89,95,98,6,]
// const find = arr.filter((val) =>{
//     return val>=90;
// })

// console.log(find);



// const readlinesync = require('readline-sync');
// let n = readlinesync.question("enter number:")
// let arr = [];
// for (let i= 1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log("arr:",arr)

// let newArr = arr.reduce((res, cur) =>{
//     return res+cur;
// })
// console.log("sum:",newArr);
// let newArr1 = arr.reduce((res, cur) =>{
//     return res*cur;
// })
// console.log("multiple:", newArr1);




// console.log("hello1");
// console.log("hello2");
// function hello(){
//     console.log("hellodfghjkl");
// }
// setTimeout(hello,4000);
// console.log("hello3");
// console.log("hello4");
// setTimeout(() =>{
//     console.log("hello")
// },4000);


// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b , sumCallback){
//     sumCallback(a,b);
// }
// calculator(3,5, sum);

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(3, 5, (a, b) => {
//     console.log(a + b);
// });
// const  hello  = (() => {
//     console.log("hello")
// })
// setTimeout(hello, 4000);

// function getData(dataId){
//     console.log("data",dataId)
// }
// getData(123);


// function getData(dataId){
//     setTimeout(() => {
//         console.log("data", dataId)
//     }, 4000);


// }
// getData(1234456);

// function getData(dataId, getnextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getnextData) {
//             getnextData();
//         }
//     }, 4000);
// }

// //callback hell
// getData(1, () => {
//     console.log("getting data2....")
//     getData(2, () => {
//         console.log("getting data3....")

//         getData(3, () => {
//             console.log("getting data4....")

//             getData(4, () => {
//                 console.log("getting data5....")

//                 getData(5, () => {
//                     console.log("getting data6....")

//                     getData(6, () => {
//                         console.log("getting data7....")

//                         getData(7)
//                     })
//                 })
//             })
//         })
//     })
// });


// promise
// let promise = new Promise((resolve, reject) => {
//     console.log("i am shalindra");
//     resolve("success");
// });

// promise.then((result) => {
//     console.log(result); 

// });

// function getData(dataId, getnextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getnextData) {
//                 getnextData();
//             }
//         }, 4000);
//     }


// });

// const moonLanding = new Date('July 20, 69 00:20:18');

// console.log(moonLanding.getFullYear());

// const xmas95 = new Date("1995-12-25T23:15:30");
// const fullYear = xmas95.getFullYear();

// let promise = new Promise((resolve, reject) => {
//   console.log("hello");
//   resolve(56);
// });

// console.log("hello one");

// setTimeout(function() {
//     console.log("hello two second");
// }, 2000);

// console.log("hello two");
// console.log(promise);


// function reverseNumber(number) {
//   let reverse = 0;
//   while (number > 0) {
//       let ldigit = number % 10;
//       reverse = (reverse * 10) + ldigit;
//       number = Math.floor(number / 10);
//   }
//   console.log(reverse);
// }

// reverseNumber(122334);


function combination(str) {
  let comb = 0;
  for (let char of str)

    comb = char;
}
if (str !== comb) {
  console.log(comb);
}

