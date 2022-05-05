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
const restartButton = document.createElement("button");

restartButton.textContent = "Restart";
buttons.appendChild(restartButton).className = "restart--button";

makeGrid(16); // staring point

const divs = container.querySelectorAll("div");
creatingColorsForDivs(divs);

restartButton.addEventListener("click", function () {
  let result = window.prompt(
    "How big should new grid be(in squares per side)?",
    12
  );
  result = parseInt(result);
  if (!Number.isInteger(result) || result <= 0 || result > 100) {
    alert("Please enter a number within range (1, 100)");
  } else {
    container.replaceChildren();
    makeGrid(result);
    const divs = container.querySelectorAll("div");
    creatingColorsForDivs(divs);
  }
});
