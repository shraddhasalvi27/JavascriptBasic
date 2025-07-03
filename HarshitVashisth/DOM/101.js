// Create elements 
// create new html element and add

// innerHtml to add new elements
const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
todoList.innerHTML = "<li> New Todo List</li>";

todoList.innerHTML = "<li> teach students</li>";

// we should not use innerHtML as browser will render the eleemnts from its parent 

// when we want to change the innerhtml complete then use innerHTML


