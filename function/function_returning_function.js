console.log("function returning function");
function myfunc(){
    function hello(){
        console.log("hello world");
    }
    return hello;
}

const ans = myfunc();
ans();
