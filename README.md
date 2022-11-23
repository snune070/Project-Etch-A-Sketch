# Project-Etch-A-Sketch

## Description

This application creates a webpage with a 16x16 canvas that allows the user to  
draw on the canvas by changing every grid to the color black as the mouse cursor  
moves over the canvas.  
  
By using the css properties a grid is created when the website is loaded with 16 columns and rows and then a script is then the javascript runs a loop that generates divs to fill up each element, and an event-listener that watches for when the cursor moves over the canvas and changes the responding div to black.

### Challenges

The main difficulty for this project came from implementing a button to dynamically change the grid  
size from 16x16 to a user inputted number ranging from 1 to 100. After getting the input from the user  
the javascript would then clear the canvas and create a new grid with the corresponding value, the issues arose 
when then function to clear the canvas would instead add the corresponding amount of divs while keeping without removing the previous grid, this lead to only the top half of the canvas being  
usable, and the bottom half of the canvas being unresponsive. 
  

### Solutions

  The main problem for this project came from not properly removing the divs using a for loop  
to remove the divs at position `i` this would instead cause the code to loop through the canvas 
and not remove them. It was changed to a while-loop that would check if the parent node had any children in it   
and remove each child node from the parent node.
 
`const newPlane = document.getElementById('container');`  
`while (newPlane.hasChildNodes()){`  
` newPlane.removeChild(newPlane.firstChild)`  
`}`  

After solving the issue with removing the divs from the parent node the next issue was generating a new grid. At first
the code would generate a new set of divs without creating a new grid.

    for (let i = 0; i < rowNum * colNum; i++) {
    let newDiv = document.createElement('div')
    newDiv.style.height = 'auto';
    newDiv.style.width = 'auto';
    newDiv.style.padding = '0px';
    newDiv.style.margin = '0px';
    newDiv.classList.add('paint')
    canvas.appendChild(newDiv);
    }

By rereading the documentation on css grid, the solution became apparent that the grid template for the rows
and columns were not being altered as well. All that was needed was to take the stored user value for the new grid size
and update the grid template as follows before the for loop.

    newPlane.style.gridTemplateColumns = `repeat(${colNum} , 1fr)`;
    newPlane.style.gridTemplateRows = `repeat(${rowNum}, 1fr)`;