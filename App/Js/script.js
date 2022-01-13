let input = document.getElementById('taskdata');
let addbtn = document.getElementById('addbtn');
let noTasks = document.getElementById('noTasks');
let tasks = document.getElementById('tasks');
let model = document.getElementById('model');
let show = document.getElementById('show');
let close = document.getElementById('close');

let showModel = () => {
    model.classList.toggle('display');
}

show.addEventListener('click', showModel);
close.addEventListener('click', showModel);

let showNoTasks = () => {
    if (tasks.childElementCount == 0) {
        noTasks.classList.remove('none');
    }
}

let addTask = () => {
    let task = input.value;
    if (task.trim() == 0 || task.length < 2 || task.length > 30) {
        alert("you Must enter Valid Data")
    } else {
        noTasks.classList.add('none');
        tasks.innerHTML += `<div class='task alert alert-info'> ${task}
        <button  class='delete float-right btn btn-danger'> Delete </button>
        </div>`;
        showModel();
    }
    tasks.addEventListener('click', function (ts) {
        if (ts.target.classList.contains('task')) {
            ts.target.classList.toggle('checked');
        }
    })
    input.value = "";
}

addbtn.addEventListener('click', addTask);

let deleteTask = function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        showNoTasks();
    }
}

document.addEventListener('click', deleteTask)

/* =========
   dark-mode */

let button = document.getElementById('button');
let body = document.querySelector('body');
let taskHeader = document.getElementById('task-Header')
let modelCard = document.getElementById('modelCard')

button.onclick = () => {
    if (body.classList[0] == 'dark') {
        body.classList.remove('dark')
        taskHeader.classList.remove('taskHeader')
        modelCard.classList.remove('dark')
    } else {
        body.classList.add('dark')
        taskHeader.classList.add('taskHeader')
        modelCard.classList.add('dark')
    }
}