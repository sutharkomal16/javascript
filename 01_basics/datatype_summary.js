// / Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt  => STACK

const score = 100
const scoreValue = 100.3
const bigNumber = 3456543576654356754n
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);





// Reference (Non primitive)

// Array, Objects, Functions           => HEAP

const heros = ["shaktiman", "spiderman", "captain america"];
let myObj = {
    name: "komal",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ************ STACK [PRIMITIVE DATA TYPE => its original value stay as it is bcz its copy value is assign to variable ] 
// ************ HEAP [NON-PRIMITIVE DATA TYPE => its original value change when its assign variable value is change bcz it refer to direct address reference]

let myName = "KOMAL";
let username = myName;
myName = "NISHA"

// console.log(myName);
// console.log(username);

let user1 = {
    userEmail:"komal@gmail.com"
}

let user2 = user1;
user2.userEmail= "nisha@gmail.com"

// console.log(user1.userEmail);
// console.log(user2.userEmail);