canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";

function add() 
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;

}


window.addEventListener("keydown" , my_keydown)

function my_keydown(e)
{
    keypressed = e.keyCode
    console.log(keypressed)
    if(keypressed == '38')
    {
      up();
      console.log("up") 
    }
     if(keypressed == '40')
    {
      down();
      console.log("down")  
    }
    if(keypressed == '37')
    {
      left();
      console.log("left") 
    }
     if(keypressed == '39')
    {
      right();
      console.log("right") 
    }
}


function up()
{
 if(rover_y >= 0)
 {
  rover_y = rover_y-10;

  console.log("when up arrow is pressed,x=" + rover_x + "y= " + rover_y);
  uploadBackground();
  uploadrover();
 }
}

function down()
{
 if(rover_y <= 500)
 {
  rover_y = rover_y + 10;
  console.log("when down arrow is pressed,x=" + rover_x + "y= " + rover_y);
  uploadBackground();
  uploadrover();
 }
}

function left()
{
 if(rover_x >= 0)
 {
  rover_x = rover_x - 10;

  console.log("when left arrow is pressed,x=" + rover_x + "y= " + rover_x);
  uploadBackground();
  uploadrover();
 }
}

function right()
{
 if(rover_x <= 700) 
 {
  rover_x = rover_x + 10;

  console.log("when right arrow is pressed,x=" + rover_x + "y= " + rover_x);
  uploadBackground();
  uploadrover();
 }
}