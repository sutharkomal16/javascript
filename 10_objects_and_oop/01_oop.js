const detail = {
    username : "komal",
    firstName : "komal",
    getUserDetail:function () {
        // console.log(`got ${this.username} Detail`);
        console.log(this);
    }
}
// console.log(detail.username)
// console.log(detail["firstName"]);
// detail.getUserDetail()
// console.log(this)


// CONSTRUCTOR
function User(username,loggedIn,loggedCount){
    this.username= username;
    this.loggedIn = loggedIn;
    this.loggedCount= loggedCount;

    this.msg = function(){
        console.log(`Welcome, ${this.username}`)
    }
    return this
}

const user1 = User("komal",true,12)
const user2 = User("khushi",true,19)
// console.log(user1);
// // user1 data will be overwrite ny user2 : as it doent use => new constructor

const user3 = new User("komal",true,12)
const user4 = new User("khushi",true,19)
console.log(user3);
// console.log(user4);

/* 1.object create hotaa ha 
2.constructot function is called due to new keyword . It packed all the arguments 
3.this keyword inject this arguments 
4. u get all this in function
*/


