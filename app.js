const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

filterOption.addEventListener('click', filterTodo)

todoButton.addEventListener('click', (e) => {
  e.preventDefault()
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)
  console.log(newTodo)

  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>'
  completedButton.classList.add('complete-btn')
  todoDiv.appendChild(completedButton)

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
  deleteButton.classList.add('delete-btn')
  todoDiv.appendChild(deleteButton)

  todoList.appendChild(todoDiv)

  todoInput.value = ''
})

todoList.addEventListener('click', (e) => {
  const item = e.target

  if (item.classList[0] === 'delete-btn') {
    const todo = item.parentElement
    todo.classList.add('fall')
    todo.addEventListener('transitionend', () => {
      todo.remove()
    })
  }

  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement
    todo.classList.toggle('completed')
  }
})


function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}