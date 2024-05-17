// let age = 45;
// console.log(typeof age,age);

// const student = {
//     fullName : "shalindra aporiya",
//     cgpa : 55.5,
//     isPass : true,
//     age : 23,
// }
// student["age"] = student["age"]+3;
// console.log(student["age"]);
// let num = prompt("enter number");
// if(num%5==0){
//     console.log("num divisle by 5");
// }else{
//     console.log("num not divisle by 5:");
// }
// let num = prompt("enter number:");
// if(num>=80 && num<= 100){
//     console.log("grade A");
// }
// else if(num>=70 && num<= 79){
//     console.log("grade B");
// }
// else if(num>=60 && num<= 69){
//     console.log("grade C");
// }
// else if(num>=50 && num<= 59){
//     console.log("grade D");
// }else{
//     console.log("grade E");
// }
// do while loops use
// let i=1;
// do{
//     console.log("shalindra aporiya");
//     i++;
// }
// while(i<=10);
//for-of loops use  = strings for use
// let str = "shalindraaporiya";
// let size = 0;
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log(size);
//for-in loops use = object and array for use
// let student = {
//     name: "shalindra",
//     age: 22,
//     cgpa: 34.3,

// }
// for(let i in student){
//     console.log(i);
// }
// let gamNumber = 25;
// let userNumber = prompt("guess the right number");
// while(userNumber!=gamNumber){
// }
//     console.log("congretulation you are entered the right number:");

let balance = 1000;

while (true) {
    let choice = parseInt(prompt(
        "Welcome to the ATM\n" +
        "1. Check Balance\n" +
        "2. Deposit\n" +
        "3. Withdraw\n" +
        "4. Exit\n" +
        "Enter your choice:"
    ));

    switch (choice) {
        case 1:
            alert("Your current balance is: $" + balance);
            break;
        case 2:
            let depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
            if (!isNaN(depositAmount) && depositAmount > 0) {
                balance += depositAmount;
                alert("Deposit successful.\nYour new balance is: $" + balance);
            } else {
                alert("Invalid amount. Please enter a valid amount.");
            }
            break;
        case 3:
            let withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
            if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
                balance -= withdrawAmount;
                alert("Withdrawal successful.\nYour new balance is: $" + balance);
            } else {
                alert("Invalid amount or insufficient funds.");
            }
            break;
        case 4:
            alert("Thank you for using the ATM. Goodbye!");
            // Exit the loop and end the program
            return;
        default:
            alert("Invalid choice. Please try again.");
    }
}
