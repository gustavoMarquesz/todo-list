const addTaskButton = document.querySelector(".submit-button");
const inputName = document.querySelector('.name-input');
const inputIr = document.querySelector('.ir-input');
const divNewTaks = document.querySelector('.new-tasks');

addTaskButton.addEventListener('click', () => addTask())
inputName.addEventListener('change', () => inputHandler())


const inputHandler = () =>{
    if(inputName.value.trim().length > 0){
        inputName.classList.remove('error')
    }
}

var addTask = () =>{
    if (inputName.value.trim().length > 0){
        const newName = document.createElement('div');
        newName.classList.add('nameItem');
        newName.addEventListener('click', handleClick);
    
        const nameContent = document.createElement('p');
        newName.appendChild(nameContent);
        nameContent.innerText = inputName.value;
        
       
        const textContent = document.createElement('p');
        textContent.innerText = inputIr.value;
        newName.appendChild(textContent)
    
        const deleteItem = document.createElement('i');
        deleteItem.classList.add('far');
        deleteItem.classList.add('fa-trash-alt');
        textContent.appendChild(deleteItem);
        deleteItem.addEventListener('click', () =>{newName.remove()});

    
        divNewTaks.appendChild(newName);

        inputName.value ="";
        inputIr.value = "";
    }
    
    else{
        inputName.classList.add('error');
    }
}

function handleClick (newName) {
    newName.currentTarget.classList.toggle('completed');
}




