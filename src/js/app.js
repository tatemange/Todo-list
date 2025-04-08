// Sélection des éléments DOM
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');


let taskStructure = `
<li class="task-item">
    <span class="task-content">Nom de la tâche</span>
    <button class="complete-button">Terminer</button>
    <button class="delete-button">Supprimer</button>
</li>
`

class task {
    constructor(task) {
        task.addEventListener('click', (e) => {
            if(e.target.classList.contains('delete-button')) {
                this.deleteTask(task);
            } else if(e.target.classList.contains('complete-button')) {
                this.completeTask(task);
            }
        });
    }
    deleteTask(task){
        task.remove();
    }
    completeTask(task){
        task.classList.toggle('completed');
        const taskContent = task.querySelector('.task-content');
        if(task.classList.contains('completed')) {
            taskContent.style.textDecoration = 'line-through';
            taskContent.style.color = 'gray';
        } else {
            taskContent.style.textDecoration = 'none';
            taskContent.style.color = '';
        }
    }
}



function createHtmlElement (tag, attrs={}) {
    const element = document.createElement(tag);
    for(let [key, value] of Object.entries(attrs)) {
        if(key === 'text') 
            element.textContent = value;
        else if(key === 'html') 
            element.innerHTML = value;
        else if(key === 'class') 
            element.classList.add(value);
        else if(key === 'id') 
            element.id = value;
        else if(key === 'data') {
            for(let [dataKey, dataValue] of Object.entries(value)) 
                element.dataset[dataKey] = dataValue;
        }
        else 
            element.setAttribute(key, value);
    }
    return element;
}

