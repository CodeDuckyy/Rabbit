var garden,rabbit;
var gardenImg,rabbitImg;

var apple, leaf;
var appleImg, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit 
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);

  var select_sprite = Math.round(random(1,2));

  rabbit.x = World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  console.log("frameCount");

  if(frameCount%80 == 0){
    if(select_sprite == 1){
  createApples();
  }
    else{
  createLeaves();
    }
  }

  drawSprites();
}

function createApples(){

  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY = 6;
  apple.scale = 0.1;
  apple.lifetime = 200;

}

function createLeaves(){

  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.velocityY = 6;
  leaf.scale = 0.1;
  leaf.lifetime = 200;

}


