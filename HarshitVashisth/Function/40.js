// Arrow function
const add =(num1,num2) => {
    return num1+num2;
}
add(5,6);

const sum = (num1,num2) => {
    return num1+num2;
}
sum(2,3);

//when my function is taking only one parameter

// const num = number => {
//     console.log(number);
// } 

// when there are no parameters or more than two parameters we have to right the brackets

// more shortcut

const num = number => number+6;

num(78);

const num3 = number => number*9;
num3(89);

// const num2 = () => {
//     console.log("heyy shradda");
// }
const num2 = () => console.log("here is drana");



function hello(num){
    console.log("heyy")
    return num;
}
// const hell = function hello(num){
//     console.log("heyy");
//     return num;
// }

const hell = (num)=> num;
hell(89);


const add1 =(num1,num2)=>{num1+num2}
console.log(add1(2,3));