class Bird{
    constructor(x,y,w,h){
        var option={
            restitution:2,
            density:1.0,
            friction:1.0
        
        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.width=w
        this.height=h
        World.add(world,this.body)
     }
     
     display(){
         var pos=this.body.position
         push()
         rectMode(CENTER)
         rect(pos.x,pos.y,this.width,this.height)
         pop()
     }
     
     } 
    
