// get and set attributes
const link = document.querySelector("a");
// typeof,id,class, href etc are the attributes
console.log(link.getAttribute("href"));

link.setAttribute("href","https://codprog.com");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));



