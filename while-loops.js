const greeting = "Hola!";
// let number = 0;
// while (number < 3) { // After the condition becomes falsy, the loop breaks and the code after the loop will be ran.
//     console.log(greeting)
//     number++;
// }

// let counter = 5;
// while (counter = 5) {
//     console.log(counter);
//     break; // Everything in the loop after this kw will not be ran.
//     console.log("Increasing counter");
//     counter++;
// }

// console.log("Thanks for playing!")

// let score = 0

// while (true) {
//     console.log("Inside the loop")
//     if(score >= 3){
//         break;
//     }
//     score++;

// }
// console.log("Done the loop!")
// These infinite loops are usefull in web dev, for example a server which is constantly listening for requests is running in an infinite loop, or in a game, where it displays frames infinitely untill the player does some action.

/////////////////  EXERCISE ///////////////////

// let i = 5
// while (i <= 10){
//     console.log(i)
//     i++
// }

/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that loops while "loggedIn" is false.
    Each loop, print out: "Incorect login credentials"
    4. After 3 loop iterations, change "loggedIn" to be true.
    5. After the loop is done print out: "Successfully logged in!"
*/ 
// let loggedIn = false;
// loopCounter = 0;
// while (!loggedIn) {
//     console.log("Incorect login credentials")
//     if(loopCounter === 2){
//         loggedIn = true;
//     }
//     loopCounter++
// }
// console.log("Successfully logged in!")

/*
    Create a while loop that will print out all the even numbers between 10 and 40.
*/

// let number = 10;
// while(number <= 40) {
//     if(number % 2 === 0) { // for odd numbers just change 0 to 1.
//         console.log(number);
//     };
//     number++;
// }

/*
    1. Create a while loop that runs from 1-100
    2. Every 10 loops, print out: Checkpoint! and the loop number 
    3. On loop 50 print out ONLY: Half way there!
    4. On the final Loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!
*/

let number = 1;
while (number <= 100){
    if(number === 50){
        console.log("Half way there!")
    } else if(number === 100) {
        console.log("You made it!")
    } else if (number % 10 === 0) {
        console.log(`Checkpoint! ${number}`)
    };
    number++;
}
console.log("All done")