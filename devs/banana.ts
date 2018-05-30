class Banana{

    private div : HTMLElement
    private x : number = 0
    private y : number = 0

    private screenWidth = window.innerWidth
    private screenHeight = window.innerHeight

    constructor(){
        this.div = document.createElement("banana")
        document.body.appendChild(this.div)
        
        this.position()
    }
    
    public update() : void{

        
        
    }

    public position(){
        this.x = Math.random() * this.screenWidth
        this.y = Math.random() * this.screenHeight
    }

    public getRectangle(){
        return this.div.getBoundingClientRect()
    }

    public removeBanana(){
        this.div.remove()
        
    }
}