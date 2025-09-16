const darkArray = new Array();
const darkText = document.getElementById("noteText");
const darkList = document.getElementsByClassName("list");
const darkButton = document.getElementById("inputButton");
let idCounter = 0;

//Funzioni

function renderArray() {
    darkList[0].innerHTML = "";
    darkArray.forEach((item) => {
        darkList[0].appendChild(item);
    });
    console.log(darkList);
};

function addTaskToArray() {
    const subEl = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const checkbox = document.createElement("input");
    idCounter++;
    const currentId = idCounter;
    checkbox.type = "checkbox";
    checkbox.id = `checkbox-${currentId}`;
    checkbox.className = "checkbox";
    checkbox.addEventListener("click", function () {
        checkTask(currentId);
    });
    deleteBtn.innerHTML = "X";
    deleteBtn.id = `deleteBtn-${currentId}`;
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", function () {
        deleteTask(currentId);
    });
    subEl.textContent = darkText.value;
    subEl.id = `subEl-${currentId}`;
    subEl.appendChild(deleteBtn);
    subEl.prepend(checkbox);
    darkArray.push(subEl);
    darkText.value = "";
    renderArray();
    console.log(darkArray);
};

function deleteTask(id) {
    const elToDelete = document.getElementById(`subEl-${id}`);
    const index = darkArray.indexOf(elToDelete);
    if (index > -1) {
        darkArray.splice(index, 1);
        renderArray();
        console.log(darkArray);
    }
};

function checkTask(id) {
    const elToCheck = document.getElementById(`checkbox-${id}`);
    const li = elToCheck.parentElement;
    if (elToCheck.checked) {
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.5";
        darkList[0].removeChild(li);
        darkList[0].appendChild(li);
    } else {
        li.style.textDecoration = "none";
        li.style.opacity = "1";
    }
    console.log(darkArray);
    renderArray();
}

//Eventi    
darkButton.addEventListener("click", () => {
    addTaskToArray();
    renderArray();
});

