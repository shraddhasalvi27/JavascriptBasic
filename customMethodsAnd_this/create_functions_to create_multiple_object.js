const user1 = {
    firstname:"shraddha",
    age: 90,
    about(){
        console.log(this.firstaname,this.age)
    }
}

// if I want multiple user as a user1,user2,user3 etc

// how to do that

// function(that function create object)
// add key value pair
//object ko return karega
function createuser(firstname,lastname,email,age,adress){
    const user = {};
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.adress = adress;
    user.about = function(){
        return '${this.firstName} is ${this.age} years,${this.address},${this.email},${this.lastname}'
    }
    return user;

}

const user1 = createuser( 'shraddha','salavi','shraddhasalvi272@gamil.com');
console.log(user1);
about = user1.about();
console.log(about);


// I can write the about function in other object and use it as a reference so that memory consumption will be less


