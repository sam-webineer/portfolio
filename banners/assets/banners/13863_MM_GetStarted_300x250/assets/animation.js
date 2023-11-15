initAnimation();

/*ANIMATION*/
function initAnimation() {

	/****** TWEENS ******/
	TweenMax.ticker.fps(120);

	/****** Variables ******/
	var 	seekTo=0;
	var 	timescaleTo=1;
	var 	loops=2;
	var 	loopCount=0;

	/* //////// START ANIMATION //////// */

	sceneStart(); // Start Animation

	function sceneStart() {

		// Resets
		TweenMax.set([cta,fr1_txt,fr2_txt,fr3_txt,fr4_txt,fr1_img,fr2_img,fr3_img,fr4_img],{
			clearProps:'x,y,width,height,top,left',
			alpha:1
		});

		/*ANIMATION*/
		var anim=new TimelineMax();

		// FRAME 1 =========
		// In
		anim.staggerFromTo([fr1_txt,fr1_img,cta], 1, {x:'-=300'}, {x:'+=300', ease:Power2.easeOut}, '+0.1', 0)

		// Out
		.staggerTo([fr1_txt,fr1_img], 1, {x:'+=300', ease:Power2.easeIn}, '-0.1', '+=1.5')

		// FRAME 2 =========
		// In
		.staggerFromTo([fr2_txt,fr2_img], 1, {x:'-=300'}, {x:'+=300', ease:Power2.easeOut}, '-0.1', '-=0.1')

		// Out
		.staggerTo([fr2_txt,fr2_img], 1, {x:'+=300', ease:Power2.easeIn}, '-0.1', '+=1.5')

		// FRAME 3 =========
		// In
		.staggerFromTo([fr3_txt,fr3_img], 1, {x:'-=300'}, {x:'+=300', ease:Power2.easeOut}, '-0.1', '-=0.1')
		
		// Out
		.staggerTo([fr3_txt,fr3_img], 1, {x:'+=300', ease:Power2.easeIn, clearProps:'all'}, '-0.1', '+=1.5')

		// FRAME 4 =========
		// In
		.staggerFromTo([fr4_txt,fr4_img], 1, {x:'-=300'}, {x:'+=300', ease:Power2.easeOut}, '-0.1', '-=0')
		.to(fr4_txt, 0, {alpha:1, onComplete:function(){
			loopCount++;
			if (loopCount != loops) {
				replay();
			}
		}}, '+=2');

		anim.seek(seekTo);
		anim.timeScale(timescaleTo);

	}

	/******** REPLAY ********/
	function replay() {
		var anim=new TimelineMax();
		anim.staggerTo([cta,fr4_txt,fr4_img], 1, {x:'+=300', ease:Power2.easeIn}, '-0.1', '+=0')
		.to(cta, 0, {alpha:1, clearProps:'all', onComplete:function(){
			sceneStart();
		}}, '+=0.5');
	}
}