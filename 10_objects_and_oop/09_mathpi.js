//  apke objects ke kuch properties ko iterate hona se stop karneka solution

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
const code1 ={
    name:'komal',
    email:"suthar@gmail.com",
    isAvailable:true,

    typeofFunction : function(){
        console.log("use of condition to avoid this issue. ")
    }
}
// console.log(code1)  
// // => { name: 'komal', email: 'suthar@gmail.com', isAvailable: true }
// console.log(Object.getOwnPropertyDescriptor(code1,"name"))
/*
{
  value: 'komal',
  writable: true,
  enumerable: true,
  configurable: true
}
*/


Object.defineProperty(code1,'name',{
    // writable:false,
    // enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(code1,"name"))

/* =>
{
  value: 'komal',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

// for (const [key,value] of Object.entries(code1)) {
//     console.log(`${key} : ${value}`);
// }
/*=>
name : komal
email : suthar@gmail.com
isAvailable : true
typeofFunction : function(){
        console.log("use of condition to avoid this issue. ")
    }
*/

for (const [key,value] of Object.entries(code1)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);

    }
}
/* =>
name : komal
email : suthar@gmail.com
isAvailable : true
*/