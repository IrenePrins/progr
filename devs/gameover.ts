class Gameover{

    private div : HTMLElement
   
    
    constructor(g : Game){
        
        this.div = document.createElement("gameover")
        document.body.appendChild(this.div)
        this.div.innerHTML = "OMG !<br> " + "U COLLECTED 10 BANANAS U SO GREAT!!"

    }
}