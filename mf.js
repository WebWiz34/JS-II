var rectWidth = 350;
var rectHeight = 300;
var startingLine = 10;


var x = 50 + 50;
var y = startingLine + 350;
var z = 400 * 2;
var finishLine = (rectHeight/ 2) + 1500; 


var canvas = document.getElementById('creativeCoding');
var ctx = canvas.getContext('2d');
dpi = window.devicePixelRatio;


function fix_dpi() {
    let style = {
      height() {
        return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
      },
      width() {
        return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
      }
    }
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}


function draw() {
  var canvas = document.getElementById('creativeCoding');
  if (canvas.getContext) {
   
    fix_dpi(); 
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(255, 255, 0)';


/* now we will pass the variable */


    ctx.fillRect(startingLine, x, rectWidth, rectHeight);
    ctx.fillRect(startingLine, y, rectWidth, rectHeight);
    ctx.fillRect(startingLine, z, rectWidth, rectHeight);
    ctx.fillRect(finishLine, 40, 10, 1500);
