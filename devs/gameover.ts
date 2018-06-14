class Gameover{

    private div : HTMLElement
    private game : Game
    
    constructor(g:Game){
        this.game = g
        this.div = document.createElement("gameover")
        document.body.appendChild(this.div)
        this.div.innerHTML = "OMG !<br> " + "U COLLECTED 10 BANANAS U SO GREAT!!"
    }
}