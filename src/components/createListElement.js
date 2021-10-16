export const createListElement = (text) => {
  const li = document.createElement("li");
  li.className = "panel__collection_item";

  const valueSpan = document.createElement("span");
  valueSpan.className = "panel__collection_item-value";
  valueSpan.textContent = text;

  const span = document.createElement("span");
  span.className = "panel__collection_item-controls";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "panel__collection_item-controls--delete";
  deleteBtn.innerHTML = "Delete";

  const editBtn = document.createElement("button");
  editBtn.className = "panel__collection_item-controls--edit";
  editBtn.innerHTML = "Edit";

  span.appendChild(editBtn);
  span.appendChild(deleteBtn);

  li.appendChild(valueSpan);
  li.appendChild(span);

  return li;
};
