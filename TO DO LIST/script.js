let taskList = document.getElementById('taskList');
let taskInput = document.getElementById('taskInput');

function addTask() {
    let taskValue = taskInput.value.trim();
    if (taskValue !== '') {
        let taskItem = document.createElement('li');
        taskItem.textContent = taskValue;
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskItem.remove();
        };
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}