function sum(){
    console.log("heyy shraddha here");
}

function addition(callback){   //here callback function is passing
    console.log("Heyy how was your day");
    callback();  //calling the callback function.
}

addition(sum);
//passing function as a argument 