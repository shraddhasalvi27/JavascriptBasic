// arrow function will take this from surrounding
const user1 = {
    firstname:"shraddha",
    age: 90,
    about:() => {
        console.log(this.firstaname,this.age)
    }
}

user1.about(user1);
// arrow function take this from  surroundings

const user1 = {
    firstname:"shraddha",
    age: 90,
    about(){
        console.log(this.firstaname,this.age)
    }
}
user1.about() //short syntax it is also right