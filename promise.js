// console.log("hello one");
// setTimeout( function()  {
//     console.log("hello two second")

// }, 5000);
// console.log("hello two");



// let p1 = new Promise((resolve,reject) => {
//     console.log("promise is panding");
    
//     setTimeout(() => {

//       console.log("promise is a fullfiled");
//       resolve(true);
      
//     },5000)

//   })

//   let p2 = new Promise((resolve,reject) => {
//     console.log("promise is panding");
    
//     setTimeout(() => {

//       console.log("promise is a rejected");
//       //resolve(true);
//       reject(new error("i am an error"));
//     },5000)

//   })



//   // to get the value
//   p1.then((value) => {
//     console.log(value);
//   }, (error) => {
//     console.log(error);
//   })




// // to catch the error
// p2.catch((error) =>{
//     console.log("some error occred in a p2");
// })


//promise chaining

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolved after two seconds:");
//         resolve(56);
//     }, 2000);
// });

// p1.catch((value) => {
//     console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {resolve ("promise 2")}, 2000);
//     });
//     return p2;
// }).than((valu) => {
//     console.log("we are done:");
//     return 2
// });


// async wait function
async function num() {

    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 degree");
        }, 2000);
    });

    let bangloreweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 degree");
        }, 5000);
    });

    console.log("Weather control room");

    // await delhiweather.then(alert);
    // await bangloreweather.then(alert);
    console.log("fetching delhi wether please await......")
    let delhiw = await delhiweather;
    console.log("fetched delhi wether is"+ delhiw);

    console.log("fetching banglore wether please await......")

   let banglorew = await bangloreweather;
   console.log("fetched banglore wether is"+ banglorew);

   return[delhiw,banglorew];
}

let a = num();

a.then((value) => {
    console.log(value)
})