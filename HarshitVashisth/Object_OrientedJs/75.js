//previous problem solution
//what is proto

const obj1 ={
    key1:value1,
    key2:value2
}
const obj2 ={
    key3:value3
}

console.log(obj2.key1);

// it will give me undefined as there is no key1 in the object
//now I want a solution that it will first search in its object and then search for that key 
// in above object
// how to do that?


obj2 = Object.create(obj1);
console.log(obj2.key1);
//now it will give me key1 value
console.log(obj2);

// __proto__ ===[[prototype]] in official document
//there is more thing prototype in js but it is different from above proto

console.log(obj2.__proto__) //it will give me the obj1 that is obj1 is proto of obj2



