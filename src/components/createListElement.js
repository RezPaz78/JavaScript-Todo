export const createListElement = (text) => {
    let li = document.createElement("li");
    li.className = "collection-item";

    let value = document.createElement("span")
    value.className = "task-value"

    let span = document.createElement("span");
  span.className = "task-controls";

    let link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';

    let edit = document.createElement("i");
    edit.className = "fas fa-edit";
    
    span.appendChild(edit);
    span.appendChild(link);

    li.appendChild(span);
    li.appendChild(value);

    value.textContent = text;

    return li;
}