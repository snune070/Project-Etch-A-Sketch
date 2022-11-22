const canvas = document.querySelector('.canvas');


for (let i = 0; i < 256; i++) {
    let div = document.createElement('div')
    div.style.height = '25px';
    div.style.width = '25px';
    div.style.padding = '0px';
    div.style.margin = '0px';
    div.classList.add('paint');
    canvas.appendChild(div);
}

const paint = document.querySelectorAll('.paint');
for (let paintElement of paint) {
    paintElement.addEventListener('mouseover', function () {
        paintElement.style.backgroundColor = 'black';
    })
}
