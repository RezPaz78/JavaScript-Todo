import { filter } from "../components/nodes";

export const filterTasks = () => {
  const text = filter.value.toLowerCase();
  document.querySelectorAll(".panel__collection_item").forEach((task) => {
    const content = task.firstChild.textContent.toLowerCase();
    if (content.indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
};
