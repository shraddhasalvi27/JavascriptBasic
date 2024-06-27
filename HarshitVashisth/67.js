console.log(this); //it will print window object in js
console.log(window);
//it will print same window object
// in js this and window are refer for the same
console.log(this===window);

function myfunc(){
    console.log("hello world");
}
console.log(this)//it will print window object and we will find myfunc function inside it

window.myfunc();
//it will print function
