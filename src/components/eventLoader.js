import { taskList, form, clearTask, filter } from "./nodes";
import { addTask } from "../utils/addTask";
import { removeTask } from "../utils/removeTask";
import { getTasks } from "../utils/getTasks";
import { clearTasks } from "../utils/clearTasks";
import { filterTasks } from "../utils/filterTasks";
import { editTask } from "../utils/editTask";

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
