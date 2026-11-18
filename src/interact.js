

// DOM Selections
const taskList = document.querySelector('#taskList')

taskList.closest('')








// Event Listeners
taskList.addEventListener('click', (event) => {
    // console.log(event.target)

    const li = event.target.closest('li')
    
    if(!li) return;

    const checkbox = li.querySelector('input[type="checkbox]')
    

})