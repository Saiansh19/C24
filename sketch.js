var paperBall, dustbinObject;
var groundObject;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1600, 700);

	rectMode(CENTER); 
	engine = Engine.create(); 
	world = engine.world; 
	dustbinObject= new dustbin(1200,650);
	paperBall= new paper(200,440,40);
	groundObject= new ground(width/2,670,width,20);
	//Create a Ground 
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 
	Engine.run(engine); 
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinObject.display(); 
  paperBall.display(); 
  groundObject.display();

  drawSprites();
 
}

function keyPressed(){ 
	if (keyCode === UP_ARROW){
	 Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:85,y:-85});
	 }
}


