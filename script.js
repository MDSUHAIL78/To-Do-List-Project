const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");

// Handle form submission
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get the task input value
  const taskInput = document.querySelector("#new-task");
  const taskValue = taskInput.value;

  // Create a new list item
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `<span class="task-text">${taskValue}</span>
  <button class="delete-btn">X</button>`;

  // Add the new task to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = "";
});

// Handle task deletion
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const taskItem = e.target.parentElement;
    taskItem.remove();
  }
});

// Handle task completion
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("task-text")) {
    e.target.parentElement.classList.toggle("completed");
  }
});
