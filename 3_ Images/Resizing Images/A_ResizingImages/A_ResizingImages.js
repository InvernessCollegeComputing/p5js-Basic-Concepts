//      This program opens up an image which is 2048 x 1097 pixels in a
//      canvas which is only 480 x 640. 

//      What happens?


var aPhotoToDisplay;    

   
function setup() {


    createCanvas(480, 640);    

    aPhotoToDisplay = loadImage("assets/Gothenburg.jpg");    
                                                         
    // The photo used here is from https://flic.kr/p/wzvY1h, taken by Peter Karlsson (released under CC BY 2.0 at time of writing) 

}



function draw() {
    
    background(255, 0, 0);           // This is just here for testing purposes - it the image doesn't load at least you 
                                     // should see a red rectangle

    image(aPhotoToDisplay, 0, 0);    

}    
