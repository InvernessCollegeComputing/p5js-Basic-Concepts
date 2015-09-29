/*

   p5js Basics
 
   There are two main functions that you need to use in p5js, setup and draw.
   
   You'll notice that they are written as
   
   function setup(){
     
   }
   
   
   function draw() {
    
     
   }
     
   Don't worry about what the 'void' means just now, we'll cover that later. The rounded brackets () after 
   the function name tell the computer that this is a function, and the curly brackets {} are used to tell the
   computer what code to run during this function.
     
     
 */


function setup() {

  // The setup function is run once, each time a program is run.

  createCanvas(1000, 500)       // The size() function is a good example of something you want to call inside setup()
                                // size() is used to set the x and y dimensions of the UI (measured in pixels)

  // Run the program now. All you should see is an empty browser window.
}



function draw() {

  // The draw function is run once every frame until the user exits the program.
  // This makes p5js ideal for programs which require a UI or are based around animation.

  // The first thing you usually want to do in p5js is refresh the background and set it's colour.
  // To do this you use the background() function, and you pass it a colour value.
  // Uncomment one of the following lines at a time, running the program at each step. See if you can
  // work out how the colour values work:

  //background(0)
  //background(100) 
  //background(200) 
  //background(255) 

  //background(100, 0, 0) 
  //background(200, 0, 0) 
  //background(255, 0, 0) 

  //background(0, 100, 0) 
  //background(0, 200, 0) 
  //background(0, 255, 0) 

  //background(0, 0, 100) 
  //background(0, 0, 200) 
  //background(0, 0, 255) 
}