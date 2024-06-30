// More methods to add elements on page (support poor internet explorer)
//appendChild;
//insertBefore;
//replaceChild;
//removeChild;

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const referenceNode = dcument.querySelector(".first-todo");
li.textContent = "new todo";
ul.appendChild(li);
ul.insertBefore(li,referenceNode);  //insert li before eleemnt refernceNode

ul.replaceChild(li,referenceNode);

ul.removeChild(referenceNode);

