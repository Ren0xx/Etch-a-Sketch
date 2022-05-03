const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.textContent = '';
    div.setAttribute('class', 'grid--item');
    container.appendChild(div);
}