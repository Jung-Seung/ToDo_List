
const todoList = document.getElementById("todo-list");
const newItem = document.getElementById("new-item");
const addBtn = document.getElementById("add-btn");

let items = [];

function render() {
  todoList.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const li = document.createElement("li");
    li.textContent = item.text;
    if (item.done) {
      li.classList.add("done");
    } else {
      const doneBtn = document.createElement("button");
      doneBtn.textContent = "완료";
      doneBtn.addEventListener("click", () => {
        item.done = true;
        render();
      });
      li.appendChild(doneBtn);
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "삭제";
      deleteBtn.addEventListener("click", () => {
        items = items.filter((x) => x !== item);
        render();
      });
      li.appendChild(deleteBtn);
    }
    todoList.appendChild(li);
  }
}

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const text = newItem.value;
  if (text) {
    items.push({ text, done: false });
    newItem.value = "";
    render();
  }
});
