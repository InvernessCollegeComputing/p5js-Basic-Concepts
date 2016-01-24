//      The last tint example was pretty extreme, just to introduce the topic

//      Why would you want to do that though? Really? It's interesting enough to demonstrate the effect
//      but is unlikely to be used that way in a real world project.

//      So what's the point?

//      Take a look at the forst two minutes of this video: http://juanmelara.com.au/the-summer-blockbuster-colour-grading-tutorial/
//      (or search for "how hollywood uses colour correction" to see LOT of rants about the same subject)

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

    image(aPhotoToDisplay, 0, 0, width/2, height/2);                // top left copy:   the original
    
    noTint();
    tint(255, 200, 200);
    image(aPhotoToDisplay, width/2, 0, width/2, height/2);          // top right copy:  applies a red tint 
    
    noTint();
    tint(200, 255, 200);
    image(aPhotoToDisplay, 0, height/2, width/2, height/2);         // bottom left copy:  applies a green tint
    
    noTint();
    tint(200, 200, 255);
    image(aPhotoToDisplay, width/2, height/2, width/2, height/2);   // bottom right copy:  applies a blue tint 
    
}    
