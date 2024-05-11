const user1 = {
    firstname:"shraddha",
    age: 90,
    about:function(){
        console.log(this.firstaname,this.age)
    }
}
 const myfunc = user1.about.bind(user1); //bind is important
 myfunc()  //it will give me error without bind method as this is a window method