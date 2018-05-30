class Fireball{

    private div : HTMLElement
    private x : number
    private y: number
    private ySpeed : number

    private screenWidth = window.innerWidth
    private screenHeight = window.innerHeight

    constructor(){
        this.ySpeed = 3
        this.screenHeight = 0

        this.div = document.createElement("fireball")
        document.body.appendChild(this.div)

        this.x = Math.random() * this.screenWidth
        this.y = Math.random() * -5000
    }

    public update() : void{
        this.y = this.y + this.ySpeed
        this.div.style.transform = `transform(${this.x}px, ${this.y}px)`
    }

    
}