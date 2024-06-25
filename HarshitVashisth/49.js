//function returning function

function myFunc(){
    return "a";
}
const ans = myFunc();
console.log(ans);

function myFunc1(){
    function hello(){
        console.log("hello world");
    }
    return hello;
}
const ans1 = myFunc1();
ans1();
