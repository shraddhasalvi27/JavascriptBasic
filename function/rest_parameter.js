function sum(...numbers){
    let total;
    for(let number of numbers){
        total = total+number;
    }
    return total;
}

const ans = sum(1,2,3,4,5,6);
console.log(ans);