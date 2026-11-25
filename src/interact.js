import { taskInput, tasks, updateUI } from "./handler.js"

// DOM Selections
const taskList = document.querySelector('#taskList')
const addBtn = document.querySelector('#addTaskBtn')
const addTaskSection = document.querySelector('#addTaskPopup')



//? Event Listeners
// Event Delegation for the Parent Container
taskList.addEventListener('click', (event) => {

    const li = event.target.closest('li')
    const trash = event.target.closest('.lucide-trash')

    if(!li) {
        return;
    }


    // Delete Button
    if(event.target === trash || event.target instanceof SVGPathElement){
    
        return;
    }
    

    //Checkbox getting checked
    const checkbox = li.querySelector('input[type="checkbox"]')

    if(checkbox.checked === true){
        checkbox.checked = false

    } else {
        checkbox.checked = true
    }

    const index = Number(li.id.split('-')[1]) - 1
    tasks[index].isCompleted = !tasks[index].isCompleted

    taskList.dispatchEvent(new Event('change', { bubbles: true }))

    updateUI()

})

//task-1

taskList.addEventListener('change', () => {
    document.querySelector('#completed-tasks').textContent = taskList.querySelectorAll('input[type="checkbox"]:checked').length

    // console.log(event.target)
    // const li = event.target.closest('li')
    // console.log(li)

    // const index = Number(li.id.split('-')[1]) - 1

    // tasks[index].isCompleted = !tasks[index].isCompleted

})

addBtn.addEventListener('click', () => {
    addTaskSection.classList.toggle('hidden')
    addBtn.classList.toggle('rotate-45')

    if(!addTaskSection.classList.contains('hidden')){
        taskInput.focus()
    }
})



document.addEventListener('click', (event) => {
    // console.log(event.target)

    if(addTaskSection.contains(event.target) || addBtn.contains(event.target)){
       return;
    }

     addTaskSection.classList.add('hidden')
     addBtn.classList.toggle('rotate-45')
})




// Commented out
// Check for which specific element that was clicked on
//   if(event.target.classList.contains('lucide-trash') || event.target instanceof SVGPathElement ){
//         console.log('A delete icon was clicked on')
//     }


export { taskList }