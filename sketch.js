const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,helicopter,package,pack2,package_body;
var helicopter_img,package_img,pack2_img;
var wall1,wall2,wall3;
var package1, package2;
var drop;

function preload()
{
helicopter_img=loadImage("helicopter.png");
package_img=loadImage("package.png");
pack2_img=loadImage("pack (2).jpg")	


}

function setup() {
	createCanvas(800, 700);

	engine=Engine.create();
	world=engine.world;

	pack2=createSprite(width/2+40, 80, 10,10);
	pack2.addImage(pack2_img)
	pack2.scale=0.4;  
	pack2.visible= false;

	package=createSprite(380, 80, 10,10);
	package.addImage(package_img)
	package.scale=0.2
	
	helicopter=createSprite(width/2,200,10,10);
	helicopter.addImage(helicopter_img);
	
	
	


	ground= new Ground(400, 660, 800,20);
	wall1= new Wall(400,640,200,20);
	wall2= new Wall(300,600,20,100);
	wall3= new Wall(500,600,20,100);

	package_body = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true, friction:0.3});
	World.add(world, package_body);

	 Engine.run(engine);

}


function draw() {
	

Engine.update(engine);



 rectMode(CENTER);
 background(0); 

package.x= package_body.position.x-20
package.y= package_body.position.y

pack2.x= package_body.position.x+40
pack2.y= package_body.position.y

  if (keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic( package_body , false);
   

}
if(pack2.y>80){

	pack2.visible=true;
}

  drawSprites();

  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
}





