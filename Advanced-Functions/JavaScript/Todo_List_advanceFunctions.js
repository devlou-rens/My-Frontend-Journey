const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name:'Watching YT', 
    dueDate:'2026-12-22'},
    {
    name:'Cooking dinner', 
    dueDate:'2026-12-22'}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index){
        const { name } = todoObject;
        const { dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
            todoList.splice(${index}, 1);
            saveToStorage();
            renderTodoList();
            " class="btn-delete">Delete</button>
            `;
        todoListHTML += html;
    })
    /*for (let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name } = todoObject;
        const { dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
            todoList.splice(${i}, 1);
            saveToStorage();
            renderTodoList();
            " class="btn-delete">Delete</button>
            `;
        todoListHTML += html;
    }*/
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

const addTodo = () => {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dueDateElement = document.querySelector('.js-date-input');
    const dueDate = dueDateElement.value;

    todoList.push(
        {//name: name, // passing the inputElement to array[] using .push
        //dueDate: dueDate}
        name, dueDate});
    inputElement.value = '';
    dueDateElement.value = '';
    
    saveToStorage();
    renderTodoList();
}

function saveToStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}




