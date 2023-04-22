//the loop can be stopped with an if statement, and it can also have multiple initiators.
// for (let str = "monkey", i = 0; str === "monkey"; i++) {
//     if(i === 5) {
//         str = "banana";
//     }
//     console.log(i);
// }

// for (let i = 0; i < 100; i += 5) {
//     console.log(i);
//     if(1 === 25) {
//         console.log("Ha, gotcha!");
//         break; // breaks the loop, the code after will not be ran anymore
//     }
//     console.log("This is loop", i)
// }

// for (let i = 0; i < 100; i += 10){
//     console.log(i);
//     if (i === 20) {
//         i += 20;
//         continue;
//     }

//     console.log("Loop number", i);

//     if(i === 60) {
//         break;
//     }
// }


//////////////////////// EXERCISES //////////////////////////
// Print all the numbers from 5 to 10
// for (let i = 0; i <= 10; i++) {
//     console.log(num);
// }
/*
    Create a for loop that will print out all the even numbers between 10 and 40.

    Do the same for the odd numbers as well.
*/
// for (let i = 10; i <= 40; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 10; i <= 40; i++) {
//     if(i % 2 === 1) {
//         console.log(i);
//     }
// }

/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a for loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    4. After 3 loop iterations, change "loggedIn" to be true.
    5. After the loop is done print out: Successfully logged in!

    HINT1: This is more challenging with a for loop.
    HINT2: This is not an ideal candidate for a for loop!
    HINT3:You don't have to provide all the parts for a for loop construct.
*/

// for ( let loggedIn = false, i = 1; loggedIn === false; i++){
//     console.log("Incorrect login credentials");
//     if (i === 3){
//         loggedIn = true;
//     };
    
// }

// console.log("Successfully logged in")



