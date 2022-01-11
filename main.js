noseX = 0;
noseY = 0;
difference = 0;
rightX = 0;
leftX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet Is Intiliazied!');
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX =" + noseX +"noseY =" + noseY + "difference = " + difference);

    leftX = results[0].pose.leftWrist.x;
    rightX = results[0].pose.rightWrist.x;
    difference = Math.floor(leftX - rightX);

}
}

function draw()
{
    background('#d3d3d3');
    document.getElementById("square_side").innerHTML = "Width and Height of the square is =" + difference +"px";
    fill("#000080");
    stroke('#000080');
    square(noseX, noseY, difference);

}