

// The real power of computers is in their ability to do things over and over again *really* quickly.

// We can use loops to make a computer repeat chunks of code over and over.

// Read the notes on for loops for an introduction, and then have a play around with the following code:
    

function setup() {

  createCanvas(900, 500) 
  ellipseMode(CENTER) 
  colorMode(HSB, 255, 255, 255, 255) 
  
  background(255) 
  
  noStroke() 
  
  for(i = 0; i < 10000; i++){                          // this loop tells Processing to run the next few lines of code 10,000 times.
    
   fill(random(100, 150), 255, 240, 40)                  // choose a new colour (but limit it to blue-ish greens)
    
    ellipse(random(width), random(height), 30, 30) 
    
  }
           
}