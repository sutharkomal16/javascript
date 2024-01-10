// objects literals

let mySym = Symbol("key1")
let komal ={
    name:"komal",
    "full name":"suthar",
    age:21,
    enrollno : 58,
    email:"sutharkomal24680@gmail.com",
    [mySym]:"key1"
}


// console.log(komal.name)
// console.log(komal["name"]) // name is defined as a string so use ""
// console.log(komal["full name"])
// console.log(komal[mySym]) // => key1 : it act as symbol key 

//  ****  change object value or freeze all object value 

// komal.email = "sutharkomal258@microsoft.com"
// Object.freeze(komal) // this will freeze all value so it can't be change even when u change it.
// komal.email= "suthar@gmail.com"
// console.log(komal)

komal.greeting1= function(){
    console.log("hello JS user");
}
komal.greeting2= function(){
    console.log(`hello JS use,${this.name}`);
}

console.log(komal.greeting2())


