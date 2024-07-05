// Understand callbacks in general

function myfunc(Callback){
    console.log("I am doing good");
    Callback();
}

function myfunc2(){
    console.log("heyy baby");
}
myfunc(myfunc2);

function twonum(number1,number2,onsuccess,onfailure){
    if(typeof number1 =='number'&& typeof number2 =='number'){
        onsuccess(number1,number2);
    }else{
        onfailure();
    }
}
twonum(1,2,(num1,num2)=>{
    console.log(num1+num2);
},()=>{
    console.log("please enter a number");
})