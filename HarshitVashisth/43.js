//lexical scope
let myvar = 89;
function add(){

    function myval(){
        console.log(myvar);
    }
    myval();
}
add();

// lexical scope is it will check for first in function 
// the outside function and then in lexical environment

// this is how lexical scope work
//basically it will take the value of variable which is nearest
