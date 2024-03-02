// const readlineSync = require('readline-sync');
 
// function createArray(N) {
// 	let newArr = [];
// 	for (let i = 1; i <= N; i++) {
//         let num = readlineSync.question("enter the number");
// 		newArr.push(num);
// 	}
// 	return newArr;
// }

// let N = readlineSync.question("enter the number");
// let arr = createArray(N);
// console.log(arr);
//**********************************************
// const readlineSync = require('readline-sync');
 
// function createArray(N) {
// 	let newArr = [];
// 	for (let i = 0; i < N; i++) {
//         let num = readlineSync.question("Enter the number: ");
// 		newArr.push(num);
// 	}
// 	return newArr;
// }

// let N = parseInt(readlineSync.question("Enter the number of elements: "));
// let arr = createArray(N);
// console.log("Array in reverse order:");
// for (let i = N - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }
//******************************************
// let cities = ["delhi", "agra", "mumbai",];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }
//******************************** *
// let marks = [23,56,67,45,78,];
// let sum =0;
// for(let val of marks){
// sum += val;
// }
// let avrage = sum/marks.length;
// console.log(`avrage marks of a class = ${avrage}`);
//*******************************
// let items = [200,50,234,45,];
// let i=0;
// for(let val of items){
//     let offer = val/10;
//     items[i] = items[i]-offer;
//     console.log(`value after offer ${items[i]}`);
//     i++;
// }
//**********************************************
// let items = [200, 50, 234, 45];
// for(let i=0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
//     }
//     console.log(items);
//****************************** 
//push methods
// let fooditems = ["apple", "pateto", "tameto", "banana"];
// fooditems.push("chips", "lichhi");
// console.log(fooditems);
//*************************************************** 
//deleted methods
// let fooditems = ["apple", "pateto", "tameto", "banana"];
// fooditems.pop();
// console.log(fooditems);
//*****************************************************
//to strings methods
// let fooditems = ["apple", "pateto", "tameto", "banana"];
// fooditems.toString();
// console.log(fooditems);
//*********************************************************
// let fooditems = ["pateto", "tameto", "banana"];
// let fruits = ["apple", "banana", "lichhi"];
// let items = fooditems.concat(fruits);
// console.log(items);
//****************************************************
//unshift methods shift start
// let fooditems = ["apple", "pateto", "tameto", "banana"];
// fooditems.unshift("lemon");
// console.log(fooditems);
//*****************************************
//shift delete start 
// let fooditems = ["apple", "pateto", "tameto", "banana"];
// fooditems.shift();
// console.log(fooditems);
//**********************************************
//slice methods
// let fooditems = ["apple", "pateto", "tameto", "banana"];
// console.log(fooditems.slice(1,3));
//***************************************
// splice methods add remove elements
// let arr = [1,2,34,5,6,7,8,9];
// arr.splice(1,0, 123);
// console.log(arr);
//*****************************************
//delete element
// let arr = [1,2,34,5,6,7,8,9];
// arr.splice(3,1);
// console.log(arr);
//************************************************
//replace elements
// let arr = [1,2,34,5,6,7,8,9];
// arr.splice(3,1, 123);
// console.log(arr);
//******************************************** 
//create an array to store compnies"
// let compniesname = ["bloomberg", "microsoft", "uber","google"];
// compniesname.shift();
// console.log(compniesname);
//************************************************
//replace element
// let compniesname = ["bloomberg", "microsoft", "uber","google"];
// compniesname.splice(2,1,'ola');
// console.log(compniesname);
//*************************************************** 
//add element end
let compniesname = ["bloomberg", "microsoft", "uber","google"];
compniesname.push('amezon');
console.log(compniesname);







