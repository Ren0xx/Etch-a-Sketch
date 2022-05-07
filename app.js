function makeGrid(per_side) {
  container.style.setProperty("--grid-per_side", per_side);
  for (c = 0; c < per_side * per_side; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid--item";
  }
}
function creatingColorsForDivs(divs) {
  divs.forEach((div) => {
    div.addEventListener("mouseover", (event) => {
      if (event.target.style.backgroundColor === "") {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = "#" + randomColor;
      } else {
        const rgb = event.target.style.backgroundColor.slice(4, -1).split(",");
        event.target.style.backgroundColor = `rgb(${rgb[0] - rgb[0] * 0.2}, ${
          rgb[1] - rgb[1] * 0.2
        }, ${rgb[2] - rgb[2] * 0.2})`;
      }
    });
  });
}

const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");
const clearButton = document.createElement("button");
const newGridButton = document.createElement("button");
let currentSize = 16;

newGridButton.textContent = "Make a new grid";
clearButton.textContent = "Clear";
buttons.appendChild(newGridButton).className = "newGrid--button";
buttons.appendChild(clearButton).className = "clear--button";

makeGrid(currentSize); // staring point
let divs = container.querySelectorAll("div");
creatingColorsForDivs(divs);

clearButton.addEventListener("click", () => {
  container.replaceChildren();
  makeGrid(currentSize);
  let divs = container.querySelectorAll("div");
  creatingColorsForDivs(divs);
});

newGridButton.addEventListener("click", () => {
  const newSize = document.getElementById("input").value;
  currentSize = newSize;
  container.replaceChildren();
  makeGrid(currentSize);
  let divs = container.querySelectorAll("div");
  creatingColorsForDivs(divs);
});

function showSize(x) {
  const b = (document.getElementById(
    "value--label"
  ).textContent = `${x} X ${x}`);
}
