// object oriented js 
// methods
//functions inside/associated with objects are called methods
const student = {
    name:"shraddha",
    age:90,
    school:swx,
    height:890,
    about: function(){
        // console.log(`my name is ${firstname} and ${age} is age`);//it will not work in the function
        console.log(`my name is ${this.firstname} and ${this.age} is age`);
        console.log(this) //it will print the whole object

    }   
}
student.about(); 
//here this is the whole object

//more uses of this

function property(){
    console.log(`the name is ${this.name} and age is ${this.age}`);
}

const obj1 ={
    name:"shraddha1",
    age:891,
    height:1890,
    about:property
}
const obj2 ={
    name:"shraddha2",
    age:892,
    height:2890,
    about:property
}
const obj3 ={
    name:"shraddha3",
    age:893,
    height:8903,
    about:property
}

obj1.property();
obj2.property();
obj3.property();
