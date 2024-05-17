//global scope 
//block scope
//function scope
// local scope







//global scope

// var a = 34;
// {
//    var b = 35;
//    console.log(a);
//    console.log(b); 
// }
// console.log(a);
// console.log(b); 

//block scope

// let a = 34;
// {
//    let b = 35;
//    console.log(a);
//    //console.log(b); 
// }
// console.log(a);
// console.log(b); 


//local scope
function myFunction() {
    // Variable 'x' has local scope
    var x = 10;
    console.log(x); // Output: 10
  }
  
  // Trying to access 'x' outside the function will result in an error
  console.log(x); // Output: ReferenceError: x is not defined
  