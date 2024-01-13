// ES6 
// class name{ constructor(parameter){ code }  yourMethod(){} ... ...}
class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abcd`
    }

    changeToUppercase(){
        return `${this.username.toUpperCase()}`

    }
}

const code = new user("komal","sutharz2gmail.com",123456);
// console.log(code);
// console.log(code.encryptPassword());
// console.log(code.changeToUppercase());


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
