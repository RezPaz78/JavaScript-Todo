import { taskList } from "./nodes";
import { clearLS } from "./clearLocalStorage";

export const clearTasks = (e) => {
  e.preventDefault();
  // taskList.innerHTML = '';

  //faster way:
  while (taskList.firstChild) {
    // taskList.firstChild.remove();
    taskList.removeChild(taskList.firstChild);
  }
  clearLS();
};
