//sort method will change the original array
const numbers = [1,2,36789,9087];
numbers.sort();
console.log(numbers);

//sort method will not give me the sorted array as it will convert every number into string.

// it compares on the basis of ASCiI value

const nums = [1200,1,2,,45,67];
 const numbers = nums.sort((a,b)=>{
     return a-b;
})
// it is working as taking two numbers comapring taking return as a output 
//  the arranging the array,it will give me sorted array.

// example - create an object that contains all product id and price name
// arange the according to the price lowtohigh
