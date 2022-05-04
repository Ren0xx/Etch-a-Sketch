const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons')


function makeRows(per_side) {
    container.style.setProperty('--grid-per_side', per_side);
    for (c = 0; c < (per_side * per_side); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid--item";
    };
  };
makeRows(16); // staring point

const divs = container.querySelectorAll('div');

divs.forEach(div => {
    div.addEventListener("mouseover", function( event ){
        event.target.style.backgroundColor = 'black';
    },)
    
});


const button = document.createElement('button');
button.textContent = 'Restart';
buttons.appendChild(button).className = "restart--button";


// button.addEventListener("click", function( event ){

// })



