function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var li = document.createElement("li");
    li.innerHTML =
      '<span class="task-text">' +
      taskInput.value +
      "</span>" +
      '<input type="text" class="edit-input">' +
      '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>' +
      '<button class="edit-btn" onclick="editTask(this)">Edit</button>';
    // Buttons are in this order due to Float Right
    taskList.appendChild(li);
    taskInput.value = "";
    var editInput = li.querySelector(".edit-input");
    editInput.style.display = "none";
  }
}

function editTask(button) {
  var li = button.parentElement;
  var taskText = li.querySelector(".task-text");
  var editInput = li.querySelector(".edit-input");

  if (editInput.style.display === "none" || !editInput.value.trim()) {
    // If the edit input is hidden or empty, show it and hide the task text
    taskText.style.display = "none";
    editInput.value = taskText.textContent;
    editInput.style.display = "inline-block";
  } else {
    // If the edit input is visible and not empty, update the task text and hide the input

    taskText.textContent = editInput.value;
    taskText.style.display = "inline-block";
    editInput.style.display = "none";
  }
}

function deleteTask(button) {
  var li = button.parentElement;
  li.remove();
}
