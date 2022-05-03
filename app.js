const container = document.querySelector('.container');

//creating 16 x 16 divs
for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'grid--item');
    container.appendChild(div);
}

const divs = container.querySelectorAll('div');

divs.forEach(div => {
    div.addEventListener("mouseover", function( event ){
        event.target.style.backgroundColor = 'black';
    },)
    
});