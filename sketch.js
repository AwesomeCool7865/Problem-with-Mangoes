
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, boy, stone;
var mango1, mango2, mango3, mango4, mango5, mango6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree (600, 775, 100, 250);
	boy = new Boy (600, 775, 100, 250);
	stone = new Stone (600, 775, 100, 250);
	tree = new Tree (600, 775, 100, 250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree.display();
  boy.display();
  stone.display();
  
  drawSprites();
 
}



