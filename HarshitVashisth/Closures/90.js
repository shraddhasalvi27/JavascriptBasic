// exapmle3
function func(){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log("hello function here");
            counter++;
        }else{
            console.log("main pehle run ho chuka hu");
        }
    }
}
const myfunc = func();
myfunc();
myfunc(); //now it will log else condition