// The reduce method in JavaScript is used to apply a function against an accumulator and each element in the array 
// (from left to right) to reduce it to a single value.

const nums = [1,2,3,4,5,6]
const accu = nums.reduce((acc,curr)=>{
  return acc+curr
},0);
console.log(accu)