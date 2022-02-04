// Add task

let addform = document.forms["add-task"];

addform.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent the default action of a form
  let value = addform.querySelector('input[type="text"]').value;
  if (value !== "") {
    let li = document.createElement("li");
    let taskName = document.createElement("span");
    let delteBtn = document.createElement("i");
    addform.reset();
    delteBtn.className= "fa fa-trash";
    taskName.textContent = value;

    // Adding Classes

    li.classList.add("list-group-item");
    taskName.classList.add("task-name");
    delteBtn.classList.add("fa-trash");

    //Appending to child

    li.appendChild(taskName);
    li.appendChild(delteBtn);
    list.appendChild(li);
  } else {
    alert("Add a Task");
  }
});

// Remove Task From List
let list = document.querySelector("#task-list ul");

list.addEventListener("click", function (e) {
  if (e.target.className == "fa fa-trash") {
    let li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// Filter Task

let searchInput = document.forms["search-task"].querySelector("input");
searchInput.addEventListener("keyup", function (e) {
  let term = e.target.value.toLowerCase();
  let tasks = list.getElementsByTagName("li");

  Array.from(tasks).forEach(function (task) {
    let titleTask = task.firstElementChild.textContent;

    if (titleTask.toLowerCase().indexOf(term) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
});
