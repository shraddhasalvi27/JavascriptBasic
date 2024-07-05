// Insert adjacent elements html
//beforebegin  - it will get insert before ui list
//afterbegin
//beforeend
//afterend -it will get insert after ui list
const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend","<li>teach Students</li>");
todoList.insertAdjacentElement("afterbegin","<li>teach Student</li>");



