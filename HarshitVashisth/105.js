// static list vs Live list

// querySelectorAll hamien static list degi
// getElementBySomething hamein live list degi

const ul = document.querySelector(".todo-list");
const listItem = ul.getElementsByTagName("li");
const listItem = document.querySelectorAll(".todo-list li");

const sixthli = document.createElement("li");
sixthli.textContent = "item 6";
const ul = document.querySelector(".todo-list");
ul.append(sixthli);
console.log(listItem);
