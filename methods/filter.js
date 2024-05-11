const  numbers = [1,2,3,4,5,6];
const iseven = numbers.filter((number)=>{
    return number%2===0;
}
)
console.log(iseven);