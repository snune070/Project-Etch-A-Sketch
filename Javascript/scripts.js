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


let size = document.getElementById('size');

size.addEventListener('click', function () {
    let newSize = parseInt(prompt('Choose a size below 100'));
    console.log(newSize)
    rowNum = newSize;
    colNum = newSize;



    for (let i = 0; i < rowNum * colNum; i++) {
        let newDiv = document.createElement('div')
        newDiv.style.height = '1fr';
        newDiv.style.width = '1fr';
        newDiv.style.padding = '0px';
        newDiv.style.margin = '0px';
        newDiv.classList.add('paint')
        canvas.appendChild(newDiv);
    }

})

let random = document.getElementById('random');

random.addEventListener('click', function (){
    let randomColors = Math.floor(Math.random() * 16777215).toString(16);

    const randomColor = document.querySelectorAll('.paint')
    for (let randomColorElement of randomColor) {
        randomColorElement.addEventListener('mouseover', function (){
            randomColorElement.style.backgroundColor = "#" + randomColors;
        })
    }

})


let clear = document.getElementById('clear');

clear.addEventListener('click', function (){
    let elements = document.getElementsByClassName('paint')
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = '';
    }
})


const paint = document.querySelectorAll('.paint');
for (let paintElement of paint) {
    paintElement.addEventListener('mouseover', function () {
        color = 'black';
        paintElement.style.backgroundColor = color;
        console.log()
    })
}


