
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	bob1 = new bob(100,400,(30-20)/2,circle);
	bob2=new bob(200,400,(30-20)/2,circle);
	bob4=new bob(300,400,(30-20)/2,circle);
	
	bob5=new bob(400,400,(30-20)/2,circle);
roof1 = new roof(250,100,500,10);
rope1 = new rope(bob1.body,roof1.body,-bobDiameter*2,0);
rope2 = new rope(bob2.body,roof1.body,-bobDiameter*2,0);
rope4 = new rope(bob4.body,roof1.body,-bobDiameter*2,0);
rope5 = new rope(bob5.body,roof1.body,-bobDiameter*2,0);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob5.display();
  bob2.display();
  bob4.display();
  bob1.display();
roof1.display();
rope2.display();
rope4.display();
rope5.display();


 
}



