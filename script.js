document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        listItem.addEventListener('click', function () {
            listItem.classList.toggle('completed');
        });

        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task!');
    }
}
