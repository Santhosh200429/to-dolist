function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (task === "") return;

    let list = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("a");
    deleteBtn.textContent = " ❌";
    deleteBtn.href = "#";
    deleteBtn.onclick = function () {
        list.removeChild(li);
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
}