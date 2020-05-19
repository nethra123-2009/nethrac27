class chain{
    constructor(bodyA,bodyB){
        var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness:0.05,
        length: 3
        }
        this.chain = Constraint.create(options);
        World.add(world,chain);
    }
    display(){
     var pos1 = this.chain.bodyA.position;
    var pos2 = this.chain.bodyB.position;
    line(pos1.x,pos1.y,pos2.x,pos2.y);
    }
}