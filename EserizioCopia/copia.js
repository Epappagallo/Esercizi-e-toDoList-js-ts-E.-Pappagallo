let button = document.getElementsByClassName("changeButton");
let colorChange = document.getElementById("01");
function cambiaColore() {
    if (colorChange.style.backgroundColor === "red") {
        colorChange.style.backgroundColor = "yellow";
    } else {
        colorChange.style.backgroundColor = "red";
    }
}