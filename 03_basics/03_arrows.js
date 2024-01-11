//  thos is used in normal function but not in other 
const user = {
    name:"komal",
    email:"komal@gmail.com",

    welcomeMsg : function(){
        console.log(`${this.name}, welcome to git hub`);
        console.log(this);
    }
    }

    // user.welcomeMsg()
    /* => output
    {
        name: 'komal',
        email: 'komal@gmail.com',
        welcomeMsg: [Function: welcomeMsg]
    }
    */
    // console.log(this);

    function chai1(){
        let username ="komal"
        // console.log(this.username)
        console.log(this)
    }

    // chai1()

/* => output
ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Getter/Setter],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch]
}
*/
    const chai = () =>{
        let username ="komal"
        console.log(this)
    }

    chai()

// => {}

    //  **************** ARROW **************
    // ()=>{}

    const add1 = (num1,num2) => { return num1+num2 };
    const add2 = (num1,num2) => num1+num2;
    const add3 = (num1,num2) => (num1+num2);
    const add4 = (num1,num2) => ({username:"komal"})       // => { username: 'komal' }
    // console.log(add1(2,3)); 
    // console.log(add2(2,3)); 
    // console.log(add3(2,3)); 
    // console.log(add4(2,3)); 
    
