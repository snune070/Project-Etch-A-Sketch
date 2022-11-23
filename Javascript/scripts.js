const canvas = document.querySelector('.canvas');

let htmlStyles = window.getComputedStyle(document.querySelector('html'))
let rowNum = parseInt(htmlStyles.getPropertyValue('--rowNum'));
let colNum = parseInt(htmlStyles.getPropertyValue('--colNum'));
let color = htmlStyles.getPropertyValue('--color');


for (let i = 0; i < rowNum * colNum; i++) {
    let div = document.createElement('div')
    div.style.padding = '0px';
    div.style.margin = '0px';
    div.classList.add('paint')
    canvas.appendChild(div);
}

let black = document.getElementById('black');

black.addEventListener('click', function () {
    const defaultColor = document.querySelectorAll('.paint');
    for (let defaultColorElement of defaultColor) {
        defaultColorElement.addEventListener('mouseover', function () {
            defaultColorElement.style.backgroundColor = 'black';
        })
    }
})


let random = document.getElementById('random');

random.addEventListener('click', function () {

    let randomColors = Math.floor(Math.random() * 16777215).toString(16);

    const randomColor = document.querySelectorAll('.paint')
    for (let randomColorElement of randomColor) {
        randomColorElement.addEventListener('mouseover', function () {
            randomColorElement.style.backgroundColor = "#" + randomColors;
        })
    }

})

let rainbow = document.getElementById('rainbow');

rainbow.addEventListener('click', function (){
    const rainbowColors = document.querySelectorAll('.paint');
    for (let rainbowColor of rainbowColors) {
        rainbowColor.addEventListener('mouseover', function (){
            let randomColorGenerator = Math.floor(Math.random() * 16777215).toString(16);
            rainbowColor.style.backgroundColor = "#" + randomColorGenerator;
        })
    }
})


let clear = document.getElementById('clear');

clear.addEventListener('click', function () {
    let elements = document.getElementsByClassName('paint')
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = '';
    }
})


let chooseSize = document.getElementById('size');

chooseSize.addEventListener('click', function () {
    let newSize = prompt('Choose a size below 100');
    console.log(newSize)
    rowNum = parseInt(newSize);
    colNum = parseInt(newSize);

   const newPlane = document.getElementById('container');
   while (newPlane.hasChildNodes()){
       newPlane.removeChild(newPlane.firstChild)
   }

   newPlane.style.gridTemplateColumns = `repeat(${colNum} , 1fr)`;
   newPlane.style.gridTemplateRows = `repeat(${rowNum}, 1fr)`;

    for (let i = 0; i < rowNum * colNum; i++) {
        let newDiv = document.createElement('div')
        newDiv.style.height = 'auto';
        newDiv.style.width = 'auto';
        newDiv.style.padding = '0px';
        newDiv.style.margin = '0px';
        newDiv.classList.add('paint')
        canvas.appendChild(newDiv);
    }

    setDefault();

})

const paint = document.querySelectorAll('.paint');
for (let paintElement of paint) {
    paintElement.addEventListener('mouseover', function () {
        color = 'black';
        paintElement.style.backgroundColor = color;
        console.log()
    })
}

function setDefault(){
    const newPaint = document.querySelectorAll('.paint')

    for (let newPaintElement of newPaint) {
        newPaintElement.addEventListener('mouseover', function (){
            newPaintElement.style.backgroundColor = 'black';
        })
    }
}

