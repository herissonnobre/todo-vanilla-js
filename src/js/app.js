document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    // Try to load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    //
    tasks.forEach(task => {
        createTaskElement(task);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText === '') return;

        const newTask = {
            text: taskText,
            completed: false,
            id: Date.now(), // unique id
        };

        tasks.push(newTask);
        saveTasks();
        createTaskElement(newTask);

        input.value = '';
        input.focus();
    });

    function createTaskElement(task) {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);

        const span = document.createElement('span');
        span.textContent = task.text;
        if(span.completed) {
            li.classList.add('completed');
        }

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✖';
        removeBtn.classList.add('remove-btn');

        // Mark the task as complete on the click of text
        span.addEventListener('click', () => {
            span.classList.toggle('completed');
            task.completed = !task.completed;
            saveTasks();
        });

        // Remove the task on the click of the remove button
        removeBtn.addEventListener('click', () => {
            list.removeChild(li);
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        list.appendChild(li);
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})