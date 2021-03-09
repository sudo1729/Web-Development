
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    playAudio(randomChosenColour)

}

$("div.btn").click(function(event){
    userChoosenColor = ""+event.target.id
    
    //console.log(event.target.id)
    userClickedPattern.push(userChoosenColor)
    //console.log(userClickedPattern)
    playAudio(userChoosenColor)
    animatePress(userChoosenColor)
})

function playAudio(name){
    var location="sounds/"+name+".mp3";
    var audio = new Audio(location);
    audio.play();
}


function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed")
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
    },100);
}

$(document).on("keypress",function(event){
    if()
})

