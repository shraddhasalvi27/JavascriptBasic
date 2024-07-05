//spread opearator in array
// that allows for the expansion of iterable elements (like arrays or strings) or object properties in places where multiple elements or variables are expected. 
// It simplifies a variety of tasks such as copying, merging, and destructuring data.

const obj1 ={
    name:"shraddha",
    age:2,
    height:120
}

const obj2 = {
    name:"yash",
    agem:7,
    heightm:125
}

const obj3 = {...obj1,...obj2};
console.log(obj3) //here name will be only one key no two similar key can be in one objects

//key according to the INDEX
const newObj3 = {..."abc"};
console.log(newObj3);//{0: 'a', 1: 'b', 2: 'c'}



