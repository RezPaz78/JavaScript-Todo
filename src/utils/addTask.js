import { taskList, taskInput, body } from "../components/nodes";
import { storageTaskInLS } from "./storageTasksInLS";
import { createListElement } from "../components/createListElement";
import { taskCounter } from "./taskCounter";

export const addTask = (e) => {
  e.preventDefault();
  if (taskInput.value === "") {
    alert("Please fill the task field !");
    return;
  }

  let li = createListElement(taskInput.value);

  taskList.appendChild(li);
  storageTaskInLS(taskInput.value);
  taskInput.value = "";

  let taskCount = taskCounter();
};
