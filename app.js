function makeGrid(per_side) {
  container.style.setProperty("--grid-per_side", per_side);
  for (c = 0; c < per_side * per_side; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid--item";
  };
};
function addEvents(divs) {
  divs.forEach((div) => {
    div.addEventListener("mouseover",  (event) => {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      console.log(randomColor);
      event.target.style.backgroundColor =  "#" + randomColor;
    });
  });
};

const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");

const restartButton = document.createElement("button");
restartButton.textContent = "Restart";
buttons.appendChild(restartButton).className = "restart--button";


makeGrid(16); // staring point

const divs = container.querySelectorAll("div");

addEvents(divs);

restartButton.addEventListener("click", function (event) {
  // great method to remember!
  let result = window.prompt(
    "How big should new grid be(in squares per side)?",
    12
  );
  result = parseInt(result);
  if (!Number.isInteger(result) || result <= 0 || result > 100) {
    alert("Please enter a number within range (1, 100)");
  } else {
    container.replaceChildren();
    makeGrid(result); // creating 
    const divs = container.querySelectorAll("div");
    addEvents(divs);
  }
});
