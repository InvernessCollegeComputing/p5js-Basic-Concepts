//      If we want to resize an image then we can add two more arguments to the image call on line 24

var aPhotoToDisplay;    
   

function setup() {


    createCanvas(480, 640);    

    aPhotoToDisplay = loadImage("assets/Gothenburg.jpg");    
                                                         
    // The photo used here is from https://flic.kr/p/wzvY1h, taken by Peter Karlsson (released under CC BY 2.0 at time of writing) 

}



function draw() {
    
    background(255, 0, 0); 

    image(aPhotoToDisplay, 0, 0, width, height);    // This will set the image to the same width and height as the canvas.
    
                                                    // Is this a good idea? How does it look?

}    
