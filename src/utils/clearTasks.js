import { taskList } from "../components/nodes";
import { clearLS } from "./clearLocalStorage";

export const clearTasks = (e) => {
  e.preventDefault();

  //faster way:
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearLS();
};
