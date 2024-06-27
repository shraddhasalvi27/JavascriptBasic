//how to use javascript
// in function

// const createUserMethod = {
//     about(){
//         console.log(`${this.name},${this.age}`);
//     }
// }
function createUser(name,age){
    const user =Object.create(createUser.prototype);
    user.name = name;
    user.age = age;
    user.about = createUserMethod.about;
    //here I have to right about everymethod that we are going to create
    // that is the problem
    return user;
}

createUser.prototype.about = function(){
        console.log(`${this.name},${this.age}`);
}


const user1 = createUser("shraddha",90);
const user2 = createUser("mugdha",89);
const user3 = createUser("sen",90);


const about = user1.about();
console.log(about);  //this methods are working
const about = user2.about();
console.log(user2);



