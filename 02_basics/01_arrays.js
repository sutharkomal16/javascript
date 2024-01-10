// *************** ARRAYS ************** 

/* 
pop()
push()
shift()
unshift()
join()
*/
let array1 = [1,2,3,4,5]
// console.log(array1[3])

array1.push(6)
array1.push(7)
array1.push(8)
array1.push(9)
// console.log(array1)

array1.pop()
//  console.log(array1)
// It pop thr number from last.

 array1.unshift(20)
//  console.log(array1)
//  => [ 20, 1, 2, 3, 4,  5, 6, 7, 8 ] 

array1.shift()
// console.log(array1)
//  => [ 1, 2, 3, 4,  5, 6, 7, 8 ] It pop the number from front.

// console.log(array1.includes(7))
// // => true 
// console.log(array1.indexOf(3))
//  => 2

const array2 = array1.join()
// => it combine and convert its data type to String
// console.log(array2)
// console.log(typeof array2)


/*
Slice()
splice()
*/

let array3 =  Array(0,1,2,3,4,5,6)

// console.log("A:",array3)
// => [0, 1, 2, 3,4, 5, 6]

let array4 =  array3.slice(1,3)
// console.log(array4)
// => [ 1, 2 ]
// console.log("B:",array3)
// => [0, 1, 2, 3,4, 5, 6] : slice does not manipulate the original array

let array5 =  array3.splice(1,3)
// console.log(array5)
//  =>  [1, 2, 3 ]
// console.log("B:",array3)
// => [ 0, 4, 5, 6 ] : slice does manipulate the original array

