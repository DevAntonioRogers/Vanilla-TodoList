const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click', (e) => {
  e.preventDefault()
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')
  const newTodo = document.createElement('li')
  newTodo.innerText = 'hi'
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)
  console.log(newTodo)

  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>'
  completedButton.classList.add('complete-button')
  todoDiv.appendChild(completedButtom)

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
  deleteButton.classList.add('delete-button')
  todoDiv.appendChild(deleteButton)

  todoList.appendChild(todoDiv)
})