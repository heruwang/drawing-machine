let array=[];
let backgroundColor = 200;
function setup() {
  createCanvas(windowWidth, windowHeight);
    background(backgroundColor);
    strokeWeight(5);
    noFill();

}

function draw() {
if (mouseIsPressed){
   backgroundColor-=5;
   background(backgroundColor);
   //line(mouseX, mouseY, pmouseX, pmouseY)；
   array.push([mouseX, mouseY]);

   beginShape();
   for(let i = 0; i < array.length-1; i++){
     //line(array[i][0], array[i][1], array[1+i][0], array[1+i][1]);
     curveVertex(array[i][0], array[i][1]);
   }
   endShape();
 }
}
function keyTyped(){

  if (key ==='s'){
    //save the image
    saveCanvas('fileName', 'png');
  }else if(key === 'd'){
     //display image
     background(255);
     beginShape();
     for(let i = 0; i < array.length-1; i++){
       //line(array[i][0], array[i][1], array[1+i][0], array[1+i][1]);
       curveVertex(array[i][0], array[i][1]);
     }
     endShape() ;
  }else if(key === 'c'){
    clear();
  }
  return false;
}

function mousePressed(){
  array=[];
  backgroundColor = 255;

}
