export const taskCounter = () => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    return 0;
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  return tasks.length;
};
