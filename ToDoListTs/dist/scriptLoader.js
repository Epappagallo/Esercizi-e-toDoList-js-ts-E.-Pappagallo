"use strict";
// File: scriptLoader.ts
function init() {
    const controlsDiv = document.getElementById("controls");
    const currentScriptSpan = document.getElementById("current-script-name");
    const scripts = {
        "load-todolist": "dist/ToDoList.js",
        "load-array": "dist/array.js",
        "load-map": "dist/map.js",
    };
    if (controlsDiv) {
        controlsDiv.addEventListener("click", (event) => {
            const buttonId = event.target.id;
            const scriptName = scripts[buttonId];
            if (scriptName) {
                loadScript(scriptName);
                if (currentScriptSpan) {
                    currentScriptSpan.textContent = scriptName;
                }
            }
        });
    }
    function loadScript(src) {
        const existingScript = document.getElementById("dynamic-script");
        if (existingScript) {
            existingScript.remove();
        }
        const newScript = document.createElement("script");
        newScript.id = "dynamic-script";
        newScript.type = "module";
        newScript.src = src;
        document.body.appendChild(newScript);
        console.log(`Caricato lo script: ${src}`);
    }
    loadScript("dist/ToDoList.js");
    if (currentScriptSpan) {
        currentScriptSpan.textContent = "dist/ToDoList.js";
    }
}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
}
else {
    init();
}
