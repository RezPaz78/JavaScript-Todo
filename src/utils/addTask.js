import { taskList, taskInput } from "./nodes";
import { storageTaskInLS } from "./storageTasksInLS";
import { createListElement } from "./createListElement";
import { taskCounter } from "./taskCounter";
import axios from "axios";

export const addTask = (e) => {
  e.preventDefault();
  if (taskInput.value === "") {
    alert("Please fill the task field !");
    return;
  }

  let li = createListElement(taskInput.value)

  taskList.appendChild(li);
  storageTaskInLS(taskInput.value);
  taskInput.value = "";

  let taskCount = taskCounter();

  if (taskCount === 5) {
    axios.get("/fa/v1/video/video/mostViewedVideos").then(res => console.log(res))
  } 
};
