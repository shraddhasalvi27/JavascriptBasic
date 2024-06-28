// // example1
//  code execution phase               |                  memeory creation phase
//   hello function execution          |window:{}
//                                     |this:window
//                                     |hello:f
//                                     |ans:un
//                                     |
//                                     |
//                                     |
//                                     |           

function hello(x){
    const a = "var1";
    const b = "var2";
    return function(){   //this function will return with all the lexical environment variables that is a,b,x
        console.log(a,b,x);
    }
}                

const ans = hello("arg");   // ans have return function along with a,b,z values
ans();