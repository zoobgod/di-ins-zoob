const tasks = [];

function addTask(event) {
  event.preventDefault();
  const todoInput = document.getElementById("todo-input");
  if (todoInput.value.trim() !== "") {
    const newTask = {
      taskName: todoInput.value.trim(),
      isCompleted: false
    };
    tasks.push(newTask);
    const listTasks = document.querySelector(".listTasks");
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    const taskLabel = document.createElement("label");
    taskLabel.textContent = newTask.taskName;
    const taskDelete = document.createElement("button");
    taskDelete.innerHTML = '<i class="fa fa-times"></i>';
    taskDelete.addEventListener("click", () => {
      const taskIndex = tasks.indexOf(newTask);
      tasks.splice(taskIndex, 1);
      taskContainer.remove();
    });
    taskContainer.appendChild(taskCheckbox);
    taskContainer.appendChild(taskLabel);
    taskContainer.appendChild(taskDelete);
    listTasks.appendChild(taskContainer);
    todoInput.value = "";
    todoInput.focus();
    if (tasks.length === 5) {
      clearInterval(intervalId);
    }
  }
}

const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", addTask);

let intervalId = setInterval(() => {
  console.log("Hello World");
}, 2000);
