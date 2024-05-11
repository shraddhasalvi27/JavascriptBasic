const numbers = [1,2,3,4,2,37,8];

function iseven(number){
    return number%2 ===0;
}

const ans = numbers.every(iseven);
// example