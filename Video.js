function setup(){
    canvas= createCanvas(430, 300);
    canvas.position(530,245);

    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 430, 300);
}
function start(){
    objectDetector= ml5.objectDetector('cocosd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detected ";
}
function modelLoaded(){
    console.log("model loaded");
    status= true;
    video.volume(0);
}