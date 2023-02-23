document.addEventListener("DOMContentLoaded", () => {
  // your code here



  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTask = document.createElement("li");
    const taskInput = document.getElementById("new-task-description");
    newTask.innerText = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = "";
  });
});
