function Student(){
  console.log("student name is shraddha");
}

Student();

function sumnumbers(num1,num2){
    return num1+num2;
}

const sum = sumnumbers(3,5);
console.log(sum);

function isEven(num){
    return num%2 === 0;
}
console.log(isEven(5));

function checknum(array,target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
        
    }
    return -1;
}
const myarray = [7,8,9,0];

checknum(myarray,3);