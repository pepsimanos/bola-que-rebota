class Bird {
  constructor(x, y) {
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':1.5
    }
    this.body = Bodies.circle(x, y, 22.5, options);
    this.radius= 45;

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke('orange');
    strokeWeight(4);
    fill('red');
    ellipse(0, 0, this.radius);
    pop();
  }
};
