song1="";
song2="";
rightwristx=0;
leftwristx=0;
leftwristy=0;
rightwristy=0;
scorerightwrist=0;
soreleftwrist=0;
function preload(){
  song1=loadSound("music1.mp3");
  song2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);canvas.center
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
posenet=ml5.poseNet(video, modelloaded);
posenet.on("pose", getposes);

}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}
function modelloaded(){
    console.log("posenet is initialized");

}
function getposes(results){
    if(results.length>0)
    {
        console.log(results);
        rightwristx=results[0].pose.rightWrist.x;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
       leftwristy=results[0].pose.leftWrist.y;
       console.log("rightwristx= " +rightwristx)
       console.log("leftwristx= " +leftwristx)
       console.log("rightwristy= " +rightwristy)
       console.log("leftwristy= " +leftwristy)
    }
}