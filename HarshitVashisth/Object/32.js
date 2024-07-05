//Iterable in objects

let person = {
    name : "shikhar",
    age: 67,
    hobby:[play,chess,study]

}
 for(let key in person){
    console.log(key);
    console.log(person[key]);
    console.log(`${key} : ${person[key]}`);
}

console.log((Object.keys(person)));   //it will return an array of keys

console.log((Object.keys(person))); //['name', 'age', 'hobby']  <-- array

//FOR-OF-loop
//FOR-OF loop cannot work on object so convert object to ARRAY
// Object.keys(array) 
// Object.values(array)

for(let key of Object.keys(person)){
    console.log(key); // name - age - hobby

    console.log(person[key]); // parth - 23 - ['droneracing', 'taxy', 'pcd']
}

