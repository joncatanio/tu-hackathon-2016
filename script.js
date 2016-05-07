/* Canvas Elements */
var canvas;
var ctx;

/* Images */
var img_chicago;
var img_iowa;
var img_filler1;

/* drawer elements */
var drawer;
var choice_A;
var choice_B;
var choice_C;

var lock_choice;
let hideDelay = 4000;

init();

function init() {
	setTimeout(showDrawer, 2000);
	lock_choice = false;
	/* drawer elements */

   drawer = document.getElementById('drawer');
   choice_A = document.getElementById('choice_A');
   choice_B = document.getElementById('choice_B');
   choice_C = document.getElementById('choice_C');

   canvas = document.getElementById('mainScene');
   ctx = canvas.getContext('2d');
   ctx.canvas.width  = window.innerWidth;
   ctx.canvas.height = window.innerHeight;
   
   img_chicago = new Image();
   img_chicago.src = 'images/c1.png';
   img_chicago.onload = function() {
      drawPattern(img_chicago, ctx.canvas.width, ctx.canvas.height);
   }
}

function hideDrawer() {
	drawer.style.height = "0px";
}

function showDrawer() {
	drawer.style.height = "165px";
	lock_choice = false;
}

function selectChoiceA() {
	//choice_A.style.backgroundColor = "whitesmoke"
	choice_B.style.opacity = "0.3"
	choice_C.style.opacity = "0.3"
	setTimeout(hideDrawer, hideDelay);
	lock_choice = true;
}

function selectChoiceB() {
	//choice_B.style.backgroundColor = "whitesmoke"
	choice_A.style.opacity = "0.3"
	choice_C.style.opacity = "0.3"
	setTimeout(hideDrawer, hideDelay);
	lock_choice = true;
}

function selectChoiceC() {
	//choice_C.style.backgroundColor = "whitesmoke"
	choice_A.style.opacity = "0.3"
	choice_B.style.opacity = "0.3"
	setTimeout(hideDrawer, hideDelay);
	lock_choice = true;
}


// ******* Movement *******
var Keys = {
   up: false,
   left: false,
   right: false
   },
   dx = 0,
   dy = 0;

render();

window.onkeydown = function(e) {
   var kc = e.keyCode;
   e.preventDefault();

   if (kc === 37) Keys.left = true;
   else if (kc === 38) Keys.up = true;
   else if (kc === 39) Keys.right = true;
   else if (kc === 40) Keys.down = true;
};

window.onkeyup = function(e) {
   var kc = e.keyCode;
   e.preventDefault();

   if (kc === 37) Keys.left = false;
   else if (kc === 38) Keys.up = false;
   else if (kc === 39) Keys.right = false;
   else if (kc === 40) Keys.down = false;
};

var isDirty = false;

function update() {
   if (Keys.up) {
      console.log("up");  
      dy+=3;
      isDirty = true;
   }
   else if (Keys.down) {
      // console.log("down");
      if (!lock_choice) {
      	selectChoiceB();
      }

      /* May not need to render changes if the boxes are just selecting. */
      dy-=3;
      isDirty = true;
   }

   if (Keys.left) {
      // console.log("left");
      if (!lock_choice) {
      	selectChoiceA();
      }

      /* May not need to render changes if the boxes are just selecting. */
      //isDirty = true;
   }
   else if (Keys.right) {
      // console.log("right");
      if (!lock_choice) {
      	selectChoiceC();
      }

      /* May not need to render changes if the boxes are just selecting. */
      //isDirty = true;
   }

   if (isDirty) render();
   requestAnimationFrame(update);
}
requestAnimationFrame(update);

function render() {
   ctx.setTransform(1,0,0,1,dx,dy);
   ctx.fillRect(-dx, -dy, ctx.canvas.width, ctx.canvas.height);
   isDirty= false;
}

function drawPattern(img, xSize, ySize) {
   var tempCanvas = document.createElement("canvas"),
      tCtx = tempCanvas.getContext("2d");

   tempCanvas.width = xSize;
   tempCanvas.height = ySize;
   tCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, xSize, ySize);

   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
   ctx.fillStyle = ctx.createPattern(tempCanvas, 'no-repeat');

   ctx.fillRect(0, 0, canvas.width, canvas.height);
}
