//  ***************************************  DATE   **********************************************8
let date = new Date();


// console.log(typeof date);
// console.log(date);
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toDateString());

let myCreatedDate = new Date(2024,0,10)
// Date (year,month,date)
// console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2024,0,10,11,44,56);
// Date (year,month,date,hours,minute)
// console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date("10-01-2024");
// Date (mm/dd/yy) or (yy/mm/dd)
// console.log(myCreatedDate1.toDateString())


//  ***************************************  TIME   **********************************************8

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// //  => 1704868477061

// console.log(myCreatedDate2.getTime());
// //  => 1727740800000

// console.log(myTimeStamp/1000);
// //  => 1704868477.061

// console.log(Math.floor(myTimeStamp/1000));
//  => 1704868477


//  get specific day, month, etc

let date2 = new Date();


// console.log(`this is current day ${date2.getDay()} and this is current MOnth ${date2.getMonth()+1}` );
// console.log(date2.getMonth()+1);

date2.toLocaleString(`default`,{
    weekday:"long"
})
console.log(date2.toLocaleString());

