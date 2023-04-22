//----------------  OBJECTS  -----------------

//Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). The only objects that don't inherit from Object.prototype are those with null prototype, or descended from other null prototype objects.
// Some globals ↓
let print = (x) => console.log(x); 


let person = {
    id: "Ezra",
}
person["id"] = 44; //← We can refer to keys using this syntax. We can use it for keys with spaces as well. 
person.name = "Ezra"; //← This syntax can only be used for one word keys.

const animal = {
    id: 42,
    name: "rawr",
    type: "dog",
    "num legs": 4, // not recommended
    numLegs: 4, // recommended
}
// ↑ The keys will always be string whereas, the values can be anything.
// ↓ Changing a key.
 animal["name"] = "moo"

const animal2 = {
    id: 42,
    name: "rawr",
    type: "dog",
    "num legs": 4, // not recommended
    numLegs: 4, // recommended
}
// console.log(animal2);
delete animal2["num legs"];
// console.log(animal2);
delete animal2.numLegs;
// console.log(animal2);

const animal3 = {
    id: 42,
    name: "rawr",
    type: "dog",
    "num legs": 4, // not recommended
    numLegs: 4, // recommended
}
// console.log("name" in animal) // ← is the key "name" in animal? - result in boolean value. Only looks for the membership of a key in an object.







//---------------------- METHODS ----------------------
const animal4 = {
    id: 42,
    name: "rawr",
    type: "dog",
    "num legs": 4, // not recommended
    numLegs: 4, // recommended
}
// console.log(Object.keys(animal4));
// console.log(Object.values(animal4));
// console.log(Object.entries(animal4));











//---------------------- EXERCISES -------------------------

let mexico = {
    id: 24,
    name: "Mexico",
    capital: "Mexico City",
    neighbours: ["USA", "Guatemala", "Belize"]
}
// console.log(mexico);
mexico.id = 25;
// console.log(mexico);
mexico.neighbours.push("Honduras");
// console.log(mexico);

//---------------------------------------------------------

let myPet = {
    name: "Sudo",
    type: "Dog",
    breed: "Poodle",
    age: 7,
    friends: ["Bit", "Byte", "Data"]
}
// console.log(myPet);
myPet.color = "Black";
// console.log(myPet);
myPet.breed = "Beagle";
// console.log(myPet);
myPet.friends.pop()
// console.log(myPet);
myPet.friends.push("Chip")
// console.log(myPet);

//---------------------------------------------------------

const banana = {
    name: "banana",
    quantity: 1,
    price: 1.95,
}
const apple = {
    name: "apple",
    quantity: 1,
    price: 1.45,
}
const candy = {
    name: "candy",
    quantity: 1,
    price: 3.50,
}

const store = {
    storeNumber: 5,
    locationCity: "Milan",
    locationCountry: "Italy",
    products: [banana, apple, candy]
}
// print(store);
// print(store.products);
// print(store.products[2]);
store.products[0].price = 1.75;
// print(store);
// print(banana);
candy.price = 4.99;
// print(store);
// print(candy);

//---------------------------------------------------------

let houseForSale = {
    area: 940,
    value: 320000,
    streetName: "Fifth Street",
    built: "2012",
    owner: {name: "Blake", age: 29},
    offers: [290000, 295000, 315000, 312000]
}
// print(houseForSale);
delete houseForSale.built;
houseForSale.owner.age = 30;
// print(houseForSale.offers.reduce((max, offer) => {
//     if(max > offer){
//         return max
//     } else{
//         return offer
//     }
// }))
houseForSale["sale price"] = 312000
// print(houseForSale)

//---------------------------------------------------------

const myConsole = {
    log: (message) => console.log(message),
}
// myConsole.log("Hello, friend!");

