
// This program will demonstrate what can happen if you put the background() function in the wrong place.

// You aren't expected to understand everything in the other tabs yet, but feel free to have a look around
// and make changes to the code to see what happens. We'll be coming back to this program and looking at it
// in much more detail later on in the unit.

// Run the program as is - you should see a green ball bouncing around the screen.

// After you have run the program, uncomment the background() function inside setup()
// and comment out the background() function inside draw().

// What has changed?


function setup() {
  createCanvas(1000, 500)           // set the screen size
  ellipseMode(CENTER)       // change the ellipse drawing mode (see http://processing.org/reference/ellipseMode_.html )
  
  // set up any balls which are going to appear on the screen
  
  ballOnePositionX = width/2           // set X coord
  ballOnePositionY = 100               // set Y coord
 
  ballOneSpeedX = 5                    // ball One speed and direction in X  
  
  //background(255) 
}

function draw() {
  
  background(255)  
  
  checkBoundaryCollisions()   // check to see if any balls have hit the edges of the screen
  moveBalls()                 // update the position of the balls each new frame
  drawBall()                  // draw the ball on the screen at the new position

}

// You should have noticed that the graphics buffer is not being cleared after every frame
// the way it would be if you called background() at the start of the draw() loop.

// This is fairly standard behaviour accross most rendering engines, both 2D and 3D.

