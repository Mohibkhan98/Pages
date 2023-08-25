// Get references to elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const editButton = document.getElementById('edit-button');



// Add task to local storage and refresh the list
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('task');
    const task = taskInput.value.trim();

    if (task !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        taskInput.value = '';
        loadTasks();
    }
});


// Load tasks from local storage and display them
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task}</span>
                        <button class="edit-btn" data-index="${index}">Edit</button>
                        <button class="delete-btn" data-index="${index}">Delete</button>`;
        taskList.appendChild(li);
    });
}
// Handle click events on the task list
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-btn')) {
        // Get the index of the task to edit
        const index = parseInt(event.target.getAttribute('data-index'));
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        if (index >= 0 && index < tasks.length) {
            const taskToEdit = tasks[index];
            const taskInput = document.getElementById('task');
            
            // Populate the input field with the task text
            taskInput.value = taskToEdit;
            
            // Display the Update button and store the index of the task being edited
            editButton.style.display = 'inline';
            editButton.setAttribute('data-index', index);
        }
    } else if (event.target.classList.contains('delete-btn')) {
        // Handle delete task functionality
        const index = parseInt(event.target.getAttribute('data-index'));
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            loadTasks();
        }
    }
});

// Handle click event on the Update button
editButton.addEventListener('click', function() {
    const index = parseInt(editButton.getAttribute('data-index'));
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskInput = document.getElementById('task');
    
    if (index >= 0 && index < tasks.length) {
        // Update the task in local storage
        tasks[index] = taskInput.value.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        // Clear the input field and hide the Update button
        taskInput.value = '';
        editButton.style.display = 'none';
        loadTasks();
    }
});

// Initial load of tasks from local storage
loadTasks();
