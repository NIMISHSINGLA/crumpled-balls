
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trashbin1,trashbin2,trashbin3;
var groundd;
var paperr;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	groundd = new ground(450,580,900,15)
	trashbin1 = new peice(650,565,200,17);
	trashbin2 = new peice(750,523,17,100);
	trashbin3 = new peice(550,523,17,100);
	paperr = new paper(40,560,15,15);
	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  
  drawSprites();
  groundd.display();
  trashbin1.display();
  trashbin2.display();
  trashbin3.display();
  paperr.display();
 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperr.body,paperr.body.position,{x:37,y:-37});
	}
}




