// class Solution {
//     public boolean rotateString(String s, String goal) {
//         return (s.length() == goal.length() && (s + s).contains(goal));
//     }
// }

// let str = "shalin";
// let str1 = "halins"; 
// let rotatedStr = str.substring(1) + str.charAt(0);
// if(rotatedStr === str1) { 
//     console.log("true");
// } else {
//     console.log("false");
// }

// let str = "shalindra";
// let str1 = str.substring(1)+str.charAt(3);
// console.log(str1);
const readlinesync = requier('readline-sync');
let a = readlinesync.question("enter number:");
console.log(a);