class user{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`${this.username} is USERNAME`);
    }
}

class Teacher extends user {
    constructor(username,no,email){
        super(username);
        this.no = no;
        this.email=email;
    }

    addCourse(){
        console.log(`${this.username} is the username of this course`);
    }
}

const code1 = new Teacher("komal",123,"suthar@gmail.com")
console.log(code1)
code1.addCourse()
// // => Teacher { username: 'komal', no: 123, email: 'suthar@gmail.com' }
// //    komal is the username of this course

const code2 = new user("komal")
// console.log(code2);
// code2.addCourse()
// // => TypeError: code2.addCourse is not a function // bcz user class does not extends teacher class
// code2.logme()

console.log(code1 instanceof user)        //true   
console.log(code1 instanceof user)        //true