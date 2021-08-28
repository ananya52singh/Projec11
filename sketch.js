var ship,ship__running;
var sea;

function preload(){
  ship_running=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png")
  seaImg =loadImage("sea.png");
}

function setup(){
    //create a background
  createCanvas(2000,1000);
  sea=createSprite(1000,500);
  sea.addImage(seaImg);
  sea.velocityX=-5;
  sea.scale=0.7;
  
    //create a ship sprite
    ship=createSprite(900,500,20,50);
    ship.addAnimation("running",ship_running)
    ship.scale=0.7;
  
  }

function draw() {
  background("sea.png");
  if(sea.x<0){
    sea.x=sea.width/2;
  }
  drawSprites();
}
