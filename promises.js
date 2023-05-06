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

// From Develhope
// Promise chaining 
function isLoggedIn(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random();
            if(rand > 0.3) {
                resolve(userId);
            } else{
                reject(new Error("Not logged in!"));
            }
        }, 500);
    })

}

function getUserDetails(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId < 5) {
                resolve({"name": "Oxide", "otherData": "Buna ziua"});
            } else {
                reject(new Error("User does not exist!"));
            }
        }, 500)
    })
}

function getUserName({name}) {
    // throw new Error("some new error")
    if(name === undefined) {
        return Promise.reject(new Error("name was undefined"))
    }
    return Promise.resolve(name) 
}
isLoggedIn(3)
    .then(getUserDetails)
    .then(getUserName)
    .then((name) => console.log(name))
    .catch((err) => console.error(err))
    // .finally(() => console.log("finally!"))

// console.log(isLoggedIn(3))


//------------------- Promise API ----------------------//

// Promise.resolve()
// Promise.reject()
// ↑ Used to promisify a regular function. 
//romise.all() - checking if all the promises are resolved, even though they are not chained
Promise.all([
    isLoggedIn(3),
    getUserDetails(3),
    getUserName({"name": "Greg"})
])
    .then((val) => console.log(val))
    .catch((err) => console.error(err))
// Compared to the classic way of checking promises, while that is in sequence, this one is in paralel, so it will run all the promises in paralel. Even though some of them may be resolved, if one is rejected it will throw the error. Also, it will still return the fulfiled ones.

//Promise.race([
//     isLoggedIn(3),
//     getUserDetails(3),
//     getUserName({"name": "Greg"})
// ])
//     .then((val) => console.log(val))
//     .catch((err) => console.error(err))
// ↑ it will return the promise that resolves the first

// Promise.any([
//     isLoggedIn(3),
//     getUserDetails(3),
//     getUserName({"name": "Greg"})
// ])
//     .then((val) => console.log(val))
//     .catch((err) => console.error(err))


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

// console.log("Program started");

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

// console.log("Program started")
const program3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000)
})
// console.log(program3);
// console.log("Program in progress...");
program3.then(() => {
    // console.log("Step 1 complete");
    return "Step 2 complete"
    //↑ here I could also have writen a new promise just like the first and it would still work
}).then((step2) => {
    setTimeout(() => {
        // console.log(step2)
    }, 3000)
})
