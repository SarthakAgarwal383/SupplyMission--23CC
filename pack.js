class Package{
constructor(x,y,width,height){

var options={
 'restitution': 0.7,
 'friction': 0.3,
 'density': 1.0
}
this.body= Bodies.rectangle(x,y,width,height,options);
this.width= width;
this.height= height;

World.add(world,this.body);
}
display(){
    var p=this.body.position;
    push();
    rectMode(CENTER);
    
    fill(255);
    rect(x, y, this.width, this.height);
    pop();
}
}