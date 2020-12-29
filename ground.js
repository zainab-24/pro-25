class Ground
{
constructor(x,y,widht,height){
var options={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,widht,height,options);
this.widht=widht
this.height=height
World.add(world,this.body);
}

display(){
    fill("white");
rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,this.widht,this.height);
}
}