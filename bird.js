class bird {
constructor(x,y,width,height){
var options = {
restitution:0.9,
density:1,
friction:0.7
}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world,this.body)
}
display(){
this.body.position.x=mouseX
this.body.position.y=mouseY
push()
rotate(this.body.angle)
translate(this.body.position.x,this.body.position.y)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()
}

}