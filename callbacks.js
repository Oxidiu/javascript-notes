// ---------------------------- CALLBACKS ----------------------------\\

// ↓ making a function to repeat a callback function. as arguments, it takes the function to be repeted and the times to repeat.
let count = 0;
function repeat(callback, n) {
    let id = setInterval (callback, 500);
    // ↓ In the setTimeout() we have a function that clears/ stops the setInterval function after the interval time times n argument. Without this, it will run forever.
    setTimeout(() => clearInterval(id), 600 * n);
}

// ↓ Examples:

repeat(() => console.log("hi"), 3);
repeat(() => console.log("Hello"), 5);
console.log("I ran!")

/*
    Expected output:

*/

