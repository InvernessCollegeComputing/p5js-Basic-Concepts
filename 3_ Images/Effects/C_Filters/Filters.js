//      p5js gives you access to a LOT of built in filters. 

//      Take a look at the reference page http://p5js.org/reference/#/p5/filter
//      for the full range

//      Filters are applied to the canvas rather than the image, so you can't easily have seperate filters
//      on different parts of your canvas.

//      You can stack them up though, so try applying more than one. 

var photo; 

function preload() {
    
    
    photo = loadImage("assets/Gothenburg.jpg"); 

    // The photo used here is from https://flic.kr/p/wzvY1h, taken by Peter Karlsson (released under CC BY 2.0 at time of writing) 
    

}
   

function setup() {


    createCanvas(1000, 536);     
                                

}



function draw() {
    
    background(255); 

    
    image(photo, 0, 0, width, height);                // we draw the image, and then...
    
    filter(BLUR,3);                             // ...apply the filter


}    
