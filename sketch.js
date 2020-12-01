
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	Paper = new paper (100,250,15);

	box1= new dustbin(600,350,200,20);
	box2= new dustbin(500,310,20,100);
	box3= new dustbin(700,310,20,100);

	Engine.run(engine);

	ground = Bodies.rectangle(width / 2, 400, width, 10,
		{ isStatic: true});

		World.add(world, ground);

	}
	  
  


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  box1.display();
  box2.display();
  box3.display();
  Paper.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW ) {
	  Matter.Body.applyForce(Paper.body, Paper.body.position,{x:15,y:-25});
	}
  }

