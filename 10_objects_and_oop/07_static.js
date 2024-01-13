
class user{
    constructor(username){
        this.username = username;
    }

    static logme(){
        console.log(`${this.username} is the username`)
    }
}

class Teacher extends user{
    constructor(username,no){
        super(username)
        this.no = no;
    }
}

const code1 = new Teacher("khushi",70)
// console.log(code1)
// // => Teacher { username: 'khushi', no: 70 }
// code1.logme()
// // =>TypeError: code1.logme is not a function

const code2 = new user("komal")
code2.logme()