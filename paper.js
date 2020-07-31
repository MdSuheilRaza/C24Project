class Paper{
    constructor(x,y,radius,angle){
        var options={
            'isStatic':false,
            'retitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world, this.body);

    }

    display(){
    var angle = this.body.angle;
    push();
    circleMode(CENTER);
    rotate(angle);
    fill(255);
    circle(0,0,this.radius);
    pop();
    }
}