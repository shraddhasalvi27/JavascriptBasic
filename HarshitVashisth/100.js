// classList
// I want to check how many classes I have given to particular section
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
console.log(sectionTodo.classList);
sectionTodo.classList.add('bg-dark');
sectionTodo.classList.remove('container');
const ans = sectionTodo.classList.contains("container");
console.log(ans);
sectionTodo.classList.toggle("bg-dark");
// if class present it will remove if not present it will add

Headers.classList.add("bg-dark");
console.log(header.classList);
