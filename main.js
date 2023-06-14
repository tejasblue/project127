song="";
song1="";

function preload()
{
    song=loadSound("music.mp3")
    song1=loadSound("AITO.mp3")
}

function setup(){
    canvas=createCanvas(500,400);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}



function play1()
{
    song1.play1();
}