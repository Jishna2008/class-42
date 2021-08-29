class Player
{
    constructor()
    {
      this.index =null;
      this.distance=0;
      this.name=null;
      this.xPos=0;
      this.rank=0;
    }

    getCount()
    {
      var playerCountRef=database.ref('playerCount');
      playerCountRef.on("value",function (data) {
      playerCount= data.val() });
   
    }

    updateCount(playerCount)
    {
        database.ref('/').update({playerCount:playerCount})
    }

    update(){
      var playerIndex="player"+this.index
      database.ref(playerIndex).set({name:this.name,distance:this.distance,xpos:this.xPos,
        rank:this.rank})
      console.log(playerIndex);
    }

    static getPlayerInfo(){
      var playerDataRef=database.ref('/')
      playerDataRef.on("value",data=>{
        allPlayers=data.val();
      })
    }
    getFinishedPlayers(){
    var finishedPlayersRef=database.ref('finishedPlayers');
    finishedPlayersRef.on("value",data=>{finishedPlayers=data.val();})
      }

    static updateFinishedPlayers(){
      database.ref('/').update({finishedPlayers:finishedPlayers+1})
    }
}