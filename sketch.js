var mySigla; //variable mySigla

var analyzer; //variable analyzer
var volume; //variable volume


function preload() {
  mySigla = loadSound("./assets/TG1_new.mp3"); //load mySigla
  myImage = loadImage("./assets/TG1.png"); //load the tg1 image
}

function setup() {
  createCanvas(windowWidth, windowHeight); //create the canvas
  background("blue"); //color background

  rectMode(CENTER); //center of the rectangle

  analyzer = new p5.Amplitude(); //analyzer Amplitude
  analyzer.setInput(mySigla); //analyzer mySigla settings
}


function draw() {
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  //create the pattern
  for (var x = 0; x < windowWidth; x += 50) {
    for (var y = 0; y < windowHeight; y += 50) {

      var distance = dist(x, y, volume, volume);

      var remap = map(distance, 0, 500, 0, 50);
      //stroke
      stroke(color("lime"))
      strokeWeight(6);
      //fill
      fill("#ff00ff");
      ellipse(x, y, volume);
    }
  }

  image(myImage, windowWidth / 2, windowHeight / 2, myImage.width / 7, myImage.height / 7); //insert the image
}


function windowResized() { //in order to adapt the window to the resizement
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() { //only if the mouse is clicked, mySigla will play
  mySigla.play();
  reset(); //it should reset the page
  clear(); //it should clean the canvas
}
