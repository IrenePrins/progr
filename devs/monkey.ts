class Monkey{
    
    private div : HTMLElement

    constructor(left : number, right : number){
        this.div = document.createElement("monkey")
        document.body.appendChild(this.div)
    }

    public update() : void{

    }

    public getRectangle(){
        return this.div.getBoundingClientRect()
    }
}