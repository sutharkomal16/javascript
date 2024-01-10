function name() {
    console.log("k");
    console.log("k");
    console.log("k");
    console.log("k");
    console.log("k");
    console.log("k");
    console.log("k");       
}

// name()
// console.log()

//  ***************   ADD 2 numbers
// 1. using console
function add1(num1,num2){
    console.log(num1+num2);
}

// add1(2,4)
// // => 6

// 2. using variable = result then print (problem)
function add2(num1,num2){
    console.log(num1+num2);
}

// const ans1 = add2(8,18) // ISSUE : it will execute the add function even though it is in variable

// console.log("result:",ans)
// // => result: undefined : bcz in funtion add { console log doesn't rfeturn any value }


// 3. using return
function add3(num1,num2){
    // let result = num1+num2; // 1st method
    // console.log("komal")
    // return result

    return num1+num2

}

const answer = add3(8,8)

// console.log("result:",answer)

function userLoggedIn(username){
    if(!username){
        console.log("please enter a username")
        return
    }

    return  `${username},  Just Logged In `
}

// console.log(userLoggedIn("komal"))

// Ress / Spread  : we can get infinite number parameters and then convert them into arrays 

function calculateCartPrices(val1,val2,...num){
    let total = console.log(num);
    return total;
}

// calculateCartPrices(100,200,300,500,400)


const user4 = {
        username: "komal",
        email:"komal@gmail.com"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and email is ${anyobject.email}`)
}
// // ************ HANDLE OBJECTS THROUGH FUNCTIONS
// // 2 Ways to execute objects through Funtions 1. direct funtion calling 2. By passsing values through object in function arguments

// handleObject(user4)
// handleObject({
//     username:"komal",
//     email:"komal133@gmail.com",
// })


//  ************ HANDLE ARRAYS THROUGH FUNCTIONS

const myNewArray = [100,200,299]

function handleArray(array){
    const arrays1 = console.log(array[2])
    return arrays1
}
handleArray(myNewArray)
handleArray([100,200,2212])