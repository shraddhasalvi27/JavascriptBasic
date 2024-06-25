//callback functions
// passing function as a parameter
//a can be object also as studied previous
function myFunc(a){
    console.log(a)
    a("harshit")//I am calling function a 
}

function myFunc1(name){
    console.log("hii shraddha");
    console.log(name);
}

myFunc(myFunc1);
//here a value is myFunc1 as a fuction
// after treating a as a function I called the a() in myFunc