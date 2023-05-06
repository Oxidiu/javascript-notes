// ---------------------- DESTRUCTURING -------------------
// Basicaly, destructuring is dividing an array in smaller pieces like this:

const alphabet = ["A", "B", "C", "D", "E", "F"]
const numbers = ["1", "2", "3", "4", "5", "6"]

const [a,, c, ...rest] = alphabet;
// ↑ the destructured array index coresponds to the alphabet index. If I want to skip a certain element in the array, just add one more comma like I have skiped "B". Also, if I want to continue the destructuring with the rest of the array but put the elements alltogether into another array, we can use the spread operator "...".

// console.log(a);
// console.log(b);
// console.log(rest);

// SPREAD OPERATOR
const newArray = [...alphabet, ...numbers] //the dots
// console.log(newArray)

// DESTRUCTURING IN OBJECTS

const personOne = {
    name: "Kyle",
    age: 24,
    address: {
        city: "Somewhere",
        state: "One of Them",
    }
}

const personTwo = {
    name: "Sally",
    age: 32,
    addres: {
        city: "Somewhere else",
        state: "Another one of them"
    }
}



const {name: firstName = "John", age,  address: {city}} = personTwo //though not included in the example, "..." works just fine here as well
// console.log(firstName);
// console.log(age);
// console.log(city);

const personThree = {
    age: 32,
    favoriteFood: "Watermellon",
}
const personFour = {...personOne, ... personThree}
// console.log(personFour) 
// ↑ this will overwrite in the personOne the values of the common keys with the one in the personThree

function printUser(user) {
    console.log(`Name is: ${user.name}. Age is ${user.age}`);
}
// ↑ ↓ See the difference, both return the same thing.
function printUserDestructured({name, age}) {
    console.log(`Name is: ${name}. Age is ${age}`)
}

// here if the variable names are different from the keys of the obj, the destructuring will return undefinded for the new values
const person = {
    id: 1,
    name: "Mario",
    surname: "Rossi",
    old: 25
  };
  
  const {id, name, surname, old} = person;
//   console.log(id, name, surname, old);
  
