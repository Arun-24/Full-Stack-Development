function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("task-checkbox");

  const span = document.createElement("span");
  span.textContent = taskText;

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.classList.add("completed");
    } else {
      span.classList.remove("completed");
    }
    updateProgress();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
    updateProgress();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
  updateProgress();
}

function updateProgress() {
  const checkboxes = document.querySelectorAll(".task-checkbox");
  const completed = Array.from(checkboxes).filter(cb => cb.checked);

  const percent = checkboxes.length === 0 ? 0 : Math.round((completed.length / checkboxes.length) * 100);

  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").textContent = `${percent}% completed`;
}
