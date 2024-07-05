// example 2
function myFunction(power){
    return function(number){
        return number**power;
    }
}
const square = myFunction(2);
const ans = square(3);
console.log(ans);

const cube = myFunction(3);
const ans2 = cube(3);
console.log(ans2);

//we can use arrow function
const myFunction = power=>number=>number**power;

