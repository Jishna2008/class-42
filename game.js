// .on is a listener which will keep listening to the gamestate from the database.
//when the gamestate is changed in the database,the function  passed as an argument to it is excuted.
//  here the function is directily written inside the .on() listener;

//"/" refers to the main database inside which the gameState is created.
//  value is an event when fired callback function will be excuted.
//callback will have reference to the data snapshot of the data of the node being referd by ref.
// val() is a function which extractes the value from the snapshot which is of gamestate and
// will be fetched and stored in our game variable i.e gameState.
class Game {
   constructor() { }
   // this function will read the database from the backend

   getState() {
      var gameStateRef = database.ref('gamestate');
      gameStateRef.on("value", function (data) {
         gameState = data.val();
      });

   }
   async start() {

      if (gameState == 0) {
         player = new Player();
         var playerCountRef = await database.ref('playercount').once("value");

         if (playerCountRef.exists()) {
            player.getCount();
            player.getFinishedPlayers();
         }
         form = new Form();
         form.display();
      }
      car1 = createSprite(300, 500);
      car1.addImage(carImg1);
      car2 = createSprite(500, 500);
      car2.addImage(carImg2);
      car3 = createSprite(700, 500);
      car3.addImage(carImg3);
      car4 = createSprite(900, 500);
      car4.addImage(carImg4);
      cars = [car1, car2, car3, car4];
// take two variables x,y as 0 ,create an obstacle group,then use an for loop and run from 1 to4/5,
 
  }
   

   play() {
      form.disappear();
      textSize(32);
      text("gameStart", 100, 100);
      //var xpos=150////chk this...remove

      Player.getPlayerInfo();
      background("white");                                             // give background
      if (allPlayers !== undefined) {

         image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight *5);

         for (var i = 1; i <= playerCount; i++) {
            var playerIndex = "player" + i;
            x = allPlayers[playerIndex].xpos;                                ///chk
            y = displayHeight - allPlayers[playerIndex].distance;

        //    console.log(y)
            cars[i - 1].y = y;
            cars[i - 1].x = x;

            if (i === player.index) {

               // background("black")
               push();
               // cars[i-1].shapeColor="red"
               fill("red")
               text(allPlayers[playerIndex].name, cars[i - 1].x, cars[i - 1].y + 75);
               pop();
               camera.position.x = displayWidth / 2
               camera.position.y = cars[i - 1].y;

            } else {
               push();
               fill("yellow")
               textSize(20);
               text(allPlayers[playerIndex].name, cars[i - 1].x, cars[i - 1].y + 75);
               pop()
            }
         }
      }
      if (finish == false) {

         if (keyDown(UP_ARROW)) {
            player.distance += 100;
           // player.xPos+=5;
            player.update();
         }
         if (keyDown(LEFT_ARROW)) {
            player.xPos -= 2;
            player.update();
         }
         if (keyDown(RIGHT_ARROW)) {
            player.xPos += 2;
            player.update();
         }
      }
      if (finish===false&&player.distance > displayHeight * 5-100) {
         finish = true;
         player.rank=finishedPlayers+1;
         Player.updateFinishedPlayers();
         player.update();
      }
   }
   //update function will update the gameState in the database to
   // a value passed to it inside the ()
   update(state) {
      database.ref('/').update({ gameState: state })
      gameState = state;
   }

   // end() {
   //    text("Play Again", displayWidth / 2, displayHeight / 2 + 500);
   //    /// reset();
   //    form.appear(); //chk
   // }
      displayRanks()
      {
         background("yellow");
         camera.position.x=displayWidth/2;
         camera.position.y=displayHeight/2+100;
    
      imageMode(CENTER);
      image(bronzeImg,displayWidth/2-200,displayHeight/2+200,100,100)
      image(goldImg,displayWidth/2,displayHeight/2,100,100);
      image(silverImg,displayWidth/2+200,displayHeight/2+130,100,100)
      for(var i=1;i<=4;i++)
     {
       var playerIndex="player"+i;
       var name=allPlayers[playerIndex].name;
       var place=allPlayers[playerIndex].rank;
       push();
       fill("blue");
       textFont("Edwardian Script ITC")
       textSize(45)
       if(place===1)
      {
         text("1st:"+name,displayWidth/2-50,displayHeight/2+100)
       } 
       else if(place===2){
          text("2nd:"+name,displayWidth/2+150,displayHeight/2+230)
       }else if(place==3){
          text("3rd:"+name,displayWidth/2-250,displayHeight/2+300);
       }
      }
      }}



// WE need to give xpositions to all the players in form and read them inngame.js
// And adjust track image height ...mult by 5 ie increase it to adjust
