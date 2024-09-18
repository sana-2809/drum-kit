var audio1= new Audio("./sounds/crash.mp3");
var audio2= new Audio("./sounds/kick-bass.mp3");
var audio3= new Audio("./sounds/snare.mp3");
var audio4= new Audio("./sounds/tom-1.mp3");
var audio5= new Audio("./sounds/tom-2.mp3");
var audio6= new Audio("./sounds/tom-3.mp3");
var audio7= new Audio("./sounds/tom-4.mp3");


document.onkeydown=function(e){
    if(e.keyCode==87)
    {
        audio1.play();
    }
    if(e.keyCode==65)
    {
        audio2.play();
    }
    if(e.keyCode==83)
    {
        audio3.play();
    }
    if(e.keyCode==68)
    {
        audio4.play();
    }
    if(e.keyCode==74)
    {
        audio5.play();
    }
    if(e.keyCode==75)
    {
        audio6.play();
    }
    if(e.keyCode==76)
    {
        audio7.play();
    }
    
    
}