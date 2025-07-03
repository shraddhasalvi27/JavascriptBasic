// function can return another function
function myFUnc(){
    return "shraddha";  // here we can return anything number,object and function
}

function OuterFunction(){
    function innerFunction(){
        console.log("helo world");
    }
    return innerFunction;
}

const ans = OuterFunction();
console.log(ans); //it will print function innerfunction
ans();  //it will print hello world

function printFullName(firstname,LastName){
    function printName(){ //here printNmae function will return with its lexical environment variabl along with two variables
        console.log(firstname+" " +LastName);

    }
    return printName;
}

const ans = printFullName("harshit","Sharma");
ans();  //now it will print harshit and vashisth