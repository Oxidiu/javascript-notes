//This is where the Asynchronous programing starts
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Most people are consumer of already-created promises.



const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Hello my friend!");
        resolve("Here is your icecream")
        reject("Sorry, no ice cream for you!");
        // ↑ If the resolve is ran, then the reject will be skipped.
    }, 2000); // 2000ms
})
// ↑ this will run after this ↓ because it is delayed
myPromise
    .then((resolvedValue) => {
    // console.log("Promise seems to be done");
    // console.log(resolvedValue);
    // console.log(myPromise);
    return "yo!";
    }) // ↓ We can chain promises like that, that is only ran if the first one is resolved
    .then((anotherValue) => {
        // console.log(anotherValue);
    })
    // The catch  ↓ will run the reject. We need to chain the catch to .then like that because otherwise it will wait for the first one to finish and it will crash. 
    .catch((error) => {
        console.log(error);
    })
// console.log("Hello!");
// console.log(myPromise);










//--------------------   EXERCISES   --------------------

const program = new Promise((resolve, reject) => {
    setTimeout(() =>{
        // resolve(console.log("Program complete")); 
    }, 3000)
})
// console.log("Program started");
// console.log(program);
// console.log("Program in progress");

// ↑ We could also use the .this for resolving

//---------------------------------------------------------

console.log("Program started");

let program2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000);
    setTimeout(() => {
        reject()
    }, 2000)
})
// ↑ the promise will get rejected, it can not be fulfiled afterwards.
program2.then(() => {
    // console.log("Program complete");
}).catch(() => {
    // console.log("Program failure")
})
// console.log(program2);

//---------------------------------------------------------

console.log("Program started")
const program3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000)
})
console.log(program3);
console.log("Program in progress...");
program3.then(() => {
    console.log("Step 1 complete");
    return "Step 2 complete"
    //↑ here I could also have writen a new promise just like the first and it would still work
}).then((step2) => {
    setTimeout(() => {
        console.log(step2)
    }, 3000)
})
