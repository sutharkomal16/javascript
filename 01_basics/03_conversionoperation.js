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

    console.log(number2)
    console.log(typeof valueInString);

    