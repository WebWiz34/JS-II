
// screensize 938 x 755


var borderBarx = 600;
var borderBary = 800;
var pageHeight = 1500;
var pageWidth = 2500;

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
    
    ctx.fillStyle = 'rgb(0, 50, 50)'; 
    ctx.fillRect(borderBarx, 0, 60, pageHeight);
    ctx.fillRect(  , borderBary, pageWidth, 20 );
    ctx.fillRect(0, 200 , borderBary, 80); 
    
    ctx.fillStyle = 'rgb(255, 255, 50)'; 
    ctx.fillRect(borderBarx+60, 0, pageWidth - borderBarx, borderBary);
    
    ctx.fillStyle = 'rgb(100, 255, 25)'; 
    ctx.fillRect( 0 ,  borderBary+50, borderBarx, borderBary + pageHeight );
     
     ctx.fillStyle = 'rgb(0, 50, 0)'; 
     ctx.fillRect(1800, borderBary, 50, borderBary + pageHeight );
     // Black
     ctx.fillStyle = 'rgb(0, 0, 40)'; 
     ctx.fillRect(50, borderBary + 50, pageWidth-borderBary, 50 );
    
    // https://www.rapidtables.com/web/color/RGB_Color.html
    ctx.fillStyle = 'rgb(255, 0, 0)'; 
    ctx.fillRect( 1090 ,  borderBary + 50, borderBarx, borderBary + pageHeight );

    }
  }

