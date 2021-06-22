// import { addTask } from "./utils/addTask";
// import { taskList, form, clearTask, filter } from "./utils/nodes";
import { loadAllEvents } from "./utils/eventLoader";

//Define UI vars
// let form = document.querySelector("#task-form");
// let taskList = document.querySelector(".collection");
// let clearTask = document.querySelector(".clear-task");
// let filter = document.querySelector("#filter");
// let taskInput = document.querySelector("#task");

//Invoke all events
loadAllEvents();

//All events function
// function loadAllEvents() {
//   document.addEventListener("DOMContentLoaded", getTasks);

//   //Add task Event
//   form.addEventListener("submit", addTask);

//   //Remove task
//   taskList.addEventListener("click", removeTask);

//   //Clear tasks
//   clearTask.addEventListener("click", clearTasks);

//   //Filter Tasks
//   filter.addEventListener("keyup", filterTasks);
// }

//Add Task
// function addTask(e) {

// }

//Remove Task
// function removeTask(e) {
//   if (e.target.parentElement.classList.contains("delete-item")) {
//     if (confirm("Are you sure?")) {
//       e.target.parentElement.parentElement.remove();
//       removeTasksFromLS(e.target.parentElement.parentElement);
//     }
//   }
// }

//Clear Tasks
// function clearTasks(e) {
//   e.preventDefault();
//   // taskList.innerHTML = '';

//   //faster way:
//   while (taskList.firstChild) {
//     // taskList.firstChild.remove();
//     taskList.removeChild(taskList.firstChild);
//   }
//   clearLS();
// }

// function filterTasks() {
//   let text = filter.value.toLowerCase();
//   document.querySelectorAll(".collection-item").forEach((task) => {
//     let content = task.textContent.toLowerCase();
//     if (content.indexOf(text) != -1) {
//       task.style.display = "block";
//     } else {
//       task.style.display = "none";
//     }
//   });
// }

//Store tasks in local storage
// function storageTaskInLS(task) {
//   let tasks;
//   if (localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }
//   tasks.push(task);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

//get tasks from local storage
// function getTasks() {
//   let tasks;
//   if (localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }
//   tasks.forEach((task) => {
//     let li = document.createElement("li");
//     li.className = "collection-item";
//     li.appendChild(document.createTextNode(task));
//     // li.textContent = taskInput.value;

//     let link = document.createElement("a");
//     link.className = "delete-item secondary-content";
//     link.innerHTML = '<i class="fa fa-remove"></i>';
//     // let icon = document.createElement('i');
//     // icon.className = 'fa fa-remove';
//     // link.appendChild(icon);

//     li.appendChild(link);
//     taskList.appendChild(li);
//   });
// }

//Remove Tasks from local storage
// function removeTasksFromLS(TaskItem) {
//   let tasks;
//   if (localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }
//   tasks.forEach((task, index) => {
//     if (TaskItem.textContent === task) {
//       tasks.splice(index, 1);
//     }
//   });
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

//Clear local storage
// function clearLS() {
//   localStorage.clear();
// }
