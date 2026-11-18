

// DOM Selections
const taskList = document.querySelector('#taskList')





//? Event Listeners
// Event Delegation for the Parent Container
taskList.addEventListener('click', (event) => {
    // console.log(event)

    const li = event.target.closest('li')
    const trash = event.target.closest('.lucide-trash')

    if(!li) {
        return;
    }


    // Delete Button
    if(event.target === trash || event.target instanceof SVGPathElement){
        // li.remove()
        
        return;
    }
    

    //Checkbox getting checked
    const checkbox = li.querySelector('input[type="checkbox"]')

    if(checkbox.checked === true){
        checkbox.checked = false

    } else {
        checkbox.checked = true
    }
    

})






// Commented out
// Check for which specific element that was clicked on
//   if(event.target.classList.contains('lucide-trash') || event.target instanceof SVGPathElement ){
//         console.log('A delete icon was clicked on')
//     }