// Immediately Invoked Function Expressions (IIFE)
// immediately excute the code and it help to reduce global pollution due to global variable and 

// NAME IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// (funtion defination) (function execution)

// DIRECT IIFE
( ()=>(console.log(`db connected`)))(); 

// WITHOUT NAME IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('komal')