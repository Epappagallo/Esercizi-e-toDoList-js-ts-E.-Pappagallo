// Variabili e Costanti
const darkMap = new Map();
const darkText = document.getElementById("noteText");
const darkList = document.getElementsByClassName("darkList")[0];
const darkButton = document.getElementById("inputButton");
let idCounter = 0;
// Funzioni
function renderMap() {
    if (!darkList)
        return;
    darkList.innerHTML = "";
    darkMap.forEach((item) => {
        darkList.appendChild(item);
    });
    console.log(darkList);
}
;
function addTaskToMap() {
    if (!darkText || darkText.value.trim() === "") {
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
    checkbox.addEventListener("click", () => checkTask(currentId));
    deleteBtn.innerHTML = "X";
    deleteBtn.id = `deleteBtn-${currentId}`;
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", () => deleteTask(currentId));
    subEl.textContent = darkText.value;
    subEl.id = `subEl-${currentId}`;
    subEl.appendChild(deleteBtn);
    subEl.prepend(checkbox);
    darkMap.set(currentId, subEl);
    darkText.value = "";
    renderMap();
    console.log(darkMap);
}
;
function deleteTask(id) {
    if (darkMap.has(id)) {
        darkMap.delete(id);
        renderMap();
        console.log(darkMap);
    }
}
;
function checkTask(id) {
    const li = darkMap.get(id);
    if (li) {
        const checkbox = li.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.5";
            // Reorder the list by moving the element to the end of the Map
            const tempValue = darkMap.get(id);
            darkMap.delete(id);
            darkMap.set(id, tempValue);
        }
        else {
            li.style.textDecoration = "none";
            li.style.opacity = "1";
        }
    }
    renderMap();
    console.log(darkMap);
}
// Eventi
if (darkButton) {
    darkButton.addEventListener("click", addTaskToMap);
}
export {};
