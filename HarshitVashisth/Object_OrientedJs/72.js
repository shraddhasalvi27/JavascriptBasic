// Factory functions & discuss some memory related problems
// if I want to create different object with same property

const user1={
    name:"shraddha",
    age:90,
    about(){
        console.log(`${this.name},${this.age}`);
    }
}

//I want to create objects ike above 1000 objects 
//create function(that function create object)
//add key:value pair 
//it will return object



function createUser(name,age){
    const user ={};
    user.name = name;
    user.age = age;
    user.about = function(){
        console.log(`${this.name},${this.age}`);
    }
    return user;
}

const user1 = createUser("shraddha",90);
const user2 = createUser("mugdha",89);
const user3 = createUser("sen",90);


const about = user1.about();
console.log(about);

// it is very useful but there are many problems in this code
