//call apply and bind method 
const user1 = {
    name:"harshit",
    age:90,
    height:90,
    about:function(hobby,sirname){
        console.log(`the name is ${this.name} and age is ${this.age}`,hobby,sirname);
    }
}

const user2 = {
    name:"shraddha",
    age:78,
    height:78
}


user1.about.call(user2,"football","salavi");
//here user1's function I am using it to print user2 value and here this will replace with user2 object

user1.about.apply(user2,["football","salavi"]); //only difference between call and apply is in apply we pass argumets in array


const func = user1.about.bind(user2,"football","salavi");
// here bind method will return me a funcion and then I can call that function
func();


