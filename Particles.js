class Particle {

    constructor(x,y,r) {
    
    var options= {
    
        restitution: 0.3,
        friction: 5.0,
        density:1,
        
    }
    this.width= width;
    this.height=height;
    this.r=r;
    this.body=Bodies.circle(x, y, this.r, options)
    this.color = color(random(0,225),random(0,225),random(0,225))
    World.add (world, this.body);
    
    }
    
    display () {
    
        var pos= this.body.position;
        var angle = this.body.angle;
       push()
         translate(pos.x,pos.y)
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
         ellipse(0,0, this.r, this.r);
     pop()
    }
    
    }