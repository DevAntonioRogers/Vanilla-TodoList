const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

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

  .todoList.addEventListener('click', (e) => {
    const item = e.target

    if (item.classList[0] === 'delete-btn') {
      const todo.
    }
  })