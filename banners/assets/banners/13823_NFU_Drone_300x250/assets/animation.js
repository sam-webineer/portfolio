initAnimation();

/*ANIMATION*/
function initAnimation() {

	/****** TWEENS ******/
	TweenMax.ticker.fps(120);

	/****** Variables ******/
	var 	seekTo=0;
	var 	loops=2;
	var 	loopCount=0;

	/* //////// START ANIMATION //////// */

	sceneStart(); // Start Animation

	function sceneStart() {

		// Resets
		TweenMax.set([txt_cover1,txt_cover2,txt_cover3],{transformOrigin:'0% 50% 0',scaleX:0});
		TweenMax.set([fr2_txt,fr3_txt,fr4_txt],{alpha:0});
		TweenMax.set(fr1_img,{transformOrigin:'0% 0% 0',z:0.1,rotationZ:0.01,force3D:true});

		/*ANIMATION*/
		var anim=new TimelineMax();

		// FRAME 1 =========
		// In
		anim.from(fr1_img, 4, {scale:1.1, ease:Linear.easeNone}, 0)

		// Out
		.to(fr1_img, 0.6, {alpha:0, ease:Linear.easeNone}, '-=1.5')

		// FRAME 2 =========
		// In
		.to(txt_cover1, 0.6, {scaleX:1, ease:Power3.easeOut}, '-=0.5')
		.to(txt_cover1, 0.6, {transformOrigin:'100% 50% 0', scaleX:0, x:'+=10', ease:Power3.easeOut}, '-=0.1')
		.to(fr2_txt, 0, {alpha:1, ease:Linear.easeNone}, '-=0.6')

		// FRAME 3 =========
		// In
		.to(txt_cover2, 0.6, {scaleX:1, ease:Power3.easeOut}, '+=2')
		.to(txt_cover2, 0.6, {transformOrigin:'100% 50% 0', scaleX:0, x:'+=10', ease:Power3.easeOut}, '-=0.1')
		.to(fr3_txt, 0, {alpha:1, ease:Linear.easeNone}, '-=0.6')

		// FRAME 4 =========
		// In
		.to(txt_cover3, 0.6, {scaleX:1, ease:Power3.easeOut}, '+=2')
		.to(txt_cover3, 0.6, {transformOrigin:'100% 50% 0', scaleX:0, x:'+=10', ease:Power3.easeOut}, '-=0.1')
		.to(fr4_txt, 0, {alpha:1, ease:Linear.easeNone}, '-=0.6')

		/*.staggerFromTo(fr4Txt, 0.6, {x:'-=100%', alpha:0}, {x:'+=100%', alpha:1, ease:Power2.easeOut}, '0.2', '-=0.6')
		.fromTo(fr4_card, 1, {x:'+=30', alpha:0}, {x:'-=30', alpha:1, ease:Power2.easeOut, onComplete:function(){
			loopCount++;
			if (loopCount != loops) {
				replay();
			}
		}}, '-=0.8');*/

		anim.seek(seekTo);
		anim.timeScale(1);

	}

	/******** REPLAY ********/
	function replay() {
		/*var anim=new TimelineMax();
		anim.to(cta_text, 0.4, {alpha:0, ease:Power1.easeOut}, '+=2')
		.to(cta_wrap, 0.4, {width:0, ease:Back.easeIn.config(1)}, '-=0.2')
		.to(logo_tri, 0.8, {height:450, alpha:1, ease:Back.easeIn.config(0.7)}, '-=0.5')
		.to(logo_img, 0.6, {alpha:0, ease:Power1.easeOut, onComplete:function(){
			sceneStart();
		}}, '-=0.4');*/
	}
}