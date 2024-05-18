document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-items');

    // Add event listener to form for adding new tasks
    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    // Function to add new task
    function addTodoItem(text) {
        const row = document.createElement('tr');

        // Task description column
        const descCol = document.createElement('td');
        descCol.textContent = text;

        // Done column
        const doneCol = document.createElement('td');
        const doneCheckbox = document.createElement('input');
        doneCheckbox.type = 'checkbox';
        doneCheckbox.classList.add('done-checkbox');
        doneCol.appendChild(doneCheckbox);

        // Delete column
        const deleteCol = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteCol.appendChild(deleteBtn);

        // Append columns to row
        row.appendChild(descCol);
        row.appendChild(doneCol);
        row.appendChild(deleteCol);

        // Append row to the table
        todoList.appendChild(row);

        // Add event listener to delete button
        deleteBtn.addEventListener('click', function () {
            row.remove();
        });

        // Add event listener to checkbox to mark task complete
        doneCheckbox.addEventListener('change', function () {
            if (doneCheckbox.checked) {
                descCol.style.textDecoration = 'line-through';
            } else {
                descCol.style.textDecoration = 'none';
            }
        });
    }

    // Add some default tasks
    const defaultTasks = ['Buy groceries', 'Attend a Seminar', 'Take an online course', 'Buy a book', 'Finish my project', 'Call mom'];
    defaultTasks.forEach(task => addTodoItem(task));
});
