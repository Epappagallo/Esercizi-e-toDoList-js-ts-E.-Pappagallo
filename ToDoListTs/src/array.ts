// Variables and Constants
const darkText = document.getElementById("noteText") as HTMLTextAreaElement | null;
const darkList = document.getElementsByClassName("darkList")[0] as HTMLUListElement | undefined;
const darkButton = document.getElementById("inputButton") as HTMLButtonElement | null;
const darkArray: HTMLLIElement[] = [];
let idCounter = 0;

// Functions

function renderArray(): void {
    if (!darkList) return;

    darkList.innerHTML = "";
    darkArray.forEach((item) => {
        darkList.appendChild(item);
    });
    console.log(darkList);
}

function addTaskToArray(): void {
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
    
    darkArray.push(subEl);
    darkText.value = "";
    renderArray();
    console.log(darkArray);
}

function deleteTask(id: number): void {
    const elToDelete = document.getElementById(`subEl-${id}`) as HTMLLIElement | null;
    if (elToDelete) {
        const index = darkArray.indexOf(elToDelete);
        if (index > -1) {
            darkArray.splice(index, 1);
            renderArray();
            console.log(darkArray);
        }
    }
}

function checkTask(id: number): void {
    const elToCheck = document.getElementById(`checkbox-${id}`) as HTMLInputElement | null;
    if (elToCheck) {
        const li = elToCheck.parentElement as HTMLLIElement;
        if (elToCheck.checked) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.5";
            if (darkList) {
                darkList.removeChild(li);
                darkList.appendChild(li);
            }
        } else {
            li.style.textDecoration = "none";
            li.style.opacity = "1";
        }
    }
    console.log(darkArray);
    renderArray();
}

// Events
if (darkButton) {
    darkButton.addEventListener("click", () => {
        addTaskToArray();
    });
}

// This export statement prevents the "Cannot redeclare block-scoped variable" error
export {};