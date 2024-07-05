//the previous solution is not that great
//reasons are going to discuss in this file
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
    //here I have to right about everymethod that we are going to create
    // that is the problem
    return user;
}

const user1 = createUser("shraddha",90);
const user2 = createUser("mugdha",89);
const user3 = createUser("sen",90);


const about = user1.about();
console.log(about);
const about = user2.about();
console.log(user2);



