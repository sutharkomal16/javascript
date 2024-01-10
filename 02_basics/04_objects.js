// singleton
// Object.create

// const obj1 = new Object()
// const obj2 ={}
//  both are objects there is no differnce in output

const tinderUser = {}

// object.create 
tinderUser.id = "1234abc"
tinderUser.name= "komal"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const user2 = {
    email:"suthar@gmail.com",
    fullname :{
        username:"komal123",
        userfullname:{
            firstname:"komal",
            lastname:"suthar"
        }
    }
}

// console.log(user2.fullname.userfullname.firstname)
// // => komal

const obj3 = {  1:"a",2:"b"}
const obj4 = {  3:"a",8:"b"}
const obj5 = {  4:"a",5:"b"}

// const obj6 = Object.assign({},obj3,obj4,obj5)
// // Object.assign({} = traget ,obj1,obj2 = resources )
const obj6 = {...obj3,...obj4,...obj5}
// console.log(obj6)

const user = [ {name:"komal",email:"suthar@gmail.com"}, 
{name:"nisha",email:"khushi@gmail.com"},
{name:"rishi",email:"rishi@gmail.com"} ]

// console.log(user[0].email,user[1].email,user[2].email)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLogged'))


/* => this methods are use to access objects keys:
 1) index method  => suthar@gmail.com khushi@gmail.com rishi@gmail.com
 2) variable => { id: '1234abc', name: 'komal', isLoggedIn: false }
 3)object.keys(variable/object name)     => [ 'id', 'name', 'isLoggedIn' ]
 4)object.values(variable/object name)   => [ '1234abc', 'komal', false ]
 5)object.entries(variable/object name)  => [ [ 'id', '1234abc' ], [ 'name', 'komal' ], [ 'isLoggedIn', false ] ]

 */

const course = {
    name:"komal",
    email: "suthar@gmail.com",
    courseName: "Javascript in 1 shot in hindi",
    courseInstructor:"hitesh",
    youtubeChannel:"chai aour code"
}

const {courseInstructor : instructor} = course
// const {key name : shortcut name create by you} = object name

console.log(instructor)

