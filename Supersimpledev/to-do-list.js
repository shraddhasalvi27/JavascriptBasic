const todoList = [];
 function addTodo(){
    const inputElement =  document.querySelector('.js-name-input');
    const name = inputElement.value;
    console.log(name);
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    todoList.push({
        name:name,
        dueDate:dueDate});
    // console.log(todoList);

    inputElement.value = '';
    renderTOdoList();

 }

    const todoList =[{
        name:'make dinner',
        duedate:'2022-12-22'
    },{
        name:'wash -dishesh',
        duedate:'2022-12-22'
    }];
    function renderTOdoList(){
    let todoListHTML = '';
    
    for(let i=0;i<todoList.length;i++){
        const todoobject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name,dueDate} = todoObject;

        const html = `<p>
                        ${name} ${dueDate}
                        <button onclick = "
                        todoList.splice(${i},1);
                        renderTodoList();
                        ">Delete</button>  
        
                    </p>`; 
                      
        todoListHTML+=html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-List')
    .innerHTML = todoListHTML;
}
 
