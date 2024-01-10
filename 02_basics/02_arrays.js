/*
push()
concat()
flat()
Array.isArray()
Array.of()

*/

let array1 = ["komal","nisha", "khushi", ]
let array2 = ["sanjay", "rahul","jay"]

// array1.push(array2)
// console.log(array1)
// //  => [ 'komal', 'nisha', 'khushi', [ 'sanjay', 'rahul', 'jay' ] ] : array inside array => which is not good 

// let array3 = array1.concat(array2)
// console.log(array3)
// //  => [ 'komal', 'nisha', 'khushi', 'sanjay', 'rahul', 'jay' ] : arrays are concat in proper way

let array4 = [...array1,...array2]
// console.log(array4)
// => [ 'komal', 'nisha', 'khushi', 'sanjay', 'rahul', 'jay' ]

let array5 = [1,22,3,4,[5,6,[7,8,9],10,11,12]]
let real_array = array5.flat(Infinity)
// console.log(real_array)
// // => [1,22,3,4,5,6,7,8,9,10,11,12] : It combine all nested arrays into one single array

// console.log(Array.isArray("komal"))  // false
// console.log(Array.from("komal"))  // [ 'k', 'o', 'm', 'a', 'l' ]
// console.log(Array.from({name:"komal"})) // =>  [] :interesting for interview Question

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3))
// => [ 100, 200, 300 ] : ir combines variables into arrays.

