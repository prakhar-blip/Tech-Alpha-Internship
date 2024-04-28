const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// Add new todos
const generateTemplate = (todo) => {
  const todoItem = document.createElement("li");
  todoItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
  todoItem.innerHTML = `
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  `;
  list.appendChild(todoItem);
};

// Delete todos
const deleteTodo = (todoItem) => {
  todoItem.remove();
};

// Filter todos
const filterTodos = (term) => {
  Array.from(list.children).forEach((todo) => {
    const todoText = todo.textContent.toLowerCase();
    const isVisible = todoText.includes(term);
    todo.classList.toggle("filtered", !isVisible);
  });
};

// Event listeners
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo) {
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    deleteTodo(e.target.parentElement);
  }
});

search.addEventListener("input", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
