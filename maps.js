// Map is a type of data structure. Different from the array map() method.
// It is a kind of object, but unlike the classic object, it can have any type of primitive, even functions as keys.

const print = (x) => console.log(x)

// ↓ Map creation, just like classes because it is actually a class
const myMap = new Map();
// console.log(myMap);

// Adding properties
myMap.set("name", "oxide");
myMap.set("age", 26)
myMap.set("array", [1, 2, 3, 4])
// ↓ Removing properties
myMap.delete("age");
// console.log(myMap);
// console.log(myMap.size);

// ↓ Modifying the value of a property
myMap.set("age", 11);
// console.log(myMap);


// ↓ Returning the value of a property
// console.log(myMap);
const age = myMap.get("age");
// console.log(age);


// ↓ like you ask if the map has a certain value, returns booleans
// console.log(myMap.has("name")) 
// console.log(myMap.has("last name"))

// ↓ The number of properties
// console.log(myMap.size);

// ↓ adding a number to an array inside a map
myMap.get("array").push(5)
// print(myMap)








//----------------   EXERCISES   ----------------

let mexico = new Map();
mexico.set("id", 24);
mexico.set("name", "Mexico");
mexico.set("capital", "Mexico City");
mexico.set("neighbours", ["USA", "Guatemala", "Belize"]);

// print(mexico)

mexico.set("id", 25);

mexico.get("neighbours").push("Honduras");
// print(mexico)

//---------------------------------------------------------

const myPet = new Map();
myPet.set("name", "Sudo");
myPet.set("type", "Dog");
myPet.set("breed", "Poodle");
myPet.set("age", 7);
myPet.set("friends", ["Bit", "Byte", "Data"]);
// print(myPet);

myPet.set("Colour", "Black");
myPet.set("breed", "Beagle");
myPet.get("friends").pop();
// print(myPet);

myPet.get("friends").push("Chip");
// print(myPet);

//---------------------------------------------------------

const banana = {
    name: "banana",
    quantity: 1, 
    price: 1.45,
    
};

const apple = {
    name: "apple",
    quantity: 1,
    price: 1.95,
};

const candy = {
    name: "candy",
    quantity: 1,
    price: 3.50,
};

const store = new Map();
store.set("storeNumber", 5);
store.set("locationCity", "Milan");
store.set("locationCountry", "Italy");
store.set("products", [banana, apple, candy]);
// print(store);

// for(let i = 0; i < store.get("products").length; i++){
//     print(store.get("products")[i])
// }

// print(store.get("products")[2]);

store.get("products")[0].price = 1.75;
// print(store);
// print(banana);

candy.price = 4.99;
// print(store);
// print(candy);

//---------------------------------------------------------

const houseForSale = new Map();
houseForSale.set("area", 940);
houseForSale.set("value", 320000);
houseForSale.set("streetName", "Fifth Street");
houseForSale.set("buildt", 2012);
houseForSale.set("owner", {name: "Blake", age: 29});
houseForSale.set("offers", [290000, 295000, 315000, 312000]);
// print(houseForSale);

houseForSale.delete("buildt");
houseForSale.get("owner").age = 30;
// print(houseForSale);

const maximumOffer = houseForSale.get("offers").reduce((max, offer) => {
    if(max > offer){
        return max;
    }
    return offer
})
// print(maximumOffer);

//---------------------------------------------------------

const myConsole = new Map();

myConsole.set("log", (message) => console.log(message));

// myConsole.get("log")("Hello");

myConsole.set(1, "number one");
myConsole.set("1", "string one");

// console.log(myConsole)

//---------------------------------------------------------

//This is a complicated problem, which is common in interviews.
//"Find the first duplicate value in "numbers" and print out the index of that value as well as the index of where it was first found in numbers"

let numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];
let seenNumbers = new Map();
for (let i = 0; i < numbers.length; i++){
    if(seenNumbers.has(numbers[i])){
    console.log(i, seenNumbers.get(numbers[i]));
    break
    } else {seenNumbers.set(numbers[i], i);}
}