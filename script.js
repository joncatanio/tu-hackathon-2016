/* Canvas Elements */
var canvas;
var ctx;
var windowHeight;
var windowWidth;
var backgroundWidth;
var backgroundHeight;
var padding;
var trainWidth;
var trainHeight;
var trainPadding;
var trainPaddingTop;

/* Images */
var images;

/* Movement/Functionality */
var trainSpeed = 2;

/* drawer elements */
var drawer;
var choice_A;
var choice_B;
var choice_C;

/* drawer helpers */
var sectionInterval;
var totalInterval;
var curSection;
var sec3seen;
var sec5seen;
var sec7seen;
var sec8seen;
var sec11seen;
var sec13seen;

var gameInfo;
var feed;
var cash;

var post_game;

var choice_made;
var choice_required;
let hideDelay = 4000;

init();

function init() {
	choice_made = false;
	choice_required = true;
	/* drawer elements */

   drawer = document.getElementById('drawer');
   message = document.getElementById('message');
   choice_A = document.getElementById('choice_A');
   choice_B = document.getElementById('choice_B');
   choice_C = document.getElementById('choice_C');

   gameInfo = document.getElementById("game_info");
   feed = document.getElementById("action_feed");
   cash = document.getElementById("cash");

   post_game = document.getElementById("post_game");

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

   setTimeout(presentChoices("You're leaving chicago", "A", "A!", "B", "B!", "C", "C!"), 2000);
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
   level1: 'images/level1.png',
   train: 'images/train_cars.png'
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

   trainWidth = (1/8) * backgroundWidth;
   trainHeight = (images.train.height / images.train.width) * trainWidth;
   trainPadding = padding + (backgroundWidth / 2) - (trainWidth / 2);
   trainPaddingTop = (1/2) * windowHeight;
   ctx.drawImage(images.train, 0 + trainPadding, 0 + trainPaddingTop, trainWidth, trainHeight);

   /* Calculate drawer intervals. */
   sectionInterval = backgroundHeight / 13; // 13 screens total, drawer every two.
   totalInterval = sectionInterval;
   curSection = 1;
   sec3seen = sec5seen = sec7seen = sec8seen = sec11seen = sec13seen = false;
});

function hideDrawer() {
	drawer.style.height = "0px";
}

function showDrawer() {
	drawer.style.height = "165px";
	choice_made = false;
}

function presentChoices(msg, a_title, a_txt, b_title, b_txt, c_title, c_txt ) {
	message.innerHTML = msg;
	choice_A.childNodes[1].innerHTML = a_title;
	choice_A.childNodes[3].innerHTML = a_txt;

	choice_B.childNodes[1].innerHTML = b_title;
	choice_B.childNodes[3].innerHTML = b_txt;

	choice_C.childNodes[1].innerHTML = c_title;
	choice_C.childNodes[3].innerHTML = c_txt;

	showDrawer();
}

function selectChoiceA() {
	//choice_A.style.backgroundColor = "whitesmoke"
	choice_B.style.opacity = "0.3"
	choice_C.style.opacity = "0.3"
	newActionFeedItem("Sprouted wings and flew away.");
	setTimeout(hideDrawer, hideDelay);
	choice_made = true;
	choice_required = false;
}

function selectChoiceB() {
	//choice_B.style.backgroundColor = "whitesmoke"
	choice_A.style.opacity = "0.3"
	choice_C.style.opacity = "0.3"
	newActionFeedItem("Sprouted wings and flew away.");
	setTimeout(hideDrawer, hideDelay);
	choice_made = true;
	choice_required = false;
}

function selectChoiceC() {
	//choice_C.style.backgroundColor = "whitesmoke"
	choice_A.style.opacity = "0.3"
	choice_B.style.opacity = "0.3"
	newActionFeedItem("Sprouted wings and flew away.");
	setTimeout(hideDrawer, hideDelay);
	choice_made = true;
	choice_required = false;
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
   if (Keys.up && !choice_required) {
      console.log("up");  
      dy+=trainSpeed;
      isDirty = true;
   }
   else if (Keys.down) {
      if (!choice_made) {
      	selectChoiceB();
      }
   }

   if (Keys.left) {
      if (!choice_made) {
      	selectChoiceA();
      }
   }
   else if (Keys.right) {
      if (!choice_made) {
      	selectChoiceC();
      }
   }

   if (isDirty) render();
   requestAnimationFrame(update);
}
requestAnimationFrame(update);

function render() {
   if (dy > totalInterval) {
      totalInterval += sectionInterval;
      ++curSection;
   }

   /* Let the magic be magical. */
   if ((curSection == 3 && !sec3seen) || (curSection == 5 && !sec5seen) || 
    (curSection == 7 && !sec7seen) || (curSection == 8 && !sec8seen)
    || (curSection == 11 && !sec11seen) || (curSection == 13 && !sec13seen)) {
      alert("Choices!");
      if (curSection == 3) {
         sec3seen = true;
      }
      else if (curSection == 5) {
         sec5seen = true;
      }
      else if (curSection == 7) {
         sec7seen = true;
      }
      else if (curSection == 8) {
         sec8seen = true;
      }
      else if (curSection == 11) {
         sec11seen = true;
      }
      else if (curSection == 13) {
         sec13seen = true;
      }
      ++trainSpeed;
   }
   /* Background */
   ctx.drawImage(images.level1, 0 + padding, -backgroundHeight + windowHeight + dy, backgroundWidth, backgroundHeight);

   /* Train */
   ctx.drawImage(images.train, 0 + trainPadding, 0 + trainPaddingTop, trainWidth, trainHeight);

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

function updateActionFeedPriorItems() {
	items = document.getElementsByClassName("feed_item");
	opacity_increment = 1.0 / items.length;
	[].forEach.call(items, function(val, index, theArray) {
		new_opacity = 1.0 - (1.0 - ((index + 1) * opacity_increment));
		val.style.opacity = new_opacity.toString();
	});	
}

function newActionFeedItem(txt) {
	updateActionFeedPriorItems();
	setTimeout(feed.insertAdjacentHTML('beforeEnd', '<p class="feed_item">' + txt + '</p>'), 1000);
}

function updateCashValue(newVal) {
	cash.innerHTML = newVal.toString();
}

function gameOver() {
	gameInfo.style.display = "none";
	post_game.style.display = "block";
}

function tryAgain() {
	post_game.style.display = "none";
	gameInfo.style.display = "block";
}

