const monkey = {
    name: "Abu",
    species: "Capuchin",
    hobbies: ["stealing"],
    age: 2,
};

const printMonkey = () => {
    console.log(monkey.name);
}

// export {printMonkey as PM, monkey};// ← This way we export the function printMonkey() under the name PM. so when we call it in the file we import it we will call it by the new name. To export multiple things, we separate them by comma.

let monkeyAge = () => {
    console.log(monkey.age);
    monkey.age ++;
}

export {monkey, monkeyAge}
export default printMonkey
