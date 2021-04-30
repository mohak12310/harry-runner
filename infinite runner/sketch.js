//
var harrypotter;

var ground;

var invisiblegvar;

var goldenball;

var voldemort;

var gameOver;

var  restart;

var endImage;

var hogwards;

var friendsImage;


var harryimage;

var groundimage;

var backgroundImage;

var enemyImage;

var gameoverImage;

var restartImage;

var enemyImage2;

var TomRiddlesdiary;

var MarvoloGauntRing;

var SalazarSlytherinLocket;

var HelgaHufflepuffCup;

var RowenaRavenclawDiadem;

var NaginitheSnake;

var jumpSound;

var backgroundSound;

var collideSound;

var goldenballGroup;

var enemyGroup;

var horcruxGroup;

var Play = 2;

var START =1;

var WIN = 3;

var End = 0;

var gameState = START;

var score = 0;



localStorage["HighestScore"] = 0;

function preload() {
  
  
  
  harryimage = loadImage("https://assets.editor.p5js.org/5e09ef7e0b8700001e6d4c17/2f4ba5a0-61ae-41e9-a8ee-0b7ecf856186.png");
  
  
  
  
  groundimage = loadImage("https://assets.editor.p5js.org/5e09ef7e0b8700001e6d4c17/224b34ba-41b3-4b33-a7e5-92f64f558f49.png");
  
  
  backgroundImage = loadImage("Little_Hangleton_graveyard_GOF_2.jpg");
  
  goldenballimage = loadImage("https://assets.editor.p5js.org/5e09ef7e0b8700001e6d4c17/44985caf-1dae-4e42-86af-b5f018f47cc7.png");
  
  
  enemyImage = loadImage("https://assets.editor.p5js.org/5e09ef7e0b8700001e6d4c17/99ae36a5-5248-49d0-a7bc-8ea4e4f99e34.png");
  
  
  
enemyImage2 = loadImage("bellatrix_lestrange_png_by_nemotrex_d9t9jd8-fullview.png");
  
  
  gameoverImage = loadImage("https://static.wixstatic.com/media/bc193a_65802df31fe24c0a96e90bd3576bcee1~mv2.png");
  
  
  restartImage = loadImage("https://static.wixstatic.com/media/bc193a_b663c1797947493c9a147eaed5a8d764~mv2.png");
  
  
  jumpSound = loadSound("https://assets.editor.p5js.org/5e09ef7e0b8700001e6d4c17/8ec99b29-9aed-466d-babb-6a5e53e6c56f.wav");
  
  
  collideSound = loadSound("https://assets.editor.p5js.org/5e09ef7e0b8700001e6d4c17/17c3c8d3-7084-468b-a760-c1c70acc9f4a.wav");
  
  
  
  backgroundSound=loadSound("https://assets.editor.p5js.org/5e09ef7e0b8700001e6d4c17/f6d226b5-98aa-41c6-aee5-efc504ede375.mp3");
  
  
  
  
  TomRiddlesdiary = loadImage("TomRiddlesdiary.png");
  
  

 MarvoloGauntRing =  loadImage("https://assets.editor.p5js.org/5f1988d19b2a4c0024b6009e/2f93d324-2d86-42c0-bc35-b9e364d66fc7.png");
  
  

 SalazarSlytherinLocket=  loadImage(" Slytherin's Locket.png");
  
  

 HelgaHufflepuffCup=  loadImage("Hufflepuff's Cup.png");
  
  

 RowenaRavenclawDiadem =  loadImage("https://assets.editor.p5js.org/5f1988d19b2a4c0024b6009e/90a88273-3db7-4b37-b20a-76a7b4ce78cf.png");
  
  
  

 NaginitheSnake  =  loadImage("https://assets.editor.p5js.org/5f1988d19b2a4c0024b6009e/7f319b44-4321-4693-90ad-c03cf16a714d.png");
  
  
  

  
  hogwards = loadImage("great-hall-in-hogwarts.jpg");
  
  
  
  
  friendsImage = loadImage("harry-potter-and-friends-in-one-of-the-earlier-movies-1250x600.jpeg");
  
  
  endImage = loadImage("download (6).jpg");
  
  
  
}

function setup() {
  
  
  
  
  createCanvas(windowWidth, windowHeight);
  
  
  
  
  harrypotter = createSprite(70, 320, 20, 20);
  harrypotter.addImage(harryimage);
  harrypotter.scale = 0.4;
  
  
  

  ground = createSprite(800, 800, 200, 500);
  ground.addImage("ground", groundimage);
  ground.scale = 0.4
  ground.x = ground.width / 10;



  
  invisibleg = createSprite(200, 630, 500, 20);
  invisibleg.visible = false;

  
  
  horcruxGroup = createGroup();
  goldenballGroup = createGroup();
  enemyGroup = createGroup();

  
  
  gameOver = createSprite(windowWidth/2, 180, 180, 80);
  gameOver.addImage(endImage)
  gameOver.scale = 2;
  gameOver.visible = false;

  
  
  restart = createSprite(windowWidth/2, 700, 20, 20)
  restart.addImage(restartImage);
  restart.scale = 0.3;
  restart.visible = false;
 
  
  endImage.visible = false;
  backgroundSound=createAudio('https://assets.editor.p5js.org/5e09ef7e0b8700001e6d4c17/f6d226b5-98aa-41c6-aee5-efc504ede375.mp3');
  
  
  
  
  ground.visible = true;


  
  

   friends = createSprite(windowWidth/2,210,20,20);
   friends.addImage(friendsImage,"friendsImage");
   friends.visible=  false;
   friends.scale = 1;


  
  
  
}


function draw() {
  
  
  
    

  
  
  if(gameState===START)
  {
    
    
    
    //Bakcground of start state
    background("black");
    
    
      endImage.visible = false;

    
    //Assigning visibility false to all sprites
    gameOver.visible=false;
    
  //  background.visible=false;
        ground.visible = false;
    
    
    harrypotter.visible=false;
    
    
    restart.visible=false;
    
    horcruxGroup.visible=false;
    
    enemyGroup.visible=false;
    
    friends.visible=  false;
  
  
    
    textSize(40);
  fill("white");
  text("Story",400,80);
  textSize(26);
  text("Harry Potter is in a huge trouble!!! Ron weasly and Hermoine Granger",28,150);
  text("Are In The Secret Prison of Voldemort.",30,210);
  text("Harry Potter means you have to save them!!",30,270);
  text("You have to destroy all the horcruxes to destroy Voldemort and bellatrix",10,330);
  text("They both are searching you Be Carefull!",50,390)
  textSize(40);
  text("Instructions: - ",400,500);
  textSize(26);
   fill("turquoise")
  text("1 . Press Space to Fly",50,540);
  text("2 . Destroy 10 horcrux to win",50,580);
  text("3 . Stay away from voldemort and bellatrix",50,620);
  textSize(60);
  fill("orange");
  text("GOOD LUCK!!",340,740);
    
    
    
    //To start the game when space key is presses
    if(keyDown("space"))
    {
      gameState=Play; 
    }
  }
  
  
  
  
  
  
 

  if (gameState === Play) {
    
    
    
    background(backgroundImage);
  textSize(40)
  fill("white")
  text("Horcrux: " + score, windowWidth/2, 80)
  
    
    
    
    
    ground.visible=true;
    friends.visible=  false;

      endImage.visible = false;

    
    
  backgroundSound.autoplay(true);  
    backgroundSound.loop();
  
    
    
    
   harrypotter.visible = true;
    
    
    
    gameOver.visible = false;
    
    restart.visible = false;
    
    
    
    
    if (touches.length > 0 || keyDown("space") && harrypotter.y > 150) {
      
      
      
      harrypotter.velocityY = -10;
      
      
      jumpSound.play();
      
      
      touches = [];
      
      
    }
    
    
    
    ground.velocityX = -(3 + 6 * score / 10);
    
    
    
    if (ground.x < 0) {
      
      
      
      ground.x = ground.width / 10;
      
      
    }
    
    
    
    horcrux();
    enemy();
    
    
    
    

    if (harrypotter.isTouching(horcruxGroup)) {
      
      
      horcruxGroup.destroyEach();
      
      
      score = score + 1;
      
    }
    
    
  }
  
  
  
  if (harrypotter.isTouching(enemyGroup)) {

    collideSound.play();
    
    
    gameState = End;
  }
  
  
  
  if (score === 8){
    
    gameState = WIN;
    
  }
  
  
  if (gameState === WIN){
    
    
    background(hogwards);
    
      endImage.visible = false;

    
    ground.veocityX = 0;
    
    ground.visible  = false;
    
    harrypotter.visible= false;
    
    enemyGroup.destroyEach();
    
    horcruxGroup.destroyEach();
    
    gameOver.visible= false;
    
    restart.visible=  false;
    
    friends.visible=  true;
    
    friends.scale =0.8;
    
    
    
    textSize(50);
    
    fill("black");
    
    tint("white");
    
    strokeWeight(10);
    
    text("Thank you for helping Harry potter!",50,500);
    
    text("Now they are Safe Hogwards!!",50,600)
    
    
  }


  if (gameState === End) {
    
    
    background("black");
    
    ground.velocityX = 0;
    
    harrypotter.velocityY = 0;
    
    horcruxGroup.setVelocityXEach(0);
    
    enemyGroup.setVelocityXEach(0);
    
      endImage.visible = true;

    
    gameOver.visible = true;
    
    restart.visible = true;
    
    score = 0;
    
    collideSound.stop();
    
    backgroundSound.autoplay(true);
    
    
    friends.visible=  false;
    
    
    harrypotter.visible = false;
    
    horcruxGroup.destroyEach();
    
    enemyGroup.destroyEach();
    
    background.visible = false;
    
    ground.visible = false;
    
    
    
    textSize(40);
        
    fill("voilet");
    
    strokeWeight(5);
    
    text("Harry Potter was takes to voldemort",160,430);
    
    text("And they dostroyed harry and is friends",160,530);
    
    text("then the captured hogwards too",160,580)
    

  }

  harrypotter.velocityY = harrypotter.velocityY + 0.8;
  
  harrypotter.collide(invisibleg);
  
  
  
  
  
  
  if (touches.length > 0 || mousePressedOver(restart)) {
    
    gameState = Play;
    
    horcruxGroup.destroyEach();
    
    enemyGroup.destroyEach();
    
    touches = [];
  }

  
  
  
  
  // draws all sprites
  drawSprites();
}









 function horcrux(){
   
   
          if(frameCount%160===0){
            
            
      position=Math.round(random(1,2,3,4,5,6))
            
     var horcrux1=createSprite(windowWidth,300,20,20);
            
            
   horcrux1.scale=0.1;
            
    var rand=Math.round(random(1,6)) ;
            
            
            
            
        switch(rand) {
            
  case 1: horcrux1.addImage(TomRiddlesdiary);
              break;
              
      case 2: horcrux1.addImage(MarvoloGauntRing);
              break;
              
      case 3: horcrux1.addImage(HelgaHufflepuffCup);
              break;
              
     case 4: horcrux1.addImage(SalazarSlytherinLocket);
             break;
             
     case 5:horcrux1.addImage(RowenaRavenclawDiadem);
         break;
         
      case 6:horcrux1.addImage(NaginitheSnake);
            break;
            
      default: break;
      
      
   }     
            
    horcrux1.velocityX=-2.5; 
            
     horcrux1.lifetime=380;
            
       horcruxGroup.add(horcrux1);
            
          }
    

}











function enemy() {
  
  if (frameCount % 160 === 0) {
    
    
    voldemort = createSprite(windowWidth, 725, 20, 20);
    
    
    var rand=Math.round(random(1,6)) ;
            
            
            
        switch(rand) {
            
  case 1: voldemort.addImage(enemyImage);
              break;
              
  case 2: voldemort.addImage(enemyImage2); 
            break;
            
            
            default:break;
        }
    voldemort.scale = 0.19;
    
    
    voldemort.collide(ground);
    
    
    voldemort.velocityX = -(3 + 6 * score / 10);
    
    
    voldemort.setCollider("circle", 0, 0, 380);
    
    
    voldemort.debug = false;
    
    
    voldemort.lifetime = 380;
    
    
    voldemort.depth = harrypotter.depth;
    
    
    harrypotter.depth = harrypotter.depth + 1;
    
    
    enemyGroup.add(voldemort);
    
    
    if (localStorage["HighestScore"] < score) {
      
      
      localStorage["HighestScore"] = score;
      
      
    }
    console.log(localStorage["HighestScore"]);
    

    console.log(localStorage["HighestScore"]);
    

  }

}