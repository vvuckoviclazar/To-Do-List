"use strict";

const addButton = document.querySelector(".addBtn");
const input = document.querySelector(".input");
const taskList = document.querySelector(".taskList");
const form = document.querySelector("form");

let inputValue;

input.addEventListener("input", (e) => {
  inputValue = e.target.value;
});

function todoCreator(textInput) {
  let id = crypto.randomUUID();
  let text = textInput;

  const getText = () => {
    return text;
  };

  const getId = () => {
    return id;
  };

  return { getId, getText };
}

function todoManager() {
  let taskData = [];

  const addTask = (task) => {
    taskData.push(task);
  };

  const setTasks = (tasks) => {
    taskData = tasks;
  };

  const getTasks = () => {
    return taskData;
  };

  function addTodo(todo) {
    taskData.push(todo);
  }

  return { addTask, taskData, addTodo, setTasks, getTasks };
}

//filterocati na osnovu ID-a
function removeTask(taskElement) {
  taskData = taskData.filter((task) => task !== taskElement);
}

const creator = todoCreator();
const manager = todoManager();

function createTaskElement(id, text) {
  const inputText = document.createElement("li");
  inputText.id = id;
  inputText.classList.add("li");
  inputText.innerHTML = `${text} <div class="checkDiv"><button class="checkBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="check">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
</svg>
</button> <button class="removeBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="trash">
  <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
</svg>
</button></div>`;
  return inputText;
}

function getTask() {
  const removeBtn = document.querySelector(".removeBtn");
  const checkBtn = document.querySelector(".checkBtn");

  removeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskElement.remove();
    manager.removeTask(taskElement);
  });

  checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskElement.classList.toggle("crossed");
  });
}

function getTaskText(text) {
  return;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const taskText = inputValue;
  const task = todoCreator(taskText);
  manager.addTask(task);
  taskList.innerHTML = "";

  manager.getTasks().forEach((task) => {
    const taskElement = createTaskElement(task.getId(), task.getText());
    taskList.appendChild(taskElement);
  });
  console.log(manager.getTasks());
  getTask();
});
