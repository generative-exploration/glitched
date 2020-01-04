let img;
var sizeX = 100;
var sizeY = 100;
let c;
let myFont;

function preload(){ 
  img = loadImage("CC0-img-132.jpg");
  myFont = loadFont('FiraCode-Regular.ttf');
}

function setup() {
  let c =  createCanvas(960, 1200);
  image(img, 0, 0);
  textFont(myFont);
  textSize(14);
}

function draw() {
  copy(img, 0, height-20, width, height, 0, height-20, width, height);  
   
  if (mouseIsPressed) {
    // für glitch 2 img statt canvas als ausgang für den effekt wählen
    //copy(img, mouseX, mouseY, sizeX, sizeY, pmouseX, pmouseY, sizeX, sizeY);
    copy( mouseX, mouseY, sizeX, sizeY, pmouseX, pmouseY, sizeX, sizeY);
  }
  
  fill(0);
  textAlign(CENTER);
  text("size x: "+ sizeX +"  size y: "+sizeY, width/2, height-5);
}

function keyPressed() { 
   if (key === 's') {
      saveCanvas(c, 'gen_exploration', 'jpg');
  }
  
  if (key == 'r') {
    image (img, 0, 0);
  }

    if (keyCode == UP_ARROW) {
      sizeX = sizeX+25;
    }
    if (keyCode == DOWN_ARROW) {
      sizeX = sizeX-25;
      if ( sizeX == 0) {
        sizeX = sizeX+25;
      }
    }
    if (keyCode == RIGHT_ARROW) {
      sizeY = sizeY+25;
    }
    if (keyCode == LEFT_ARROW){
      sizeY = sizeY-25;
     if ( sizeY == 0) {
      sizeY = sizeY+25;
      }
    }
}

