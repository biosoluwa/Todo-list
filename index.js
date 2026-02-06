let tasks = []
const display = document.getElementById('display')
document.getElementById('total-tasks').innerHTML = 'Total tasks: ' + tasks.length
document.getElementById('completed-tasks').innerHTML = 'Completed tasks: ' + 0

document.addEventListener('click', function(e){
    if(e.target.id === 'add'){
        addTask()
    }else if(e.target.type === 'checkbox'){
        toggleCompletedStatus(e.target.id)
    }else if(e.target.classList.contains('delete-btn')){
        deleteTask(e.target.closest('li').id)
    }
})

function addTask(){
    const input = document.getElementById('input')
    if(input.value !== '') {
            const newTask = {
            text: input.value,
            id: Date.now(),
            isCompleted: false
        } 
         tasks.push(newTask)
          displayTask(newTask)
    }
        input.value = ''
        document.getElementById('total-tasks').textContent = 'Total Tasks: ' + tasks.length
}

function displayTask(newTask){
    const listItems = document.createElement('li')
    const checkBox = document.createElement('input')
    const label = document.createElement('label')
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    checkBox.type = 'checkbox'
     
    listItems.id = newTask.id
    checkBox.id = newTask.id
    label.htmlFor = newTask.id
    label.appendChild(document.createTextNode(newTask.text))
    deleteBtn.textContent = `Delete`
    listItems.appendChild(checkBox)
    listItems.appendChild(label)
    listItems.appendChild(deleteBtn)
    display.appendChild(listItems)
}

function toggleCompletedStatus(id){
 const taskObject = tasks.find(function(task){
    if (task.id === Number(id)){
        return task.id === Number(id)
    }
  })
    taskObject.isCompleted = !taskObject.isCompleted
    updateCompletedTasks()

      
}

function updateCompletedTasks(){
 const completedTasksNumber =  tasks.filter(function(task){
        return task.isCompleted
    }).length
    document.getElementById('completed-tasks').innerHTML = "Completed Tasks: " + completedTasksNumber
      
}
function deleteTask(id){
  tasks = tasks.filter(function(task){
      return task.id !== Number(id)
   }) 
   console.log(tasks)
let listItem = document.getElementById(id)
listItem.remove()
document.getElementById('total-tasks').textContent = 'Total Tasks: ' + tasks.length
updateCompletedTasks()
}
