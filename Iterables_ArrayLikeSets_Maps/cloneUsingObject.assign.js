const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",

}
const obj2 = obj;
obj.key4 = "value4";
console.log(obj);
console.log(obj2);
const obj2 = Object.assign({},obj); //one more wayto clone the object.


