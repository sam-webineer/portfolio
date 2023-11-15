initAnimation(); // Start animation 

function initAnimation() {

	/****** TWEENS ******/
	TweenMax.ticker.fps(120);

	/****** Variables ******/
	var 	fr1In = [fr_head,fr1_text];
	var 	fr5Out = [fr_head,fr5_text];
	var 	loops = 2;
	var 	loopCount = 0;

	/* //////// START ANIMATION //////// */

	createStars();
	sceneStart();

	function sceneStart() {

		// Resets
		TweenMax.set(rocket,{x:0,y:0,top:70,alpha:1,scale:1,yoyo:false});
		TweenMax.set(flame,{x:0,y:0,alpha:1,scale:1,yoyo:false});
		TweenMax.set(fr_head,{x:0,y:0,alpha:0,scale:1});
		TweenMax.set(fr1_text,{x:0,y:0,alpha:0,scale:1});
		TweenMax.set(fr2_text,{x:0,y:0,alpha:0,scale:1});
		TweenMax.set(fr3_text,{x:0,y:0,alpha:0,scale:1});
		TweenMax.set(fr4_text,{x:0,y:0,alpha:0,scale:1});
		TweenMax.set(fr5_text,{x:0,y:0,alpha:0,scale:1});

		/*ANIMATION*/
		var anim = new TimelineMax();
		
		// FRAME 1
		// In
		anim.fromTo(rocket, 1, {x:'-=250px', y:'+=150px', top:'-=7px', scale:0.8}, {x:'+=250px', y:'-=150px', scale:1, ease:'easeOut'}, 0)
		.staggerFromTo(fr1In, 0.3, {y:'-=10px', alpha:0}, {y:'+=10px', alpha:1, ease:Power1.easeInOut}, 0.1, 0.6)
		// Out
		.to(fr1_text, 0.3, {y:'+=10px', alpha:0, ease:Power1.easeInOut}, '+=2')

		// FRAME 2
		// In
		.fromTo(fr2_text, 0.3, {y:'-=10px', alpha:0}, {y:'+=10px', alpha:1, ease:Power1.easeInOut}, '-=0.15')
		// Out
		.to(fr2_text, 0.3, {y:'+=10px', alpha:0, ease:Power1.easeInOut}, '+=1.8')

		// FRAME 3
		// In
		.fromTo(fr3_text, 0.3, {y:'-=10px', alpha:0}, {y:'+=10px', alpha:1, ease:Power1.easeInOut}, '-=0.15')
		// Out
		.to(fr3_text, 0.3, {y:'+=10px', alpha:0, ease:Power1.easeInOut}, '+=1.8')

		// FRAME 4
		// In
		.fromTo(fr4_text, 0.3, {y:'-=10px', alpha:0}, {y:'+=10px', alpha:1, ease:Power1.easeInOut}, '-=0.15')
		// Out
		.to(fr4_text, 0.3, {y:'+=10px', alpha:0, ease:Power1.easeInOut}, '+=2')

		// FRAME 5
		// In
		.fromTo(fr5_text, 0.3, {y:'-=10px', alpha:0}, {y:'+=10px', alpha:1, ease:Power1.easeInOut, onComplete:function(){
			loopCount++;
			if (loopCount != loops) {
				replay();
			}
			if (loopCount == 2) {
				killAnim();
			}
		}}, '-=0.15');

		var rocketAnim = new TimelineMax();
		rocketAnim.to(flame, 0.3, {scale:1.15, ease:'easeInOut', repeat:42, yoyo:true}, 0)
		rocketAnim.to(rocket, 1.2, {top:'+=14px',  ease:Power1.easeInOut, repeat:9, yoyo:true}, 1);

		// anim.seek(11);
		// rocketAnim.seek(11);
		// anim.timeScale(3);
		// rocketAnim.timeScale(3);

	}

	/******** REPLAY ********/
	function replay() {
		var anim = new TimelineMax();
		anim.to(rocket, 0.8, {x:'+=250px', y:'-=150px', ease:Back.easeIn.config( 1.2)}, '+=2')
		.to(fr5Out, 0.3, {y:'+=10px', alpha:0, ease:Power1.easeInOut, onComplete:function(){
			sceneStart();
		}}, '-=0.4');
	}
	/******** REPLAY ********/
	function killAnim() {
		setTimeout(function(){ 
			stars_1.classList.add("pause");
			stars_2.classList.add("pause");
			stars_3.classList.add("pause");
		}, 2300);
	}
}

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum-minNum+1))+minNum);
}

// function to generate stars
function createStars() {
	var nbDrop1 = 50;
	var nbDrop2 = 60;
	var nbDrop3 = 60;
	var star1 = document.getElementById("stars_1");
	var star2 = document.getElementById("stars_2");
	var star3 = document.getElementById("stars_3");

	for(i=1;i<nbDrop1;i++) {
		var starDim = randRange(2,10);
		var dropLeft = randRange(0,400);
		var dropTop = randRange(0,800);
		var raindrop = document.createElement('img');
		TweenLite.set(raindrop,{attr:{class:'star',src:'assets/star.svg'},left:dropLeft,top:dropTop,width:starDim});
		star1.appendChild(raindrop);
	}

	for(i=1;i<nbDrop2;i++) {
		var starDim = randRange(2,10);
		var dropLeft = randRange(0,400);
		var dropTop = randRange(0,800);
		var raindrop = document.createElement('img');
		TweenLite.set(raindrop,{attr:{class:'star',src:'assets/star.svg'},left:dropLeft,top:dropTop,width:starDim});
		star2.appendChild(raindrop);
	}

	for(i=1;i<nbDrop3;i++) {
		var starDim = randRange(2,10);
		var dropLeft = randRange(0,400);
		var dropTop = randRange(0,800);
		var raindrop = document.createElement('img');
		TweenLite.set(raindrop,{attr:{class:'star',src:'assets/star.svg'},left:dropLeft,top:dropTop,width:starDim});
		star3.appendChild(raindrop);
	}

}