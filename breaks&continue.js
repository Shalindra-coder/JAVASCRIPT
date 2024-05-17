

//continue use
// let num = prompt("enter number");

// for (let i = 1; i <= num; i++) {
//     if (i == 3) {

//         console.log("number", i);
//         continue; 
//     }
//     console.log(i);
// }


// breaks

// let num = prompt("enter number");

// for (let i = 1; i <= num; i++) {
//     if (i == 3) {

//         console.log("number", i);
//         breaks;
//     }
//     console.log(i);
// }


// switch case use

const readlineSync = require('readline-sync');

let month = readlineSync.question("Enter month number: ");

switch (parseInt(month)) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Enter a valid month number");
}
