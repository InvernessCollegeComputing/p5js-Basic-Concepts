//    You can add images to your program very easily, though there is one funny quirk!

var aPhotoToDisplay;      //  The first thing you need to do is define a var to store your image in. 
   

function setup() {


    createCanvas(480, 640);    

    aPhotoToDisplay = loadImage("assets/OlegAfoninPhoto.jpg");    // Next we use loadImage to take an image file and store it in our variable. 
                                                                  // This takes the image from the hard drive and stores it in RAM.
                                                         
    // The photo used here is from https://flic.kr/p/xYUx3V, taken by Oleg Afonin (released under CC BY 2.0 at time of writing) 


}



function draw() {
    
    background(255, 0, 0);           // This is just here for testing purposes - it the image doessn't load at least you 
                                     // should see a red rectangle

    image(aPhotoToDisplay, 0, 0);    // Finally we tell Processing to display the image at a particular coordinate.

}    

// So, the quirk?

// You'll maybe notice that the image works in the live preview mode of Brackets, but doesn't work if you manually
// open the index.html file...

// Why might this be happening?