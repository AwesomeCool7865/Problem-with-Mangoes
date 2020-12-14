class Stone {
    constructor(x,y, width, height){
        
        this.body = Bodies.circle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/stone.png");

        World.add (world, this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,0,0, this.width, this.height)
    }
}