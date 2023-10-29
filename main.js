song="";

function preload(){
    song=loadSound("insane.mp3");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

}

function play(){
    song.play();
}

function draw(){
    image(video,0,0,500,500);
}