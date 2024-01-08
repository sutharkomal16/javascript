    let number1 = null;

    /* null = 0
       abc = NaN          NaN = Not a Number
       33abc = NaN
       33 = 33
*/

    let valueInNumber = Number(number1);
    // console.log(number);
    // console.log(valueInNumber);
    
    let boolNumber = "";
    let valueOfBoolNumber = Boolean(boolNumber);

    /*
        33 = true
        abc = true
        1 = true ; 0 = false;
        "" = false  [when empty space]

    */
    // console.log(boolNumber);
    // console.log(valueOfBoolNumber);
   
    
    let number2 = 456.567;
    let valueInString = String(number2);

    // console.log(number2)
    // console.log(typeof valueInString);

    //  ************************************************** OPERATIONS ********************************************************

    let no1 = 45;
    let no2 = 5;

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

    let str1 = "Komal";
    let str2 = "Suthar";

    let strTotal = str1 + str2;

    // console.log(strTotal);

    // console.log("1" + 2);
    // console.log(1 + "8");
    // console.log("1" + 2 + 2);
    // console.log(1 + 2 + "2");
    // console.log( (3 + 4) * 5 % 3);

    // console.log(+true)
    // console.log(+"")

    // ************************* PREFIX   **************************
    let a = 12;
    let b = ++a ;

    // console.log(a)
    // console.log(b)
    // console.log(`a:${a}, b:${b}`);

     // ************************* POSTFIX   **************************
     let x = 12;
     let y = x++ ;
 
     console.log(x)
     console.log(y)
     console.log(`x:${x}, y:${y}`);