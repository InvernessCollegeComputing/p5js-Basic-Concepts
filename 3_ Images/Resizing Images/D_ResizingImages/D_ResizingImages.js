//      Ok, so we want to resize our image and have it look good. 

//      There are two ways to do this: 
//          
//          Pick a width or height and then work out what the other 
//          dimension needs to be to maintain the aspect ratio of
//          the image.
//
//          Provide a canvas size and then make the image fit into that canvas.

//      This is an example of the SECOND approach.

//      Notice that we are loading our image in preload now.


var aPhotoToDisplay;    

var newPhotoWidth;
var newPhotoHeight;

function preload() {
    
     aPhotoToDisplay = loadImage("assets/Gothenburg.jpg");   
    
    // The photo used here is from https://flic.kr/p/wzvY1h, taken by Peter Karlsson (released under CC BY 2.0 at time of writing) 
    

}
   

function setup() {


    createCanvas(800, 800);     // Lets make a square canvas.
                                
    // We want our image to fit into this nicely, so fist we need to find out if our photo
    // is in portrait or landscape:
    
    var imageWidth = aPhotoToDisplay.width;
    var imageHeight = aPhotoToDisplay.height;
    
    if(imageWidth > imageHeight){                       // the photo is landscape
        
        newPhotoWidth = width;

        var aspectRatio = imageHeight / imageWidth;

        newPhotoHeight = newPhotoWidth * aspectRatio;

    }
    
    else {                                              // the photo is portrait
        
        newPhotoHeight = height;
        
        var aspectRatio = imageWidth / imageHeight;
        
        newPhotoWidth = newPhotoHeight * aspectRatio;
    }

}



function draw() {
    
    background(255); 

    image(aPhotoToDisplay, 0, 0, newPhotoWidth, newPhotoHeight); 
    
}    
