var bunny, ground, groundImg, bunnyImg;

var obst1
var obj =[]
function preload(){
    groundImg = loadImage('g.jpg')
}

function setup(){

    createCanvas(800,400)

    bunny = createSprite(200,200,20,20)
    ground= createSprite(180,350,800,10)
   // ground.x = ground.width/2-300;
    ground.velocityX = -3
  //  ground.addImage('ground', groundImg)
  
}


function draw(){
    background('black')

    //bunny.y = bunny.y + 5 

    bunny.velocityY = bunny.velocityY + 4    

    if(keyDown("space") && bunny.isTouching(ground)){
       // bunny.velocityY = bunny.velocityY-20;
        bunny.y = bunny.y - 105 
        console.log("if")
    }
    else{ bunny.collide(ground);}

    if(ground.x < 0){
      //  ground.x = ground.width/2-300;
      ground.x = 180
    }
     
    obs1()
    obstacle2()
    console.log(obst1)
    bunny.collide(ground)
    drawSprites();
}

function obs1(){

    console.log("inside function")
    if(frameCount % 60 ==0){
        console.log("inside if")
        obst1 = createSprite(300,150,10,10);
        obst1.velocityX = -4
        console.log(obst1)

       
    }
}

function obstacle2(){
    
    if(frameCount % 70 ==0)
    {
        var obst2 = createSprite(250,200,20,20)
        obst2.shapeColor = 'red'
        obst2.velocityX = -3;
    }
}

