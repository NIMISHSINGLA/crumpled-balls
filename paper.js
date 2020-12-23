class paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.2,
            density:1.2,
            friction:0.5
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        fill(255,0,255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius)
        
    }
}