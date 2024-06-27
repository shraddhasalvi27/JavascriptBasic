// Constructor function with new keyword -done
// More discussion about proto and prototype -done

const arr = [9,0,7,8];
console.log(arr.prototype);
// it will print all the methods of array thats funny

function hello(){
    console.log("heyy shraddha");
}
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
//here I can change the prototype
// thats few things about prototype