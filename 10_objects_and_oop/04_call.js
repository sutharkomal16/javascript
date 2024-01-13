function setUsername(username){
    this.username= username;
    console.log("called");
}

function createUser (username,age,email){
    setUsername.call(this,username);
    this.email = email;
    this.age = age;
}

const code = new createUser("komal",21,"suthat@gmail.com")
console.log(code);