// creating the three : textbox,title and the input and they are positioned
//arrow functions binds the function to the original object which calls it raher than the button element.
//here mousePrreessed is called inside the display() which is called by the form object .
//()=> arrow function ensures that'this' remains bond to the form object.
//value() is html function to input  the value in the input textbox.

class Form{
    constructor(){
        this.title=createElement('h1');
        this.title.html('Car Racing Game');
        this.title.position(displayWidth/2,50);
  

        this.input=createInput("Name");
        this.input.position(displayWidth/2,displayHeight/2-200);

        this.button=createButton("Play");
        this.button.position(displayWidth/2,displayHeight/2-100);
        
        this.reset=createButton("Reset");
        this.reset.position(displayWidth-100,100)

        // this.gameOver=createElement('h1');
        // this.gameOver.html('GameOver!');
    }
    

    display(){
    
        this.button.mousePressed(()=>{
            console.log(this)
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();

            this.greetings=createElement('h3');
            this.greetings.html("Hello "+player.name);
            this.greetings.position(displayWidth/2,displayHeight/2-300);;
            
            playerCount+=1;
            player.updateCount(playerCount);

            player.index=playerCount;
            player.update();
            
            if(playerCount===1){
                player.xPos=375;
            }
            if(playerCount===2){
                player.xPos=575;
            }
            if(playerCount===3){
                player.xPos=775;
            }
            if(playerCount===4){
                player.xPos=975;
            }
            player.update();
        } );
          
     this.reset.mousePressed(()=>{
       game.update(0);
       player.updateCount(0);   }); 
        // finishedPlayers=0;

    }

    disappear(){
        this.title.hide();
        this.greetings.hide();
    }

    // appear(){
    //     this.gameOver.position(displayWidth/2,50);
    // }


}