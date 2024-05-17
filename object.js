// const student = {
//     fullName: "Shalindra",
//     marks: 94.4,
//     printMarks: function(){
//         console.log("Marks =", this.marks);//thins means student.marks
//     }
// };


// const employee =  {
//     calctax(){
// console.log("tax rate is 10%");
//     }
// }
// const karanArjun1 = {
//     salary: 50000,
//     calctax(){
//         console.log("tax rate is 20%");
//             }
        
// }
// const karanArjun2 = {
//     salary: 50000,
// }

// const karanArjun3 = {
//     salary: 50000,
// }

// const karanArjun4 = {
//     salary: 50000,
// }

// const karanArjun5 = {
//     salary: 50000,
// }

// karanArjun1.__proto__ = employee
// karanArjun2.__proto__ = employee
// karanArjun3.__proto__ = employee
// karanArjun4.__proto__ = employee
// karanArjun5.__proto__ = employee

// classes


// class toytaCar{//- class
// start() {
//     console.log("start")
// }
// stop(){
//     console.log("stop");
// }

// setBrand(brand){
//     this.brand = brand;
// }
// }
// let fortuner = new toytaCar();//- object
// fortuner.setBrand(fortuner);//-object
// let lexus = new toytaCar();//-object
// lexus.setBrand(fortuner);//-object


// class toytaCar{//- class
//     constructor(brand, milage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.milage;
//     }
//     start() {
//         console.log("start")
//     }
//     stop(){
//         console.log("stop");
//     }
    
    
//     }
//     let fortuner = new toytaCar("fortuner",10);// constructor
//     console.log(fortuner);
//     let lexus = new toytaCar("lexus", 12);// constructor
//     console.log(lexus);
    



// class Parent {
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends Parent {};
// let obj = new child()


// class person {
//     constructor(){
//         this.species = "homo sapience";
//     }
//     eat(){
//         console.log("eat");
        
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }
// class engineer extends person{
//     work(){
//         console.log("problem solve, build something")
//     }
// }
// let shalindra = new engineer();

// class doctor extends person{
//     work(){
//         console.log("health codinator")
//     }
// }
// let ravendra = new doctor();




// class person {
//     constructor(name){
//        // console.log("enter parent constructor");
//         this.species = "homo sapience";
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
        
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }
// class engineer extends person{
//     //constructor(branch){
//             constructor(name){

//         //console.log("enter child constructor");
//         super(name);
//         //this.branch = branch;
//         this.name = name;
//         //console.log("exit child constructor")
//     }
//     work(){
//         super.eat();
//         console.log("problem solve, build something")
//     }
// }
// let engob = new engineer("shalindra");




let DATA= "secret data";

class user{
    constructor(name, email){
        this.name;
        this.email;
    }
    viewData(){
        console.log("data=", data);
    }
}
    class admin extends user{
constructor(name,email){
    super(name,email);
}
editData(){
    
    DATA = "some new value";
}
    }

student1 = new user("shalindra, shalindraaporiya0088@gmail.com");
student2 = new user("ravendra, ravendra24@navegurukul.org");

let admin1 = new admin("admin", "admin@gmail.com");
