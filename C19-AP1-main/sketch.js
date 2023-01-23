var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(300,300);
  ghost.addImage("ghost",ghostImg);
  ghost.velocityY = 0;
  ghost.scale=0.3;

  climbersGroup=new Group();

  doorsGroup=new Group();
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    
    drawSprites();
    inimigos();
}

function inimigos(){
  if (frameCount%240===0) {
   var rando=Math.round(random(120,400))
   var porta=createSprite(rando,-50)
   porta.addImage("door",doorImg);
   porta.velocityY = 1;
   climber=createSprite(rando,10)
   climber.addImage("climber",climberImg);
   climber.velocityY = 1;
  }
}
