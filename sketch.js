let array=[];
function setup() {
  createCanvas(600, 600);
    background(220);
    strokeWeight(15);
}

function draw() {
if (mouseIsPressed){

   line(mouseX, mouseY, pmouseX, pmouseY);
   array.push([mouseX, mouseY]);
 }
}
function keyTyped(){

  if (key ==='s'){
    //save the image
    saveCanvas('fileName', 'png');
  }else if(key === 'd'){
     //display image
     console.log(array);
  }
  return false;
}
