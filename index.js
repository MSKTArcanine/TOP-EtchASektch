const tutoDiv = document.getElementById("intro");
tutoDiv.style.display = "flex";
tutoDiv.style.justifyContent = "space-between";
const gridDiv = document.getElementById("grid");
gridDiv.style.display = "flex";
gridDiv.style.flexFlow = "row wrap";
gridDiv.style.width = "1000px";
gridDiv.style.height = "1000px";
setGrid(16);

const buttonGrid = document.querySelector("#changeGrid");
buttonGrid.addEventListener("click", function () { setGrid(prompt("Grid size ?")) });
const buttonClear = document.querySelector("#clearGrid");
buttonClear.addEventListener("click", function () { for (let i = 0; i < gridDiv.childElementCount; i++) { if (gridDiv.childNodes[i].classList.contains("turnRed")) { gridDiv.childNodes[i].classList.toggle("turnRed"); gridDiv.childNodes[i].classList.toggle("aqua") } } })

function setGrid(n) {
    while (gridDiv.childElementCount > 0) {
        gridDiv.removeChild(gridDiv.childNodes[0])
    }
    for (let i = 0; i < n * n; i++) {
        const gridInDiv = document.createElement("div");
        gridInDiv.classList.toggle("gridInDiv");
        gridInDiv.style.border = "1px solid black";
        gridInDiv.style.height = "auto";
        gridInDiv.style.width = "250px";
        gridInDiv.style.flex = `1 1 ${100 / n}%`;
        console.log((100 / n));
        gridInDiv.style.boxSizing = "border-box";
        gridInDiv.addEventListener("mouseover", function () { gridInDiv.classList.toggle("turnRed"); gridInDiv.classList.toggle("aqua") });
        gridDiv.style.padding = 0;
        gridDiv.style.margin = 0;
        gridInDiv.classList.toggle("aqua");
        gridDiv.appendChild(gridInDiv);
    }
}