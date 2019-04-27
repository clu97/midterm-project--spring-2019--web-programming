var button;
var chooseColor;
var sound;
var c;
var strokew;

function preload(){
    sound = loadSound('pop.mp3');
}

function setup() {
    var myCanvas = createCanvas(640, 500);
    myCanvas.parent('sketch');
    background(255);
	//c = color('#FFB2B2');

    button = createButton('Save');
    button.position(550,695);
    button.parent('sketch');
    button.mousePressed(saveCanvas);

    strokew = 5;

    strokeWeight(strokew);
    input = createInput().attribute('placeholder','Stroke Size');
    input.position(160, 695);

    button = createButton('Enter');
    button.position(input.x + input.width+5, 695);
    button.mousePressed(changeStroke);

    button = createButton('Reset');
    button.position(500,695);
    button.parent('sketch');
    button.mousePressed(resetSketch);

    chooseColor = createColorPicker('#FFB2B2');
    chooseColor.position(80,690);
    c = chooseColor.color();
    chooseColor.input(changeColor);

 	/*
 	button = createButton('Change Color');
 	button.position(80,665);
 	button.parent("sketch");
 	button.mousePressed(changeColor);
 	*/

}
 
function draw()
{
	/*
	// display instructions
	noStroke();
	fill(200);
	rect(0, 0, width, 25);
	fill(0);
	text("Press the 'R' key on your keyboard to change the color", 10, 15);
	*/


}

function changeColor(){
	//c = color(random(255), random(255), random(255));
    c = chooseColor.color();
}
function changeStroke(){
    strokew = input.value();
}

function mouseDragged() 
{ 
    strokeWeight(strokew);
    stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function mouseClicked(){
    if ((mouseX >= 0) && (mouseX < (640)) &&
        (mouseY >= 0) && (mouseY < (500))) {
        sound.play();
        } 
    else {
            sound.stop();
        }

}
 
function keyPressed()
{
    if(key == 'e' || key == 'E')
     {
        c = color(255, 255, 255);
    }
}

function saveCanvas(){
    save('drawing.png');
}

function resetSketch(){
    clear();
    background(255);
}
