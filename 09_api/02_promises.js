// // fetch().then().catch().finally()

const promise1 = new Promise(function(resolve,reject){
    // co Asyn task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("Aysn task is performed");
        resolve()
    },1000);

})

promise1.then(function(){
    console.log("promise is consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 1");
        resolve()
    },1000)
}).then(function(){
    console.log("Asyn task 2");
})

new Promise(function(resolve,reject){ 
    setTimeout(function(){
        resolve({username:"komal", email:"suthar@gmail.com"})
    },false)
}).then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"khushi", email:"suthar@gmail.com"})
        }else{
            reject('ERROR :something is wrong')
        }
    },1000)
})

 promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"nisha", email:"sharma@gmail.com"})
        }else{
            reject('ERROR :something is wrong')
        }
    },1000)
})
async function consumePromise5(){
   try {
    const response = await promise5
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromise5()

// async / await / fetch/ try catch

async function getAllUser(){
    try {
        const response = await fetch('https://api.github.com/users/sutharkomal16')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("something is wrong");
    }
}
getAllUser()

fetch('https://api.github.com/users/sutharkomal16')
.then((response) => {
    return response.json()
}).then((data) =>{
    console.log(data);
}).catch((error) => console.log(error))