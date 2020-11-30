
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var chain1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
  world = engine.world;
  
 var bobDiameter=40;

 roof=new Roof(width/2,height/4,width/7,20);
 bobDiameter=40;

	startBobPositionX=width/2;
  startBobPositionY=height/4+500;
  
  bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
  bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
  bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
  bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
  bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

chain1=new Chain(bob1.body,roof.body,-bobDiameter*2,0);
chain2=new Chain(bob2.body,roof.body,-bobDiameter,0);
chain3=new Chain(bob3.body,roof.body,0,0)
chain4=new Chain(bob5.body,roof.body,+bobDiameter*2,0);
chain5=new Chain(bob4.body,roof.body,+bobDiameter,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();


  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:-50})
  }
  }
  
  
  
  



