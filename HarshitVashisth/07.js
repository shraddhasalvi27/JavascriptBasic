//string methods
//trim(),toUppercase(),toLowercase(),slice()
//typeof operator
//string concatination


let sirname = "salavi";
let name = "       sHraddha           ";
name = name.trim();
console.log(name);

console.log(name.toUppercase());

console.log(name.toLowercase());

console.log(name.slice(1,5));

let age = 90;
let n = "shraddha";
let s = age + n;
console.log(s);  //string
console.log(typeof(age));  //number
console.log(typeof n);   //string
let d = " " + age;
console.log(typeof(d));  //string
console.log(num(d));

age = String(age);
console.log(typeof age);

h = "90";
h = Number(h);
console.log(typeof h);

h = +h;
console.log(typeof(h));



//concatinaation

let string1 = "89";
let string2 = "78";

let newstring = string1 + string2;
console.log(typeof newstring);
// if I want to add
let newstring1 = +string1 + +string2;
console.log(typeof newstring1);

let string3 = "Shraddha";
let string4 = "Salavi";

let newstringg2 = string3 +" " +string4;












