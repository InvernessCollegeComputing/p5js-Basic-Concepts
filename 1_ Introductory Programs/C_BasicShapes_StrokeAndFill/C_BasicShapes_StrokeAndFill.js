// This program take sthe shapes drawn in the previous program and changes the colour of them


function setup() {

  createCanvas(1000, 500)         // Sets the size of the screen
  
}



function draw() {

  background(255)           // Remember to refresh the background at the start of each frame
  
  // Shapes have two important colour properties: Stroke and Fill.
  // Stroke is used to determine the colour of the outline of a shape
  // Fill is used to determine the colour contained within the bounds of a shape
  
  // By default, stroke and fill both take three arguments for Red, Green and Blue values
  // take a look at this tutorial on using colour in Processing https://processing.org/tutorials/color/
  
  stroke(0, 0, 255) 
  fill(0, 255, 0) 
  
  
  // point() and line() both only use stroke()
  // fill() will have no effect on them
  
  point(100, height/2)  
  line(200, 100, 200, 400) 
  
  
  // rect(), ellipse() and custom polygons will be affected by both stroke() and fill()
  
  rect(300, 200, 100, 100)   
  ellipse(550, 250, 100, 100)  
  
  // Draw a triangular polygon:
  beginShape()       
    vertex(700, 300)       
    vertex(800, 300) 
    vertex(750, 200) 
  endShape(CLOSE)          
                        
                           
}