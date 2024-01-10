const num = 400;

const num1 = new Number(100);

// console.log(num);
// console.log(num1);
// 
// console.log(num1.toString().length)
// console.log(num1.toFixed(2))
//  it gives fixed two digit after decimal EG: 100.00, 98765.89, 8659.00

const num2 = new Number(500.562)
// console.log(num2.toPrecision(3))
//  IT IS USED TO ROUND OFF THE VALUE EG: 500.562= 501

const hundred = 100000;
// console.log(hundred)
// console.log(hundred.toLocaleString('en-IN'));

//  from 100000 is convert to indian numbers = 1,00,000 , default = 100000

//  ********************************************************************** MATHS *************************************************************

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(5.6));
// console.log(Math.ceil(5.6));
// console.log(Math.floor(5.6));
// console.log(Math.min(4,5,9,1));
// console.log(Math.max(4,5,9,1));

    const min= 55;
    const max = 90;
// console.log(Math.random())
// console.log(Math.random()*10 )  
// console.log( ( Math.random()*10) +1)
// console.log( Math.floor( Math.random()*10) +1)

// console.log( Math.floor( Math.random()*(max - min +1)) + min )

/* math.floor = for rounding off value , 
math.random = for genrating random no beteen 0-1 , 
max - min = for range ,
+1 = avoiding 0 so it will be like 0+1= 1 
+ min = for adding min(10) value to single digit no(4), so result will be (8 + 10 = 18)
*/