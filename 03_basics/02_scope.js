let a = 1
const b = 2
var c = 3

function scope(){
    let a = 10
    const b = 20
    var c = 30
console.log(a);
console.log(b);
console.log(c);
}
// scope()
// console.log(a);
// console.log(b);
// console.log(c);

// *************** SCOPE *************
// child nest can access parent values but parents cannot access child

function user(){
    const username = "komal"
    function address(){
        const email = "komal.com"
        const phoneNo = 1122334455
        console.log(email);
    }
    console.log(address.phoneNo);
    address()
}

// user()

function one(num){
 return num + 1
}
// one(100)

const scope2 = function two(num){
    return num + 1
}
// scope2(200)