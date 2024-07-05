//new keyword
//what it is let's see
function func(firstname,age){
    this.firstname = firstname;
    this.age = age;

}
func.prototype.about = function(){
    console.log(this.firstname,this.age);
}

const user1 = new func("harshit",78);

//new keyword
// create empty object
//return this
user1.about();
//this will print

//do modifications in previous file using new keyword


