const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var monster;
var superman;
function preload(){
 // getBackgroundImage();
   bg_img=loadImage("GamingBackground.png");
}
   
function setup(){
   createCanvas(3000,800);
  // createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,600,1200,20);
  box1 = new Box(900,100,70,70);
  box2 = new Box(900,100,70,70);
  box3 = new Box(900,100,70,70);
  box4 = new Box(900,100,70,70);
  box5 = new Box(900,100,70,70);
  box6 = new Box(900,100,70,70);
  box7 = new Box(800,100,70,70);
  box8 = new Box(800,100,70,70);
  box9 = new Box(800,100,70,70);
  box10 = new Box(800,100,70,70);
  box11 = new Box(800,100,70,70);
  box12 = new Box(800,100,70,70);
  box13 = new Box(700,100,70,70);
  box14 = new Box(700,100,70,70);
  box15 = new Box(700,100,70,70);
  box16 = new Box(700,100,70,70);
  box17 = new Box(700,100,70,70);
  box18 = new Box(700,100,70,70);
  box19 = new Box(700,100,70,70);
  box20 = new Box(700,100,70,70);
  superman = new Superman(200,200,80,80);
  rope = new Rope(superman.body,{x:500, y:50});
  monster = new Monster(1000,100,170,170);
}

function draw(){
   background("bg_img");
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6 .display();
    box7.display();
    box8.display();
    box9  .display();
    box10.display();
    box11 .display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    superman.display();
    rope.display();
    ground.display();
    monster.display();
  }

  function mouseDragged(){
      //if (gameState!=="launched"){
          Matter.Body.setPosition(superman.body, {x: mouseX , y: mouseY});
      //}
  }

