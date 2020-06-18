const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ball1,ground;


function setup() {
	createCanvas(4200, 1200);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	box3=new Box(1200,500);
	ball1=new Ball(200,550,70);
	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	ground = new Ground(width/2,670,width,20);
	

	//Create a Ground
	//ground = Bodies.rectangle(h/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  box3.display()
  ground.display()
  ball1.display()
 
      

 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:100,y:-250});

	}
}



