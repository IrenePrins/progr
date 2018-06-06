/// <reference path="gameElement.ts" />

class Fireball extends GameElement{

      private ySpeed : number

    constructor(x : number, y : number){
        super(x, y, "fireball")

        this.ySpeed = 3
        this.update()
     
    }

    public update() : void{

        this.y = this.y + this.ySpeed
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    
}