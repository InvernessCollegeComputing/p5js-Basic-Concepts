//      The tint function is used to alter the colour content of an image. 

//      This example shows four versions of an image with different tints applied.

var aPhotoToDisplay;    


function preload() {
    
     aPhotoToDisplay = loadImage("assets/GothenburgSmall.jpg");   
    
    // The photo used here is from https://flic.kr/p/wzvY1h, taken by Peter Karlsson (released under CC BY 2.0 at time of writing) 
    

}
   

function setup() {


    createCanvas(1000, 536);    
                                

}



function draw() {
    
    background(255); 

    tint(100);
    image(aPhotoToDisplay, 0, 0, width/2, height/2);                // top left copy:   has a greyscale tint applied to darken the image
    
    noTint();
    tint(255, 0, 0);
    image(aPhotoToDisplay, width/2, 0, width/2, height/2);          // top right copy:  applies a red tint (you can think of this as us removing the blue and green light)
    
    noTint();
    tint(0, 255, 0);
    image(aPhotoToDisplay, 0, height/2, width/2, height/2);         // bottom left copy:  applies a green tint (you can think of this as us removing the blue and red light)
    
    noTint();
    tint(0, 0, 255);
    image(aPhotoToDisplay, width/2, height/2, width/2, height/2);   // bottom right copy:  applies a blue tint (you can think of this as us removing the red and green light)
    
}    
