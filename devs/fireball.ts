/// <reference path="gameElement.ts" />

class Fireball extends GameElement{

      private ySpeed : number

    constructor(x : number, y : number){
        super(x, y, "fireball")

        this.ySpeed = 3
     
    }

    public update() : void{

        this.y = this.y + this.ySpeed
        this.draw()
    }

    
}