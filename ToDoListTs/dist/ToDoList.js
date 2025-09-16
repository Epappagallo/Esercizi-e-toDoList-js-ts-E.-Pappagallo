// Variabili e Costanti programmazione funzionale
const list = document.getElementsByClassName("darkList")[0];
const subsList = new Array();
const darkText = document.getElementById("noteText");
const darkButton = document.getElementById("inputButton");
let idCounter = 0;
//Funzioni
function addTask() {
    if (!darkText || darkText.value.trim() === "" || !list) {
        return;
    }
    const subEl = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const checkbox = document.createElement("input");
    idCounter++;
    const currentId = idCounter;
    checkbox.type = "checkbox";
    checkbox.id = `checkbox-${currentId}`;
    checkbox.className = "checkbox";
    checkbox.addEventListener("click", () => {
        checkTask(currentId);
    });
    deleteBtn.innerHTML = "X";
    deleteBtn.id = `deleteBtn-${currentId}`;
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", () => {
        deleteTask(currentId);
    });
    subEl.textContent = darkText.value;
    subEl.id = `subEl-${currentId}`;
    subEl.appendChild(deleteBtn);
    subEl.prepend(checkbox);
    list.appendChild(subEl);
    subsList.push(subEl);
    darkText.value = "";
    console.log(subsList);
}
;
function deleteTask(id) {
    const elToDelete = document.getElementById(`subEl-${id}`);
    if (elToDelete) {
        if (list) {
            list.removeChild(elToDelete);
        }
        console.log(subsList);
    }
}
;
function checkTask(id) {
    const elToCheck = document.getElementById(`checkbox-${id}`);
    if (elToCheck) {
        const li = elToCheck.parentElement;
        if (elToCheck.checked) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.5";
            if (list) {
                list.removeChild(li);
                list.appendChild(li);
            }
        }
        else {
            li.style.textDecoration = "none";
            li.style.opacity = "1";
        }
    }
}
//Eventi
if (darkButton) {
    darkButton.addEventListener("click", addTask);
}
export {};
