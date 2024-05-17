// let btn = document.querySelector("#btn");
// btn.onclick = () => {
//     console.log("btn was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }
// let div = document.querySelector("#div");
// div.onmouseover = () => {
//     console.log("you are inside div:");
// }


// btn.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY)
// }
// let div = document.querySelector("#div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY)

// }
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     console.log("Button was clicked");
// });
// btn.addEventListener("click", (evt) => {
//     console.log("Button was clicked - handler2");
// console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// });


// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     console.log("Button was clicked - handler1");
// });
// btn.addEventListener("click", () => {
//     console.log("Button was clicked - handler2");
// });
// const handler3 = () => {
//     console.log("Button was clicked - handler3");
// };
// btn.addEventListener("click", handler3);
// btn.addEventListener("click", () => {
//     console.log("Button was clicked - handler4");
// });


// btn.removeEventListener("click", handler3); 





let mode  =   document.querySelector("#mode");
let body = document.querySelector("body");
    let currMode = "light";// dark
    mode.addEventListener("click", () => {
if(currMode==="light"){
    currMode = "dark";
    body.classList.add("dark");
    //document.querySelector("body").style.backgroundColor="black";
}else{
    currMode = "light";
    body.classList.add("light");
    //document.querySelector("body").style.backgroundColor="white";


}
console.log(currMode);
    })