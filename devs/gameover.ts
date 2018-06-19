class Gameover{

    private div : HTMLElement
   
    
    constructor(){
        
        this.div = document.createElement("gameover")
        document.body.appendChild(this.div)
        this.div.innerHTML = "OMG !<br> " + "U COLLECTED 10 BANANAS U SO GREAT!!"

    }
}