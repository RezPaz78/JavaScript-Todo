import { taskList } from "../components/nodes";
import { clearLS } from "./clearLocalStorage";

export const clearTasks = (e) => {
  e.preventDefault();

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearLS();
};
