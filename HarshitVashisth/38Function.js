// funcions are block of code that we can reuse again and again
function singHBD(){
    console.log("happy birthday ..............");
    
}

singHBD()  //function will print happy birthday

function number(){
    return 5;
}
number(); //calling function it will return number 5

// parameters and arguments

function add(num1,num2){
    sum = num1+num2;
    return sum;
}

const num2 = add(7,8);
console.log(num2);