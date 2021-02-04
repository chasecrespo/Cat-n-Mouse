var cat,mouse
var mouseAnimation;
var catImage,catImage2,catImage3,catImage4;
var garden,gardenImage;
var catAnimation;
function preload() {
    //load the images here
    mouseAnimation=loadAnimation("images/jerryOne.png","images/jerryTwo.png","images/jerryThree.png","images/jerryFour.png"); 
    catImage=loadImage("images/tomOne.png")
    
    catImage4=loadImage("images/tomFour.png")
    catAnimation=loadAnimation("images/tomTwo.png","images/tomThree.png")

    gardenImage=loadImage("images/garden.png")


}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400);
garden.addImage(gardenImage);
garden.scale=1.2
cat=createSprite(500,500,50,50);
cat.addAnimation("running",catAnimation);
cat.scale=0.1
mouse=createSprite(200,500,50,50);
mouse.addAnimation("mouseRunning",mouseAnimation);
mouse.scale=0.1

}

function draw() {

background("black");
    //Write condition here to evalute if tom and jerry collide

if(cat.isTouching(mouse)){
    mouse.y=600
    cat.velocityX=1
}
    
    drawSprites();
    keyPressed()
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    
}




}
