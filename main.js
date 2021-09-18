//Create a reference for canvas 
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
carw=75;
carh=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
//Set initial position for a car image.
carX=80;carY=300;
function add() {
	//upload car, and background images on the canvas.
bgimg=new Image();
bgimg.onload=uploadbg;
bgimg.src=background_image;
carimg=new Image();
carimg.onload=uploadcar;
carimg.src=greencar_image
}

function uploadbg() {
	//Define function ‘uploadBackground’
ctx.drawImage(bgimg,0,0,canvas.width,canvas.height);
}

function uploadcar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(carimg,carX,carY,carw,carh);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
if(carY>=0){
carY=carY-10;
uploadbg();
uploadcar();
}
}

function down()
{
	//Define function to move the car downward
if(carY<=350){
	carY=carY+10;
	uploadbg();
	uploadcar();
}
}

function left()
{
	//Define function to move the car left side
if(carX>=0){
	carX=carX-10;
	uploadbg();
	uploadcar();
}
}

function right()
{
	//Define function to move the car right side
if(carX<=750){
	carX=carX+10;
	uploadbg();
	uploadcar();
}
}
