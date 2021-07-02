var docked = false;
function preload(){
  bg = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  craft1 = loadImage("spacecraft1.png");
  craft2 = loadImage("spacecraft2.png");
  craft3 = loadImage("spacecraft3.png");
  craft4 = loadImage("spacecraft4.png");
}




function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(craft1);

  spacecraft.scale = 0.15;

  iss = createSprite(330,130);
  iss.addImage(issImg);

  iss.scale = 0.25;

}

function draw() {
  background(bg); 
  spacecraft.addImage(craft1);
  
  if(!docked){
    spacecraft.x = spacecraft.x +random(-1,1);
    if(keyDown("UP_ARROW")){
      spacecraft.y-=2;
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(craft4);
      spacecraft.x-=1
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(craft3);
      spacecraft.x+=1
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(craft2);
    }
  }
  if(spacecraft.y<=(iss.y +70)&&spacecraft.x<=(iss.x-10)){
    docked = true;
    textSize(25);
    fill("white");
    text("Docking Successful", 200, 300);
  }
  drawSprites();
}

