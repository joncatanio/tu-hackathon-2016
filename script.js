/* Canvas Elements */
var canvas;
var ctx;
var windowHeight;
var windowWidth;
var backgroundWidth;
var backgroundHeight;
var padding;

var images;

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
   ctx.imageSmoothingEnabled = false;
   ctx.canvas.width  = windowWidth = window.innerWidth;
   ctx.canvas.height = window.innerHeight;
   windowHeight = window.innerHeight;
   
/*   level1 = new Image();
   level1.src = 'images/level1.png';
   level1.onload = function() {
      drawPattern(level1, ctx.canvas.width, ctx.canvas.height);
      //ctx.drawImage(level1, 0, -level1.height + windowHeight);
   }*/
}

/***** Load Images *****/
function loadImages(sources, callback) {
   images = {};
   var loadedImages = 0;
   var numImages = 0;
   // get num of sources
   for(var src in sources) {
      numImages++;
   }
   for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
         if(++loadedImages >= numImages) {
            callback(images);
         }
      };
      images[src].src = sources[src];
   }
}

var sources = {
   level1: 'images/level1.png'
};

loadImages(sources, function(images) {
/*   var tempCanvas = document.createElement("canvas"),
      tCtx = tempCanvas.getContext("2d");

   tempCanvas.width = ctx.canvas.width;
   tempCanvas.height = ctx.canvas.height;
*/
   backgroundWidth = (1 / 2) * windowWidth;
   backgroundHeight = (images.level1.height / images.level1.width) * backgroundWidth;
   padding = (windowWidth - backgroundWidth) / 2;

   ctx.drawImage(images.level1, 0 + padding, -backgroundHeight + windowHeight, backgroundWidth, backgroundHeight); 

  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  // ctx.fillStyle = ctx.createPattern(tempCanvas, 'repeat');

  // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});

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
      dy+=5;
      isDirty = true;
   }
   else if (Keys.down) {
      if (!lock_choice) {
      	selectChoiceB();
      }
   }

   if (Keys.left) {
      if (!lock_choice) {
      	selectChoiceA();
      }
   }
   else if (Keys.right) {
      if (!lock_choice) {
      	selectChoiceC();
      }
   }

   if (isDirty) render();
   requestAnimationFrame(update);
}
requestAnimationFrame(update);

function render() {
   //ctx.setTransform(1,0,0,1,dx,dy);
   //ctx.fillRect(-dx, -dy, ctx.canvas.width, ctx.canvas.height);
   ctx.drawImage(images.level1, 0 + padding, -backgroundHeight + windowHeight + dy, backgroundWidth, backgroundHeight);
   isDirty= false;
}
