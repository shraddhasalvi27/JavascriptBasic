// sets(it is iterable)

const num = new Set([1,2,3]);
console.log(num);

// in sets no duplicates are aloud
// no indexed based access
//console.log(num[2]);
//no guarented order

const num = new Set();
num.add(1);
num.add(3);
num.add(9);
num.add([1,2,3]);
num.add([1,2,3]);
//it will create two different arrays so that it is aloud

// .has method
if(num.has(1)){
    consolelog("yes");
}else{
    console.log("false");
}
for(let item of num){
    console.log(item);
}

//i can use for of loop as it is iterable

// can extract unique elements from the array
const arr = [1,2,3,4,5,6,,6,6,6];

const SetNew = new Set(arr);
console.log(SetNew);
console.log(arr);//it will not affect original array