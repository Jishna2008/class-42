var database,form,game,player,allPlayers;
var gameState=0,playerCount=0;
var car1,car2,car3,car4;
var cars=[];
var y=0,x=0,finish=false;
var carImg1,carImg2,carImg3,carImg4,trackImg;
var bronzeImg,goldImg,silverImg,finishedPlayers=0;
var obstacleX,obstacleY,obstacleG,obstacleImg;

function preload(){
carImg1=loadImage("car1.png");
carImg2=loadImage("car2.png");
carImg3=loadImage("car3.png");
carImg4=loadImage("car4.png");
trackImg=loadImage("track.jpg")
bronzeImg=loadImage("bronze.png");
goldImg=loadImage("gold.png");
silverImg=loadImage("silver.png");
obstacleImg=loadImage("f1.png")
}

function setup() {
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();
    game= new Game();//creating a game object
    game.getState();// calling the getState function fro game class 
    game.start();
    obstacleG=new Group();
}
function draw() {
    background("pink")
    if(playerCount==4){
         game.update(1);
         
    }
    if(gameState==1){
        clear();
        game.play()
    }
    if(finishedPlayers===4){
        game.update(2);
    }
    if(gameState==2&&finishedPlayers===4)
   {
    game.displayRanks();
   }     
drawSprites();
}