// few warnings
const user1={
    name:"shraddha",
    age:90,
    about:function(){
        console.log(`${this.name},${this.age}`);
    }
}
// const func = user1.about
// func();
// in this case it will not print the name and age it will give undefined
//as it is storing only referencefor that

const func = user1.about.bind(user1);
func();  
// now it will print the name and age