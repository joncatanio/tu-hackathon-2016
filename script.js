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
var i = 0;

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

/* Game Stuff */
var gameInfo;
var feed;
var cash;
var salary;
var choiceA;
var choiceB;
var choiceC;
var aboutToEnd;
var endMessage; 

var post_game;

var choice_made;
var choice_required;

var hideDelay = 2000;

var CURRENT_SCORE = 710;

var cashcount;
var scorecount;
var endDetails;
var finalScore;

// ******* Movement *******
var Keys = {
   up: false,
   left: false,
   right: false
   },
   dx = 0,
   dy = 0;

init();

function init() {

   choice_made = false;
   choice_required = true;
   aboutToEnd = false;

   /* Default Cash/Salary */
   cash = 5000
   salary = 7000

   drawer = document.getElementById('drawer');
   message = document.getElementById('message');
   choice_A = document.getElementById('choice_A');
   choice_B = document.getElementById('choice_B');
   choice_C = document.getElementById('choice_C');

   gameInfo = document.getElementById("game_info");
   feed = document.getElementById("action_feed");
   cashcount = document.getElementById("cash");
   scorecount = document.getElementById("score");

   endDetails = document.getElementById("endDetails");
   finalScore = document.getElementById("final_credit_score");
   endMessage = document.getElementById("final_title_message");

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

   setTimeout(presentChoices(data['Chicago']), 1500);
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
   train: 'images/train_cars.svg'
};

loadImages(sources, function(images) {
   backgroundWidth = (1 / 2) * windowWidth;
   backgroundHeight = (images.level1.height / images.level1.width) * backgroundWidth;
   padding = (windowWidth - backgroundWidth) / 2;
   ctx.drawImage(images.level1, 0 + padding, -backgroundHeight + windowHeight, backgroundWidth, backgroundHeight); 

   trainWidth = (1) * backgroundWidth;
   trainHeight = (images.train.height / images.train.width) * trainWidth;
   trainPadding = padding + (backgroundWidth / 2) - (trainWidth / 2);
   trainPaddingTop = -(1/6) * windowHeight;//(1) * windowHeight;
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
	h = $(window).height();
	drawer.style.height = (h/2).toString() + "px";
	choice_made = false;
}

function presentChoices(city) {
	choice_made = false;
	choice_required = true;

    choiceA = city.choices[0];
    choiceB = city.choices[1];
    choiceC = city.choices[2];

	choice_A.style.opacity = "1.0";
	choice_B.style.opacity = "1.0";
	choice_C.style.opacity = "1.0";

	message.innerHTML = city.prompt

	choice_A.childNodes[1].src = city.choices[0].icon;
	choice_A.childNodes[4].innerHTML = city.choices[0].title;
	choice_A.childNodes[6].innerHTML = city.choices[0].description;

	choice_B.childNodes[1].src = city.choices[1].icon;
	choice_B.childNodes[4].innerHTML = city.choices[1].title;
	choice_B.childNodes[6].innerHTML = city.choices[1].description;

	choice_C.childNodes[1].src = city.choices[2].icon;
	choice_C.childNodes[4].innerHTML = city.choices[2].title;
	choice_C.childNodes[6].innerHTML = city.choices[2].description;

	showDrawer();
}

function selectChoiceA() {
	//choice_A.style.backgroundColor = "whitesmoke"
	choice_B.style.opacity = "0.3"
	choice_C.style.opacity = "0.3"
	newActionFeedItem(choice_A.title);
	choice_made = true;
	choice_required = false;

   /* Add cash and update salary. */
   salary += choiceA.salary_change;
   cash += choiceA.cash_change + choiceA.salary_change;
   updateCashValue(cash);

   updateScoreViaSimulator(choiceA.type, choiceA.param);

   if (curSection == 13) {
      aboutToEnd = true;
      hideDrawer();
   }
   else if (curSection == 7) {
      setTimeout(hideDrawer, 500);
   }
   else if (curSection == 11) {
      setTimeout(hideDrawer, 750);
   }
   else {
	   setTimeout(hideDrawer, hideDelay);
   }
}

function selectChoiceB() {
	//choice_B.style.backgroundColor = "whitesmoke"
	choice_A.style.opacity = "0.3"
	choice_C.style.opacity = "0.3"
	newActionFeedItem(choiceB.title);
	choice_made = true;
	choice_required = false;

   /* Add cash and update salary. */
   salary += choiceB.salary_change;
   cash += choiceB.cash_change + choiceB.salary_change;
   updateCashValue(cash);

   updateScoreViaSimulator(choiceB.type, choiceB.param);

   if (curSection == 13) {
      aboutToEnd = true;
      hideDrawer();
   }
   else if (curSection == 7) {
      setTimeout(hideDrawer, 500);
   }
   else if (curSection == 11) {
      setTimeout(hideDrawer, 750);
   }
   else {
	   setTimeout(hideDrawer, hideDelay);
   }
}

function selectChoiceC() {
	//choice_C.style.backgroundColor = "whitesmoke"
	choice_A.style.opacity = "0.3"
	choice_B.style.opacity = "0.3"
	newActionFeedItem(choiceC.title);
	choice_made = true;
	choice_required = false;

   /* Add cash and update salary. */
   salary += choiceC.salary_change;
   cash += choiceC.cash_change + choiceC.salary_change;
   updateCashValue(cash);

   updateScoreViaSimulator(choiceC.type, choiceC.param);

   if (curSection == 13) {
      aboutToEnd = true;
      hideDrawer();
   }
   else if (curSection == 7) {
      setTimeout(hideDrawer, 500);
   }
   else if (curSection == 11) {
      setTimeout(hideDrawer, 750);
   }
   else {
	   setTimeout(hideDrawer, hideDelay);
   }
}

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

      if (curSection == 3) {
      	 presentChoices(data["Iowa"]);
         sec3seen = true;
      }
      else if (curSection == 5) {
      	 presentChoices(data["Denver"]);
         sec5seen = true;
      }
      else if (curSection == 7) {
      	 presentChoices(data["Aspen"]);
         sec7seen = true;
      }
      else if (curSection == 8) {
      	 presentChoices(data["Vegas"]);
         sec8seen = true;
      }
      else if (curSection == 11) {
      	 presentChoices(data["Death_Valley"]);
         sec11seen = true;
      }
      else if (curSection == 13) {
      	 presentChoices(data["SLO"]);
         sec13seen = true;
      }
      Keys.up = false;
      ++trainSpeed;
   }
   /* Background */
   ctx.drawImage(images.level1, 0 + padding, -backgroundHeight + windowHeight + dy, backgroundWidth, backgroundHeight);

   /* Train */
   ctx.drawImage(images.train, 0 + trainPadding, 0 + trainPaddingTop, trainWidth, trainHeight);

   /* End game. */
   if (aboutToEnd) {
      choice_required = true; // Takes away movement. 

      drawTrainOff();

      gameOver();
   }

   isDirty= false;
}

/* Draw forever little train. */
function drawTrainOff() {
   i+=5;
   ctx.drawImage(images.level1, 0 + padding, -backgroundHeight + windowHeight + dy, backgroundWidth, backgroundHeight);
   ctx.drawImage(images.train, 0 + trainPadding, 0 + trainPaddingTop - i, trainWidth, trainHeight);
   requestAnimationFrame(drawTrainOff);
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
	cashcount.innerHTML = "$" + newVal.toString();
}

function updateImageForIcon(str) {
	document.getElementById("imageid").src="../template/save.png";
}

function gameOver() {
	finalScore.innerHTML = CURRENT_SCORE.toString();
	endDetails.innerHTML = CURRENT_SCORE.toString() + ", $" + cash.toString();
	gameInfo.style.display = "none";
	post_game.style.display = "block";

   if (CURRENT_SCORE >= 700) {
      endMessage.innerHTML = "GOOD LOOKIN' SCORE!";
   }
   else if (CURRENT_SCORE < 700 && CURRENT_SCORE > 550) {
      endMessage.innerHTML = "YOU CAN DO BETTER!";
   }
   else {
      endMessage.innerHTML = "HMM... TRY A BIT HARDER!";
   }
}

function tryAgain() {
   location.reload();
}

function updateScoreViaSimulator(req_type, req_param) {

	req = {
		'score': CURRENT_SCORE,
		'event': {}
	}
	req['event'][req_type] = req_param

	$.ajax({
			dataType: "json",
			contentType: "application/json",
			url: "http://ec2-52-53-177-180.us-west-1.compute.amazonaws.com/score-simulator/scoresim/simulateScore",
			type: "POST",
			data: JSON.stringify(req),
			success: function(res) { scorecount.innerHTML = res['score'];  },
			error:   function(res) { console.warn(res); }
		});
}

// test = {
// 	'score': 710,
// 	'event' : {
// 		'zombie_apocalypse': 'CREDIT_IS_IRRELEVANT',
// 	}
// }
// updateScoreViaSimulator(test);
