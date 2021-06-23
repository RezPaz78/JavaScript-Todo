import { taskList, taskInput, body } from "./nodes";
import { storageTaskInLS } from "./storageTasksInLS";
import { createListElement } from "./createListElement";
import { taskCounter } from "./taskCounter";
import axios from "axios";
import { playerCreator } from "./videoPlayer";

export const addTask = (e) => {
  e.preventDefault();
  if (taskInput.value === "") {
    alert("Please fill the task field !");
    return;
  }

  let li = createListElement(taskInput.value);

  taskList.appendChild(li);
  storageTaskInLS(taskInput.value);
  taskInput.value = "";

  let taskCount = taskCounter();

  if (taskCount % 5 === 0) {
    axios
      .get("http://api.aparat.com/fa/v1/video/video/mostViewedVideos")
      .then((res) => {
        const result = res.data.data;
        const sortedResult = result.slice().sort((a, b) => {
          const aVisitCount = a.attributes.visit_cnt;
          const bVisitCount = b.attributes.visit_cnt;
          return bVisitCount - aVisitCount;
        });
        const mostVisited = sortedResult[0].attributes;
        playerCreator(mostVisited.preview_src);
      });
  }
};
