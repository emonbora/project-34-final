class bob
{
    constructor(x,y,color){
       var options = {
           isStatic : false,
           restitution:1,
           friction:0,
           density:0.8,
           frictionAir:0,
           slop:1,
           inertia:Infinity
       }
       this.x=x;
       this.y=y
       this.body=Bodies.rectangle(x,y,40,40,options)
       this.color = color;
       World.add(world,this.body);

    }
    display()
    {
        var pos=this.body.position;
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight(3);
        fill(this.color)
        ellipse(0,0,60,60);
        pop() 
    }
}