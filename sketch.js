var gameState = 0
var playerCount = 0
var database 
var form,player,game
function setup (){
    createCanvas(600,800)
    database = firebase.database()
    game=new Game()
    game.getState()
    game.start()
}
function draw(){

}
