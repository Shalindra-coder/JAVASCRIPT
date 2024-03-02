const readlineSync = require('readline-sync');
//question 1 
//creat a const object called product  to store information show in the picture;
// const  product ={
//     name: "ball pen",
//     rating: 4,
//     offer: 5,
//     price: 270,

// };
// console.log(product);
//question2
//creat a const object called "profile"  to store information show in the picture;
// const profile= {
//     username: "shalindra",
//     isfollow: true,
//     post: 345,
//     followers: 123,
//     following: 4,


// };
// console.log(profile);
//question 3
//oprator
// 
//question 4
// a=3;
// b=4;
// sum=a+b;
// sub=a-b;
// mul=a*b;
// console.log(sum, sub, mul);
//********************************* *
//question 5
// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May I have your name? ');
// console.log(userName)


// const num = readlineSync.question("enter number1")
// const num2 = readlineSync.question("enter number2")
// console.log(num+num2)

//question 5
// let a = readlineSync.question("enter first numberA");

// let b = readlineSync.question("enter second numberB");
// sum=a+b;
// sub=a-b;
// mul= a*b;
// console.log(sum, sub, mul);

//question 6
//swapping use third variable
// let a=readlineSync.question("enter first numberA");
// let b=readlineSync.question("enter second numberB");
// temp=a;
// a=b;
// b=temp;
// console.log(a,b);
//************************* */
//questionn 7
//swapping withour third variable
// let a = readlineSync.question("enter first nulmbrA");
// let b = readlineSync.question("enter second numberB");
// a=a-b;
// b=b+a;
// a=b-a;
// console.log(a,b);
//************************* *
//question 8:
// let a =readlineSync.question("enter first numberA");
// let b =readlineSync.question("enter second numberb");
// let c =readlineSync.question("enter third numberc");
// mulsum=(a*b)+c;
// console.log(mulsum);
//question 9
// console.log("there");
//*************************************** */
//question 10 :

// let height = parseFloat(readlineSync.question("Enter height: "));
// let width = parseFloat(readlineSync.question("Enter width: "));

// let rectangleArea = height * width;
// let rectanglePerimeter = 2 * (height + width);

// console.log("Area:", rectangleArea);
// console.log("Perimeter:", rectanglePerimeter);
//************************************* */
//question11
// let side = readlineSync.question("enter side");
// squarearea=side**2;
// console.log("area", squarearea);
//************************ */
//question 12 
// let side = readlineSync.question("enter side");
// qubearea=side**3;
// console.log("area", qubearea);

//****************************************** */
//question 13
//tringle semiperameter 


// let height = parseFloat(readlineSync.question("Enter height: "));
// let width = parseFloat(readlineSync.question("Enter width: "));
// let length = parseFloat(readlineSync.question("Enter length: "));

// let triangleSemiperimeter = (height + width + length) / 2;

// console.log("Semiperimeter:", triangleSemiperimeter);

 //***************************************8 */
 //question 14
 //circle area
//  let redius = readlineSync.question("enter redius");
//  let circlearea=3.14*(redius**2);
//  console.log("area", circlearea);
//********************************* */
//question 15
//find diameter given by user circle area


// let circleArea = parseFloat(readlineSync.question("Enter circle area: "));

// let radius = Math.sqrt(circleArea / Math.PI);
// let diameter = 2 * radius;

// console.log("Diameter:", diameter);
//******************************************* */
//question16
//cube latral surface area and total surface area
// let side = readlineSync.question("enter cube side");
// latralsurfacearea =  4*(side**2);
// totalsurfacearea = 6*(side**2);
// console.log("area", latralsurfacearea);
// console.log("area", totalsurfacearea);
//************************************ */
//question17
// let number = readlineSync.question("enter number:");
// let remindra = number % 2;
// console.log("remindra",remindra);
//************************* */
//question18
//cuboid latral surface area and total surface area;
// let length = readlineSync.question("enter length");
// let width = readlineSync.question("enter width");
// let height = readlineSync.question("enter height");
// cuboidlatralsurfacearea = 2*height*(length+width);
// cuboidtotalsurfacearea = 2*((length*width)+(width*height)+(length*height));
// console.log("cuboid latral surface area", cuboidlatralsurfacearea);
// console.log("cuboid total surface area", cuboidtotalsurfacearea);
//******************************** */
//question 18:
//given a number by use and find last digit 
// let number = readlineSync.question("enter numbe:");
// lastdigit = number % 10;
// console.log("number of last digit", lastdigit);
//**************************************** */
//question 19
// let number1 = readlineSync.question("enter number1");
// let number2 = readlineSync.question("enter number2");
// let quotient = number1/number2;
// console.log("quotient", quotient);
//**************************** */
//question20
//given bu user mrp and discount and find selling price
// let mrp = readlineSync.question("enter mrp");
// let discout = readlineSync.question("enter discount");
// sellingprice = mrp-discout;
// console.log("selling price", sellingprice);
//************************************ */
//question 21
//given total amount and number of books and find one book price
// let totalamount = readlineSync.question("enter totalamount");
// let numberofbooks = readlineSync.question("enter number of books");
// onebookprice = totalamount/numberofbooks;
// console.log("one book price", onebookprice);

//********************************** */
//question 22//given by user five topic marks hindi, math physics,chemistry, biology;
//  let hindimarks = readlineSync.question("enter hindi marks");
//  let mathmarks = readlineSync.question("enter mat marks");
//  let physicsmarks = readlineSync.question("enter physics marks");
//  let chemistrymarks = readlineSync.question("enter chemistry marks");
//  let biologymarks = readlineSync.question("enter biology marks");
//  let totalmarks = Number(hindimarks)+Number(mathmarks)+Number(physicsmarks)+Number(chemistrymarks)+Number(biologymarks);
// console.log("total marks", totalmarks);

//***************************************************** */
//question23 
//given by user tempreture celsius convert tempretreture forhenhit
// let celsius = readlineSync.question("enter celsius tempreture:");
// let forhenhit = celsius/(5/9)+32;
// console.log("forhenhite tempreture", forhenhit);
 //**************************************** */
 //








