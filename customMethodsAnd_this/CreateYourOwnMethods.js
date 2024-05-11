//methods
// functions inside the objects are methods
function personInfo(){
    console.log("The firstname is ${this.firstname} and age is ${this.age}")
}  //this function is useless
const person1 = {
    firstname:"shraddha",
    age:90,
    about:personInfo
}
const person2 = {
    firstname:"Aaditya",
    age:90,
    about:personInfo

}
const person3 = {
    firstname:"madhura",
    age:90,
    about:personInfo

}
person1.about();
person2.about();
person3.about();

