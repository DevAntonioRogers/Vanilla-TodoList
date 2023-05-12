const todoInput = document.querySelector('.todo-input')
const todobutton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todobutton.addEventListener('click', (e) => {
  e.preventDefault()
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
})