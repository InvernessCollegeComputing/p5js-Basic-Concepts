
// This program will demonstrate what can happen if you change the frame rate of Processing.

// As with the earlier example, you aren't expected to understand everything in the other tabs yet, but feel free to have a look around
// and make changes to the code to see what happens. We'll be coming back to this program and looking at it in much more detail 
// later on in the unit.

// Run the program as is - you should see a green ball bouncing around the screen.

// After you have run the program, change the argument of the frameRate function on line 22.
// Try some really low values (around 1 - 10) and some really high values (500 or higher)

// What has changed?


function setup() {
  createCanvas(1000, 500)           // set the screen size
  ellipseMode(CENTER)       // change the ellipse drawing mode (see http://processing.org/reference/ellipseMode_.html )
  
  // set up any balls which are going to appear on the screen
  ballOnePositionX = width/2           // set X coord
  ballOnePositionY = 100               // set Y coord
  ballOneSpeedX = 5                    // ball One speed and direction in X   
 
  frameRate(50)             // frameRate() sets the number of frames per second that Processing tries to maintain
                            // Just because the frame rate is set as 50 doesn't mean that the computer will always
                            // manage to stick to that. Sometimes it might be a little higher, sometimes a little
                            // lower. This is a common problem you have to deal with in computer graphics in any language.
                            
                            // Try changing the frame rate to see what effect it has on the program. 
  
}

function draw() {
  
  background(255)  
  
  checkBoundaryCollisions()   // check to see if any balls have hit the edges of the screen
  moveBalls()                 // update the position of the balls each new frame
  drawBall()                  // draw the ball on the screen at the new position

}