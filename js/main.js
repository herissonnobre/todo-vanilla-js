import {addTask, clearCompleted} from "./modules/todo.js";
import {renderTasks} from "./modules/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();

  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const btnClear = document.getElementById('clear-completed');

  const filterButtons = document.querySelectorAll(".todo-filters__button");

  function setActiveFilter(activeId) {
    filterButtons.forEach(btn =>
      btn.classList.remove("todo-filters__button--active")
    );

    const activeBtn = document.getElementById(activeId);
    if (activeBtn) {
      activeBtn.classList.add("todo-filters__button--active");
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    addTask(text);
    renderTasks();

    input.value = "";
    input.focus();
  });

  document.getElementById("filter-all").addEventListener("click", () => {
    setActiveFilter("filter-all");
    renderTasks("all");
  });

  document.getElementById("filter-active").addEventListener("click", () => {
    setActiveFilter("filter-all");
    renderTasks('active');
  });

  document.getElementById("filter-completed").addEventListener("click", () => {
    const filter = "completed";
      renderTasks(filter);
  });

  btnClear.addEventListener('click', () => {
    clearCompleted();
    renderTasks();
  });
});
