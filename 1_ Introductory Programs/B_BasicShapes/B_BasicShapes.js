// This program looks at drawing some shapes on screen


function setup() {

  createCanvas(1000, 500)         // Sets the size of the screen
  
}



function draw() {

  background(255)           // Remember to refresh the background at the start of each frame
  
  // Shapes have two important colour properties: Stroke and Fill.
  // Stroke is used to determine the colour of the outline of a shape
  // Fill is used to determine the colour contained within the bounds of a shape
  
  // The simplest thing that you can draw is a dot, or point
  
  point(100, height/2)      // A point takes two arguments, an x coordinate and a y coordinate.
                           // In this case we have used 'height/2' as the y coordinate. 
                           // 'height' is a pre-determined variable in p5js, it takes it's value from the size() function on line 6
                           
  // After a point, we might also want to draw a line
  
  line(200, 100, 200, 400)     // Line has four arguments (x1, y1, x2, y2) where x1 is the x coordinate of the first point and y1 is the coordinate of the first point
                               // To change the colour of a line we need to change the stroke() colour
                               
  // The other two shapes built into p5js are Rectangles and Ellipses
  
  rect(300, 200, 100, 100)        // By default the four arguments for rect are (top left x coord, top left y coord, width, height)
  ellipse(550, 250, 100, 100)     // By default the four arguments for ellipse are (centre x coord, centre y coord, width, height)
  
  // point(), line(), rect(), and ellipse() are the only built in shapes in p5js.
  // If you want to make any other shapes then these are all classed as polygons.
  
  // A polygon is a shape that is made up of a number of points (vertices) joined together by straight lines
  // This is where the names for hexagon, pentagon and octagon come from.
  
  // To draw a polygon in p5js we need to know the location of each vertex, so a triangle could be drawn with:
  

  beginShape()               // This function tells p5js that you are starting to draw a new polygon
    vertex(700, 300)         // This function draws a vertex, the arguments are (x coord, y coord)
    vertex(800, 300) 
    vertex(750, 200) 
  endShape(CLOSE)            // This funtion tells p5js that you wish to finish off the polygon and draw a line between the last vertex and the first vertex
                             // Try removing 'CLOSE' from the brackets of endShape to see what happens
                             
  // To draw more complicated polygons you'll need to read up on your Trigonometry!
  
}

