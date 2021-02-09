
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof
var bob3
var bob2
var bob1
var bob4
var bob5
var rope3
var rope2
var rope1
var rope4
var rope5

function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,400,50)
	bob3 = new Bob(400,400,20)
	bob2 = new Bob(360,400,20)
	bob1=new Bob(320,400,20)
	bob4 = new Bob(440,400,20)
	bob5 = new Bob(480,400,20)
	rope3=new Rope(bob3.body,roof.body,0)
	rope2=new Rope(bob2.body,roof.body,-40)
	rope1=new Rope(bob1.body,roof.body,-80)
	rope4=new Rope(bob4.body,roof.body,40)
	rope5=new Rope(bob5.body,roof.body,80)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  roof.display();
  bob3.display();
 bob2.display();
 bob1.display();
 bob4.display();
 bob5.display();
 rope3.display();
 rope2.display();
 rope1.display();
 rope4.display();
 rope5.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-70})
	}
}



