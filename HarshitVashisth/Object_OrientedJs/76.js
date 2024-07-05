//what is prototype
// like object functions also have properties

function hello(){
    console.log("hello world");
}
//function property
console.log(hello.name);

//we can add our own property
hello.myownProperty = "uniqueValue";
console.log(hello.myownProperty);

// functions provide more useful properties
// functiion provide some free space that is prototype 
// lets see what it is
console.log(hello.prototype);
// here prototype is a empty object and only functions provide this property

if(hello.prototype){
    console.log("prototype property is present");
}else{
    console.log("prototype property is not present");
}
//check above condition for object

hello.prototype.abc = "abc"; //here we can add key-value pair in function

// function === function + object 
// in javascript
