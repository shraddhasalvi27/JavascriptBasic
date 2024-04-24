const numbers =[1,2,3,4,5];
function myfunc(number,index){
    console.log('the index is ${index} and number is ${number}');

}
for(let i =0;i<numbers.size();i++){
    myfunc(numbers[i],i);
}
numbers.forEach(myfunc);
