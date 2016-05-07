/* drawer elements */

var drawer = document.getElementById('drawer');
var choice_A = document.getElementById('choice_A_text');
var choice_B = document.getElementById('choice_B_text');
var choice_C = document.getElementById('choice_C_text');

/* Canvas Elements */
var canvas;
var ctx;

/* Images */
var img_chicago;

init();

function init() {
   canvas = document.getElementById('mainScene');
   ctx = canvas.getContext('2d');
   ctx.canvas.width  = window.innerWidth;
   ctx.canvas.height = window.innerHeight;
   
   img_chicago = new Image(ctx.canvas.width, ctx.canvas.height);
   img_chicago.src = 'images/ricknmorty.jpg';
   img_chicago.onload = function() {
      var pattern = ctx.createPattern(this, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
   }
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
      console.log("down");
      /* ADD CHANGES HERE */
      /* May not need to render changes if the boxes are just selecting. */
      //isDirty = true;
   }

   if (Keys.left) {
      console.log("left");
      /* ADD CHANGES HERE */
      /* May not need to render changes if the boxes are just selecting. */
      //isDirty = true;
   }
   else if (Keys.right) {
      console.log("right");
      /* ADD CHANGES HERE */
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
