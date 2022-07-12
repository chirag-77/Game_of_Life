 var userClickedPattern=[];
 var gamePattern=[];

function playSound(string){
    var audio=new Audio("sounds/"+string+".mp3");
    audio.play();
}
 
 const color=["red","blue","green","yellow"];
 var fired=false;
 var level=0;
 $(document).keypress(function(){
    if(fired==false)
    nextSeq();fired=true;
 })
 function nextSeq(){
    ++level;
    userClickedPattern=[];
    $("#level-title").text("level "+level);
    var next=Math.floor(4*Math.random());
    
 
var randomColor=color[next];
gamePattern.push(randomColor);
$("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomColor);}

$(".btn").click(function(){
var userChosenColour=this.id;
$("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
userClickedPattern.push(userChosenColour);
check(userChosenColour);


});

function check(userChosenColour){
    if(userChosenColour==gamePattern[userClickedPattern.length-1]){
    playSound(userChosenColour);
     if(userClickedPattern.length==gamePattern.length){
        setTimeout(function(){nextSeq()},1000);
     }
       
    }
    else{
        $("body").addClass("game-over");
        playSound("wrong");
        $("#level-title").text("You lose,press A key to restart");
        setTimeout(function(){$("body").removeClass("game-over");startOver();},200);
        
       }

}
function startOver(){
    level=0; fired=false;
     gamePattern=[];
}