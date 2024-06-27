//problems inside the factory functions are going to discuss here
//here the prblem is as bellow:
//we are going to create multiple objects and that multiple objects will create the multiple methods
//and memory will get occupied for every method 
// that is the problem
// here method is about and every time that method will get create for every object

const createUserMethod = {
    about(){
        console.log(`${this.name},${this.age}`);
    }
}
function createUser(name,age){
    const user ={};
    user.name = name;
    user.age = age;
    user.about = createUserMethod.about;
    return user;
}

const user1 = createUser("shraddha",90);
const user2 = createUser("mugdha",89);
const user3 = createUser("sen",90);


const about = user1.about();
console.log(about);
const about = user2.about();
console.log(user2);



