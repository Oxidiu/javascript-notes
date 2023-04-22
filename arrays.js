const veggie1 = "cucumber";
const veggie2 = "kale";
const veggie3 = "beet";
// console.log(veggie1);
// console.log(veggie2);
// console.log(veggie3);
// ↑ not good

const animals = ["monkey", "dog", "cat", "koala"]
const lineBreak = () => console.log("--------------") 

// console.log(animals);

// console.log(animals[0]);
// lineBreak();

const monkey = animals[0];

for (let i = 0; i <= 3; i++){
    // console.log(animals[i])
};

// lineBreak();
animals.push("elephant", "cow"); // adds elements to the end of the array


const printAnimals = () => {
    for (let i = 0; i <= animals.length - 1; i++){
        console.log(animals[i])
    } 
}; 

// printAnimals();
// lineBreak();

animals.pop(); // removes the last element
// printAnimals();
// lineBreak();

animals.unshift("llama"); // adds elements to the beginning of the array and pushes the rest forward
// printAnimals();
// lineBreak();

animals.shift(); // removes an element from the beginning of the array and reindexes everything
// printAnimals();
// lineBreak();








//------------------------ EXERCISES ------------------------

/*
    1. Create an array with the following strings:
        - "Mercury"
        - "Venus"
        - "Earth"
        - "Mars"

    2. Add the string "Jupiter" to the END of the array
    3. Add the string "Sun" to the START of the array
    4. Remove the last two strings from the array
    5. Remove the first two strings from the array

    *Print out the array after each of these steps ↑
*/

solarSystem = ["Mercury", "Venus", "Earth", "Mars"];
let printSystem = () => console.log(solarSystem);

// console.log("init");
// printSystem();

// console.log("Added Jupiter")
solarSystem.push("Jupiter");
// printSystem();

// console.log("Added Sun")
solarSystem.unshift("Sun");
// printSystem();

// console.log("Removed last two")
solarSystem.pop();
solarSystem.pop();
// printSystem();

// console.log("Removed first two")
solarSystem.shift();
solarSystem.shift();
// printSystem();



/*
1. Create a variable called "multiple" and initialize it to 5
2. Create an array with the numbers 10-15 (inclusive)
3.Loop through the array and on each iteration:
    - Multiply the number by the multiple and print out the result
    - As you're printing, use this format (example):
        10 x 5 = 50;
        11 x 5 = 55;
        ...
        15 x 5 = 75;

BONUS: Try to see if you can make it so that all you need to change is the "multiple" variable and the program still works correctly.
*/

let multiple = 5;
// nums = [10, 11, 12, 13, 14, 15];

// for (let i = 0; i < nums.length; i++) {
//     // console.log(`${nums[i]} x ${multiple} = ${nums[i] * multiple}`);
// }


/*
Create a variable called "greetings" and initialize it to: "Hello, nice to meet you!"
Use a loop to loop through this String (just like you would an array);
    - On each loop iteration, print out what is at that index
Why does this happen?
What is a String really?
*/

const greetings = "Hello, Nice to meet you!"

for (let i = 0; i < greetings.length; i++){
    // console.log(greetings[i]);
}
//A string is basicaly an array of charracters, however, there are some array methods that do not work on strings.

/*
Create a variable called "total" that starts at 0
Create an array called "grades" with the following values: 55, 63, 82, 98, 91, 43.
Print the AVERAGE grade
*/

let total = 0;
let grades = [55, 63, 82, 98, 91, 43];

for (let i = 0; i < grades.length; i++) {
    total = total + grades[i] // total += grades[i]
}
// console.log(total)
let average = total / grades.length;
// console.log(average)

/*
Not writing anymore the exercise question
*/

let bakery = ["Cake", "Cookie", "Bread", "Scone"]
// console.log(bakery)

let myBakery = bakery;
// console.log(myBakery);

myBakery.push("Croissant", "Granola")
// console.log(myBakery);
// console.log(bakery);

// Both arrays were modified because in fact they are not two different arrays, but two addresses to the same place in memory. To have a separate array, it must be created again, not assigned like above ↑. the explanation is that arrays are not primitive types, so they are not creating copies by assignment, so bakery and myBakery are just different labels for the same place in memory.








//-------------------- MAP --------------------
// Only works on arrays.
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

// const cities = ["london", "vancouver", "mumbai", "new york"]

// const bigCities = cities.map((city) => {return city.toUpperCase();}) // without return, we get undefined for every element.
// console.log(bigCities)

const numbers = [5, 10, 15, 20, 25];
// ↓ map() is an array method, it functions only for arrays and it has only one parameter which is the function to be applied.
const timesTen = numbers.map((number) => {return number * 10;})








//-------------------  MAP EXERCISES  --------------------

// let practice = [25, 26, 27, 28, 29, 30];
// let squared = practice.map((x) => x * x);
// console.log(practice);
// console.log(squared);


let bools = [true, true, false, true, false, false]
let mappedBools = bools.map((bool) => {
    if(bool === true) {
        return Math.floor(Math.random() * 100) //Math.random genereaza floating nr random intre 0 si 1. Factorul mareste range-ul. MAath.floor() rotunjeste numarul
    } else {return 0;}

})
// console.log(bools);
// console.log(mappedBools);


// let prices = [1.23, 19.99, 85.2, 8, 5.2,];
// let taxedPrices = prices.map((x) => {
//     if (x > 10) {
//         return x * 1.2;
//     } else {
//         return x;
//     }
// });
// console.log(prices);
// console.log(taxedPrices);


// let items = ["light", "banana", "phone", "book", "mouse"];
// let plurals = items.map((item) => {
//     if(item === "mouse"){
//         return "mice";
//     } else {
//         return item + "s";
//     }
// });
// console.log(items)
// console.log(plurals)

let row = [10, 20, 30, 40, 50];
// let matrix = row.map((x) => [x])
// ↓ this is another way to do it
let matrix = row.map((number) => {
    const array = [];
    array.push(number);
    return array
})
// console.log(matrix);








//-----------------   FILTER   -------------------
// The filter() method creates a shallow coppy of a portion of a given array, filtered down to just the elements from the givwen array that pass the test implemented by the provided function
// The filter() method accepts as an argument functions that returns boolean values and filter out the matching elements.
// Filter actually functions on truthy and falsey values as well, so we need to be careful.

// const cities = ["madrid", "vancouver", "mumbai", "new york"];
// const mCities = cities.filter ((city) => {
//     return city.startsWith("m");
// })


// const nums = [5, 6, 7, 8, 9, 10];
// const evenNumbers = nums.filter((num) => num % 2 === 0)
// console.log(evenNumbers)










//---------------- FILTER EXERCISES -------------------

let practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let clonedPractice = practice.filter((x) => x % 2 === 0);
// console.log(clonedPractice);

let countries = ["France", "South Africa", "Brazil", "United States", "Sweden"]
let blankCountries = countries.filter((country) => {
    for (let i = 0; i < country.length; i++ ){
        if (country[i] === " "){
            return true;
        }
    }
})
// console.log(blankCountries)
//↑ This was my logic, but there is a simpler way using the method includes() ↓
// console.log(countries.filter((country) => country.includes(" ")))
//↑ This method is especially for strings.

// let prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
// let lowPrices = prices.filter((price) => price * 1.15 < 10)

// console.log(lowPrices);
let values = [[1, 2, 3], [0, 0, 1], [3, 6, 9], [0, 1, 2]]
let hasTwos = values.filter((arr) => arr.includes(2));
// console.log(hasTwos)

// let nums = [10, 20, 30, 40, 50];
// let timesTwo = nums.map((x) => x * 2);
// let over50 = timesTwo.filter((num) => num > 50);
// let 
// console.log(nums)
// console.log(timesTwo)
// console.log(over50)
// let nums = [10, 20, 30, 40, 50].map((num) => num * 2).filter((num) => num > 50);
// console.log(nums)






//--------------------   REDUCE   ---------------------------
// Only works on arrays
// From MDN: The reduce() method executes a user-supplied "reducer" callback function on each element  of the array, in order, passing in the return value from the calculation on the proceeding element, The final result of running the reducer across all elements of the array is a single value.

// const nums = [5, 10, 15, 20, 25, 30, 35];
// let sum = 0
// for (let i = 0; i < nums.length; i++){
//     sum += nums[i]
// };
// const sum2 = nums.reduce((result, number) => {
//     // console.log(result, number);
//     if(number <20) {
//         return result + number;
//     } else {
//         return result
//     }
// }, 0)
// console.log("-------------")
// console.log(sum2)

const cities = ["Vancouver", "Berlin", "Seatle", "Toronto"];
const concatCities = cities.reduce((concatStrings, city) => {
    if(city === "Vancouver") {
        return concatStrings;
    }
    return concatStrings + city + "-";
}, "")
// console.log(concatCities);

// const nums = [5, 10, 15, 20, 25, 30, 35];
// const reduced = nums.reduce((result, num) => {
//     // console.log(result, num);
//     result.push(num);
//     return result
// }, [])
// console.log(reduced)








//---------------   REDUCED EXERCISES   ----------------

let points = [55, 56, 57, 58, 59, 60];
let sum = points.reduce((result, number) => result + number, 0);
// console.log(sum);

const companies = ["apples", "tesla","spacex", "amazon", "meta", "google"];
// ↓ here we used the third parrameter of the reduce function which is the index. We can use it to specify if there should be a sspecial rule for a speciffic index.
const modded = companies.reduce((result, company, i) => {
    if(company[0] === "a"){
        return result;
    }
    if(i === companies.length - 1){
        return result + company;
    }
    return result + company + "-";
}, "");
// console.log(modded)

let prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
const afterTax = prices.reduce((result, price) => {
    
    if(price > 6) {
        // console.log(result, price)
        return result + price;
    }
    // console.log(result, price * 1.2)
    return result + (price * 1.2)
}, 0)
// console.log(afterTax)

// const items = ["light", "banana", "phone", "book", "mouse"];
// const caps = items.map((item) => item[0].toUpperCase() + item.slice(1));
// const concat = caps.reduce((acc, string) => acc + string + " ", "");
// ↓ Oneliner
const items = ["light", "banana", "phone", "book", "mouse"].map((item) => item[0].toUpperCase() + item.slice(1)).reduce((acc, string) => acc + string + " ", "")
// console.log(items);
// lineBreak();
// console.log(caps);
// lineBreak();
// console.log(concat);

// const nums = [10, 30, 50, 70, 90];
// const squares = nums.map((num) => num * num);
// const over1000 = squares.filter((square) => square > 1000);
// const finale = over1000.reduce((sum, square) => sum + square);
// ↓ oneliner
const nums = [10, 30, 50, 70, 90]
    .map((num) => num * num)
    .filter((square) => square > 1000)
    .reduce((sum, square) => sum + square)
console.log(nums);
console.log(squares);
console.log(over1000);
console.log(finale);

