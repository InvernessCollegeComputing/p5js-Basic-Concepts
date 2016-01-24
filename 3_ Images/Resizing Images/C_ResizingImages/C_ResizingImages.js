//      Ok, so we want to resize our image and have it look good. 

//      There are two ways to do this: 
//          
//          Pick a width or height and then work out what the other 
//          dimension needs to be to maintain the aspect ratio of
//          the image.
//
//          Provide a canvas size and then make the image fit into that canvas.

//      This is an example of the first approach.

//      Notice that we are loading our image in preload now.


var desiredCanvasWidth = 800;   // we want a canvas 800 pixels wide, then we'll work out the desired height.

var desiredCanvasHeight;
    
var aPhotoToDisplay;    

function preload() {
    
     aPhotoToDisplay = loadImage("assets/Gothenburg.jpg");   
    
    // The photo used here is from https://flic.kr/p/wzvY1h, taken by Peter Karlsson (released under CC BY 2.0 at time of writing) 
    

}
   

function setup() {

       
    var imageWidth = aPhotoToDisplay.width;
    var imageHeight = aPhotoToDisplay.height;
    
    // Our image is 2048 x 1097, work out the aspect ratio:
    
    var aspectRatio = imageHeight / imageWidth;
    
    
    desiredCanvasHeight = desiredCanvasWidth * aspectRatio;
    
    createCanvas(desiredCanvasWidth, desiredCanvasHeight);    

    print("Canvas height is " + desiredCanvasHeight);       // Prints this information to our web browser console.
}



function draw() {
    
    background(255, 0, 0); 

    image(aPhotoToDisplay, 0, 0, width, height); 
    
}    
