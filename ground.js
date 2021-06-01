class Ground {
    constructor(x, y, width, height) {
        
        this.body = Bodies.rectangle(x, y, width, height);
        
        this.image = loadImage("g.jpg");
        //World.add(world, this.body);
      }
      display(){  var angle = this.body.angle;
       this.body.addImage(this.image)
       drawSprites()
      }
}  