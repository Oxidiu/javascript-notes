///////////////             CLASES             ////////////////

//More structure to our code and more efficiency in how we do things
//↓This is a constructor function
// function Person (name, age, nationality){
//     this.name = name; //{name: name}
//     if(typeof(age) === "number"){
//         this.age = age; // obj["age"] = age;
//     }else{
//         this.age = Number(age);
//     }
//     this.nationality = nationality;
// }

// ↓ This is a class with the same output as the constructor class ↑
class Person{
    constructor(name, age, nationality) // every class needs a constructor function because they are meant to be reused 
    {
        this.name = name;
        if(typeof(age) === "number"){
            this.age = age;
        } else{
            this.age = Number(age);
        }
        this.nationality = nationality = nationality;
    }
}

// let ovi = new Person("Ovi", 26, "RO")
// let eve = new Person("Eve", 31, "TR")
// console.log(ovi);
// console.log(eve);

// THE DIFFERENCE BETWEEN CLASSES AND OBJECTS ↓
// A class is the blueprint for how an object should look like, but id doesn't hold any data. When a class holds data, it becomes an object, like when it gets values for the keys.
// With the new keyword, we take a class and turn it into an object.


///////////////       Clases Inheritance       ////////////////

class Student extends Person {
    constructor(name, age, nationality, subject){
        super(name, age, nationality);
        this.subject = subject;
    }
}

let ovi = new Person("Ovi", 26, "RO")
let eve = new Student("Eve", 21, "UK", "English")
// console.log(ovi);
// console.log(eve);


//*****************   EXTRA   ********************/

// Object Oriented Programing (OOP)
// 4 main Ideas: 
//Inheritance 
//Encapsulation 
//Abstraction 
//Polymorphism

// A simple way to create objects with a function:

const createPlayer = (name, hp, mp, items) => {
    return {
        name,
        hp,
        mp,
        items,
    };
};

// const hanSolo = createPlayer("Han Solo" , 100, 10, ["Blaster"])
// console.log(hanSolo);

// const darthVader = createPlayer ("Darth Vader", 200, 50, ["Saber"])
// console.log(darthVader);

 // In this example above ↑, the objects are generic and can not be customized, they are the generic JavaScript Object prototype, whereas, with classes you are able to customize different classes of objects to have more object types separately.

//Now I will use both class and function to build a class of objects, two simmilar methods.

class Player {
    constructor(name, hp, mp, items){
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }
    // ↓ Method, a function available only for objects in this class. 
    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`)
    }

    // constructor and speak are in the prototype, while the contents of the constructor, the key-value pairs are in the instance of each object.
}

const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);
// hanSolo.speak("Never tell me the odds")
// console.log(hanSolo);
// console.log(Object.getOwnPropertyNames(hanSolo));
// console.log(Object.getOwnPropertyNames(hanSolo.__proto__));

const nader = new Player("Nader", 10, 5, ["Computer"]);
// nader.speak("Monkeys are the best animals")
// console.log(nader);
// console.log(Object.getOwnPropertyNames(nader));
// console.log(Object.getOwnPropertyNames(hanSolo.__proto__));

function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    // this.speak = function (phrase) {
    //     console.log(`${this.name} says: ${phrase}`)
    // }
    // ↑ in felul asta se poate adauga functia, dar va face parte din instance, nu din prototype.
    
};
// ↓ pentru ca functia sa faca parte din prototype, se va proceda asa:
AnotherPlayer.prototype.speak = function (phrase) {
    console.log(`${this.name} says: ${phrase}`);
}

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, "Saber");
// console.log(darthVader);
// console.log(Object.getOwnPropertyNames(darthVader));
// console.log(Object.getOwnPropertyNames(darthVader.__proto__));

//----------------STATIC METHODS AND PROPERTIES-----------------//

// Static methods vs instance methods

class Car {
    // ↓ This is an instance property
    _nameInstance = "Oxide"
    // ↓ This is a static property
    static _nameStatic = "Oxide"
    showInstance() {
        console.log("Instance method");
        // ↓ The instance functions can only access instance properties
        console.log(`The name is ${this._nameInstance}`)
        // ↓ Undefined
        console.log(`The name is ${this._nameStatic}`)
    };
    _nameInstance = "Oxide"
    static showStatic() {
        console.log("Static method")
        // ↓ The static methods can only access static properties
        console.log(`The name is ${this._nameInstance}`)
        // ↑ Undefined
        console.log(`The name is ${this._nameStatic}`)
    }
    static _nameStatic = "Oxide"
}

let car1 = new Car()
// ↓ The static method is called using the class name:
// Car.showStatic();

// ↓ While the instance method is called by an instance of the class:
// car1.showInstance();

// ↑ Both of them if called differently will give an error.


//------------------PRIVATE PROPERTIES AND METHODS----------------//
class Person2 {
    #age = 0; //this is a private property, that means it can only be used inside the class
    constructor(name, age){
        this.name = name;
        this.#age = age
    }
    sayAge() {return `I am `} 
}
const oxide2 = new Person2("Oxide", 26);
// console.log(oxide2.age);// This will return undefined
// console.log(oxide2.#age); // This will give an error
// same applies for private methods



//---------------------GETTERS AND SETTERS---------------------//
// They are basicaly some properties that call some methods.
// The getter just returns some value from the instance, whereas the setter may set some value to the instance
// Also, you can not have a getter or setter with the same name as an existing property, but for getters and setters, you may have them with the same name.

class Person3 {
    constructor(name){
        this.name = name;
    }
    set name(value) {
        // Here I can add checks or validations
        this._name = value;
    }
    get name() {
        return this._name.toUpperCase();
    }
}
const oxide = new Person3("Oxide");

console.log(oxide.name)





//------------------------EXERCISES-------------------------//