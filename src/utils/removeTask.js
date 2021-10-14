import { removeTasksFromLS } from "./removeTasksFromLS";

export const removeTask = (e) => {
  if (e.target.classList.contains("panel__collection_item-controls--delete")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
      removeTasksFromLS(e.target.parentElement.parentElement);
    }
  }
};
