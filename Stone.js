class Stone{
    constructor(x,y,height,width){
    var options={
      restitution:0.8,
      friction:0.9,
      density:12   
}
    this.x=x;
    this.y=y;
    this.body= Bodies.rectangle(x,y,width,height,options)
	World.add(world, this.body);
}
display()
{
        var stonepos=this.body.position;		
        push()
        translate(stonepos.x, rubberpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("gray");
        
        pop()
}
} 

