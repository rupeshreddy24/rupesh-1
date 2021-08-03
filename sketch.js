var iss,spacecraft;
var hasDocked;
var hasDocked = false;
var issi,spacebg,craft,craftup,craftr,craftl;
var x


function preload(){
  issi = loadImage("iss.png");
  spacebg = loadImage("spacebg.jpg");
  craft = loadImage("spacecraft1.png");
  craftup = loadImage("spacecraft2.png");
  craftr = loadImage("spacecraft3.png");
  craftl = loadImage("spacecraft4.png");
}



function setup() {
  createCanvas(800,400);
  iss = createSprite(300, 130);
  iss.addImage(issi);
  iss.scale = 0.25;

  spacraft = createSprite(285,240);
  spacraft.addImage(craft);
  spacraft.scale = 0.15
}

function draw() {
  background(spacebg);

  if(!hasDocked){
    spacecraft.x = spacecraft.x +ramdom(-1,1);

  }
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y-2;
    spacecraft.addImage(craftup);
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.y = spacecraft.y+2;
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.y = spacecraft.x-2;
    spacecraft.addImage(craftl);
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.y = spacecraft.x+2;
    spacecraft.addImage(craftr);
  }
  
  
  drawSprites();
}