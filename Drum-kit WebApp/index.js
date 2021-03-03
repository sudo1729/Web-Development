
// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("Clicked");
// }


// function BellBoy(name, age, languages){
//     this.name = name;
//     this.age = age;
//     this.languages = languages;
// }
// var bellBoy1 = new BellBoy("Akhilesh",20,['hindi','English']);

// console.log(bellBoy1.name)
function keypres(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}



function buttonAnimation(key){
    var activeButton = "."+key
    document.querySelector(activeButton).classList.add("pressed")
    setTimeout(function(){
        document.querySelector(activeButton).classList.remove("pressed")
    },100);
    
}


var events = document.querySelectorAll("button.drum")
for(var i=0;i<events.length;i++){
    events[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        //console.log(buttonInnerHTML)
        keypres(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    })
}

document.addEventListener("keydown",function(event){
    keypres(event.key);
    buttonAnimation(event.key)
})

