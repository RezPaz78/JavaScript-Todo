import { removeTasksFromLS } from "./removeTasksFromLS";

export const removeTask = (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.parentElement.remove();
      removeTasksFromLS(e.target.parentElement.parentElement.parentElement);
    }
  }
};
