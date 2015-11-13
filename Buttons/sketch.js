// these variables will be used to control the position and appearance of our button:

var buttonX = 100
var buttonY = 75
var buttonWidth = 100
var buttonHeight = 50
var buttonLabel = 'click me'


function setup() {
    
  createCanvas(1000, 500)
  
}

function draw() {
    
  background(255)
  
  rect(buttonX, buttonY, buttonWidth, buttonHeight)       // anything inside this rectangle will count as a 
                                                          // click on the button
  
  textSize(20)  
  textAlign(CENTER, CENTER)      // this affects both the horizontal and vertical alignment of the text 
  
  text(buttonLabel, buttonX, buttonY, buttonWidth, buttonHeight)    
}


function mouseReleased(){
    
    
    // check if the mouse is over the button
    // it counts as being over the button if the following four statements are true:
    //           mouseX > buttonX                     
    //           mouseX < (buttonX + buttonWidth)
    //           mouseY > buttonY
    //           mouseY < (buttonY + buttonHeight)
    
    // and the syntax for that is:
    
    if( (mouseX > buttonX) && 
        (mouseX < (buttonX + buttonWidth)) &&
        (mouseY > buttonY) && 
        (mouseY < (buttonY + buttonHeight))){
        
        buttonLabel = 'clicked'
        
    }
    
    // the brackets can be hard to keep track of in a large statement like this!
    // unfortunately there's not a lot we can do to simplify it...
    

}












