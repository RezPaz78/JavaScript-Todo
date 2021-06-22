import { addTask } from "./addTask";
import { taskList, form, clearTask, filter } from "./nodes";
import { removeTask } from "./removeTask";
import { getTasks } from "./getTasks";
import { clearTasks } from "./clearTasks";
import { filterTasks } from "./filterTasks";
import { editTask } from "./editTask";

export const loadAllEvents = () => {
  document.addEventListener("DOMContentLoaded", getTasks);

  //Add task Event
  form.addEventListener("submit", addTask);

  //Remove task
  taskList.addEventListener("click", removeTask);

  //Clear tasks
  clearTask.addEventListener("click", clearTasks);

  //Filter Tasks
  filter.addEventListener("keyup", filterTasks);

  //Edit Tasks
  taskList.addEventListener("click", editTask);
};
