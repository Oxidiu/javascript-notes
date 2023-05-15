// import {PM as monkeyName} from "./monkey.js" // ← This sintax works only if we make a package.json file inside the root folder and write there:
// {
//     "type": "module",
// }
// ↑ Also, we can import something under a different name than exportedj, just like on the export side.
import monkeyName, {monkey, monkeyAge} from "./monkey.js"

// or
// import {default as monkeyName} from "./monkey.js"
console.log("Welcome to the jungle!")
monkeyName()
monkeyAge()
console.log(monkey)
