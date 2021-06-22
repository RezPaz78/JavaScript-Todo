export const filterTasks = () => {
  let text = filter.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach((task) => {
    let content = task.textContent.toLowerCase();
    if (content.indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
