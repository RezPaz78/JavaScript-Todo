export const editTask = (e) => {
  if (e.target.className === "panel__collection_item-controls--edit") {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    let oldValue = e.target.parentElement.parentElement.firstChild.textContent;

    let newTask = prompt("Enter the new value:", oldValue);
    if (newTask == "") {
      alert("Value Cannot be Empty!");
    } else if (newTask == null) {
      alert("Edit Aborted!");
    } else {
      tasks.forEach((task, index) => {
        if (oldValue === task) {
          tasks[index] = newTask;
        }
      });
      e.target.parentElement.previousSibling.textContent = newTask;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};
