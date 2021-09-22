var sprite;
function setup() {

  createCanvas(400,400);
  sprite=createSprite(200,200,20,20);
}


function draw() 

{

  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    sprite.position.x+= 5;
  }

  if (keyIsDown(LEFT_ARROW)){
    sprite.position.x-=5;
  }
  if (keyIsDown(DOWN_ARROW)){
    sprite.position.y+=5;
  }
  if (keyIsDown(UP_ARROW)){
    sprite.position.y-=5;
  }
  drawSprites();

}




