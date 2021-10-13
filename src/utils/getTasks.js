import { taskList } from "../components/nodes";
import { createListElement } from "../components/createListElement";

export const getTasks = () => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task) => {
    let li = createListElement(task)
    taskList.appendChild(li);
  });
};
