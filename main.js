img="";
function setup()
{
    canvas = createCanvas(640 , 420);
    canvas.center();
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function preload()
{
  img = loadImage('bags.jpg')
}
function draw()
{
    image(img , 0 ,0,640,420);
    fill("#FF0000");
    text("bag", 65 , 320);
    noFill();
    stroke("#FF0000");
    rect(60 , 300, 200 ,100);
}
