//this inside arrow functions

const person = {
    name:"shraddha",
    age:"78",
    about:() => {
        console.log(this.name,this.age)
        console.log(this);
    }

}
person.about() //here there it will print undefined
// as in arrow function there is this object is always one step upper,example here this object is not given object it is window object