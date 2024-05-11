// call method


function about(hobby,fave){
    console.log(this.firstname, this.age,hobby,fav);
} //i can use call method on direct function also
const user1 = {
    firstname:"shraddha",
    age:78,
    about:function( hobby,fav){
        console.log(this.firstname, this.age,hobby,fav);
    }  // I can write this function outside
}

const user1 = {
    firstname:"mugdha",
    age:67,

}

user1.about.call(user2); //I can also pass user1 ,it is a this value

// apply
about.apply(user1,[guiter,amitabh]);

//bind
const func = about.bind(user1,"guiter","amitabh");
func();

