class Level{

    private bananas : Banana[] = []
    private monkey : Monkey
    private background : any
    private game : Game
    private score : Element

    private counter : number = 0
    
   
        constructor(g : Game){

            this.background = document.createElement("background")
            document.body.appendChild(this.background)
            this.background.style.height = window.innerHeight
            this.background.style.width = window.innerWidth   

            this.game = g
            

             this.monkey = new Monkey(500 , 500)
             
                    
            for(let i = 0; i < 10; i++){
                this.bananas.push(new Banana((Math.random() * (window.innerWidth - 162)) , Math.random() * (window.innerHeight - 120)))
                
            }

            
            
            this.score = document.createElement("score")
            this.score.innerHTML = 'score = ' 
             

           this.update()

        }
    
    
    
        public update(){
            for(var banana of this.bananas){
                if(this.checkCollision(banana.getRectangle(), this.monkey.getRectangle())){
                    console.log("collision functie wordt aangeroepen")
                    this.counter++
                    this.score.innerHTML = 'score = ' + this.counter
                    this.deleteBanana(banana)
                    banana.removeBanana()
                }
                
            } 
            
        if(this.counter == 10 || this.counter === 10){
            this.game.startGameOver()
        }
    
            
        }

        private checkCollision(a: ClientRect, b: ClientRect){
            return (a.left <= b.right &&
                b.left <= a.right &&
                a.top <= b.bottom &&
                b.top <= a.bottom)
        }

        private deleteBanana(banana: Banana) : void{
            
            //plek van banana in array
            let i = this.bananas.indexOf(banana)

            //verwijderd de banaan in array
            this.bananas.splice(i, 1)
        }
    
}    
       

        
    
    
