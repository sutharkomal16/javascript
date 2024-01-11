const myObj = {
    name: "komal",
    email:"komal@gmail.com",
    username:"komal_18",
}

for (const key in myObj) {
    // console.log(`${key} is ${myObj[key]}`)
}

// Arrays
const myArray = [1,2,3,4,5]
for (const key in myArray) {
//    console.log(`${key} value is ${myArray[key]}`)
}

// MAPS
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
   console.log(`${key} value is ${map[key]}`);
}