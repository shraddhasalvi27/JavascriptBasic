// objects in javascript

// objects allow to store the data in the form of properties
// in objects data is in the form of key and value pairs
//value can be function ,function inside object is method
//value can be another object also

//limitations with array
// there is no indexing in object

let person = {
    name:"shraddha",
    age:89
}
console.log(person);
//dot notation
console.log(person.name);
//bracket notation
console.log(person["name"]);

//array in an object
let boy = { naam:"pathuuu", saal:18 , hobbies:["cricket","tennis","balling"]};
//adding key value pair
boy.relation = "single";
console.log(boy.hobbies[1]);

console.log(boy);

let data = {
    name:"shraddha",
    age:90,
    date:"9078",

}

console.log(data.name);
data.education = "btech";
console.log(data["name"]);
console.log(data);
