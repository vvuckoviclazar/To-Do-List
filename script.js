"use strict";

const addButton = document.querySelector(".addBtn");
const input = document.querySelector(".input");
const taskList = document.querySelector(".taskList");
const form = document.querySelector("form");

function createTask() {
  const inputText = document.createElement("li");

  const uniqueID = crypto.randomUUID();
  inputText.id = uniqueID;

  inputText.classList.add("li");

  inputText.innerHTML = getTask(input.value);

  taskList.appendChild(inputText);

  input.value = "";

  const removeBtn = inputText.querySelector(".removeBtn");
  const checkBtn = inputText.querySelector(".checkBtn");

  removeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputText.remove();
  });

  checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputText.classList.toggle("crossed");
  });
}

function getTask(text) {
  return `${text} <div class="checkDiv"><button class="checkBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="check">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
</svg>
</button> <button class="removeBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="trash">
  <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
</svg>
</button></div>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  createTask();
});
