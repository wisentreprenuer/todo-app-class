import { taskList } from "./interact.js";


const taskUL = document.querySelector('#taskList')
const  taskInput = document.querySelector('#textAreaInput')
const completedElement = document.querySelector('#completed-tasks')
const totalElement = document.querySelector('#total-tasks')



let tasks = []
let numberOfTasks = tasks.length;
let numberOfCompletedTasks = taskUL.querySelectorAll('input[type="checkbox"]:checked').length;


console.log(numberOfCompletedTasks)
console.log(numberOfTasks)


totalElement.textContent = numberOfTasks;
completedElement.textContent = numberOfCompletedTasks;


taskInput.addEventListener('keyup', (event) => {

    if(event.key === "Enter"  && event.shiftKey === true){
        return;
    }

    if(event.key === "Enter"){

        if(taskInput.value.trim() === ""){
            return;

        }

        // const task = taskInput.value;
        const task = {
          text: taskInput.value,
          isCompleted: false
        }

        tasks.push(task)


        taskInput.value = "";

        //Create an element
        //Attach it to the UI
        updateUI()


        // console.log(tasks)
    }
})


function createTask(task, index){
    const taskId = `task-${index + 1}`
    const li = document.createElement('li')
    const completed = task.isCompleted


    if(completed === true){


      li.innerHTML = `

         <li id="${taskId}"
            class="w-100 px-4 py-2  bg-gray-100 rounded-2xl flex justify-between items-center gap-x-5 group/checkmark select-none cursor-pointer wrap-break-word"
          >
            <label class="flex">
              <input type="checkbox" name="" class="peer sr-only" checked/>
              <div
                class="customCheckBox w-5 h-5 border-2 flex justify-center items-center border-gray-300 rounded-full peer-checked:border-0 peer-checked:bg-[rgb(39,40,110)] text-white peer-checked:blur-[0.3px] transition-all duration-200 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check preview-icon opacity-0 group-has-checked/checkmark:opacity-100"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
            </label>

            <span class="grow group-has-checked/checkmark:text-gray-400 group-has-checked/checkmark:line-through"> ${task.text} </span>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trash preview-icon stroke-gray-300 opacity-0 group-has-checked/checkmark:opacity-100 group-hover/checkmark:opacity-100 transition-all duration-200 cursor-pointer hover:stroke-red-500 scale-95"
              >
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                <path d="M3 6h18" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
          </li>
      
      
      `

       //Delete Task
      li.querySelector('.lucide-trash').addEventListener('click', () => {

          li.classList.add('swipe-right')
          li.addEventListener('transitionend', ()=> {
            deleteTask(index)
          })
          
      })

    taskList.append(li)

      return;
    }

    li.innerHTML = `

         <li id="${taskId}"
            class="w-100 px-4 py-2  bg-gray-100 rounded-2xl flex justify-between items-center gap-x-5 group/checkmark select-none cursor-pointer wrap-break-word"
          >
            <label class="flex">
              <input type="checkbox" name="" class="peer sr-only" />
              <div
                class="customCheckBox w-5 h-5 border-2 flex justify-center items-center border-gray-300 rounded-full peer-checked:border-0 peer-checked:bg-[rgb(39,40,110)] text-white peer-checked:blur-[0.3px] transition-all duration-200 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check preview-icon opacity-0 group-has-checked/checkmark:opacity-100"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
            </label>

            <span class="grow group-has-checked/checkmark:text-gray-400 group-has-checked/checkmark:line-through"> ${task.text} </span>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trash preview-icon stroke-gray-300 opacity-0 group-has-checked/checkmark:opacity-100 group-hover/checkmark:opacity-100 transition-all duration-200 cursor-pointer hover:stroke-red-500 scale-95"
              >
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                <path d="M3 6h18" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
          </li>
    
    `

    //Delete Task
    li.querySelector('.lucide-trash').addEventListener('click', () => {

        li.classList.add('swipe-right')
        li.addEventListener('transitionend', ()=> {
           deleteTask(index)
        })
        
    })

    taskList.append(li)

}




function updateUI(){

    taskList.innerHTML = "";

    tasks.forEach( (task, index) => {
        createTask(task, index) 
    })

    
    numberOfTasks = tasks.length;
    numberOfCompletedTasks = taskUL.querySelectorAll('[checked]').length
    console.log(numberOfCompletedTasks)

    completedElement.textContent = numberOfCompletedTasks
    totalElement.textContent = numberOfTasks

}


function deleteTask(index){
    tasks = tasks.filter( (_, i) => {
        return i !== index;
    })

    updateUI()
}



export { taskInput, tasks, updateUI }