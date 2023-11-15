window.onload = function() {

	/****** Variables ******/
	var 	sc2Elem = [sc2_text,sc_cta];
	var 	bg_leaves = [leaf_bg_1,leaf_bg_2,leaf_bg_3,leaf_bg_4,leaf_bg_5,leaf_bg_6,leaf_bg_7,leaf_bg_8];
	var 	loops = 2;
	var 	loopCount = 0;

	/* //////// START ANIMATION //////// */

	TweenMax.delayedCall(0, sceneStart);

	function sceneStart() {

		TweenMax.set(sc1_text,{alpha:0, top:57});
		TweenMax.set(sc2_text,{alpha:0, top:57});
		TweenMax.set(sc_cta,{alpha:0, top:68});
		TweenMax.set(leaf,{left:-40, top:138,rotationY:0, rotationX:0, rotationZ:0});
		TweenMax.set(h_sword,{left:116,rotation:0});
		TweenMax.set(bg_leaves,{left:-60});

		var anim = new TimelineMax();

		/*TEXT 1*/
		anim.fromTo(sc1_text, 0.3, {top:'-=5px',alpha:0},{top:'+=5px',alpha:1,ease:'easeOut'}, 0.5)
		.to(sc1_text, 0.3, {top:'+=5px',alpha:0,ease:'easeOut'}, '+=2.8')

		/*TEXT 2*/
		.fromTo(sc2_text, 0.3, {top:'-=5px',alpha:0},{top:'+=5px',alpha:1,ease:'easeOut'})
		.to(sc2_text, 0.3, {top:'+=5px',alpha:0,ease:'easeOut'}, '+=2.8')

		/*CTA*/
		.fromTo(sc_cta, 0.3, {top:'-=5px',alpha:0},{top:'+=5px',alpha:1,ease:'easeOut'});

		/*LEAF AND SWORD ANIMATION*/
		var animLeaf = new TimelineMax();
		animLeaf.fromTo(leaf, 0.5 ,{rotationY:90, left:-40},{rotationY:0, left:108,ease:'easeIn'}, 3)
		.to(h_eyesup, 0.01 ,{alpha:0}, 'faceChange-=0.2')
		.to(h_smile, 0.2 ,{alpha:0}, 'faceChange-=0.2')
		.fromTo(h_sword, 1.2 ,{bottom:-80,left:93,rotation:-10},{bottom:-30,left:116,rotation:0,ease:'easeOut'}, '+=0.6')
		.to(h_sword,0.6,{css:{
			bezier:{
				type: 'soft',
				values: [
					{ left: '116', bottom: '-30', rotation:0 },
					{ left: '113', bottom: '-15', rotation:-2 },
					{ left: '110', bottom: '-8', rotation:-4 },
					{ left: '110', bottom: '-18', rotation:-4 }
				],
			autoRotate:false}
		},ease: Power2.easeOut}, '+=0.3')
		.to(leaf, 0.3 ,{rotationZ:30, left:'+=10', top:'-=5', ease:'easeOut'}, '-=0.5')
		.to(leaf, 1.6 ,{rotationZ:180, rotationX:100, left:330, top:'-=20', ease:Power2.easeOut}, '-=0.3')
		.to(h_eyesup, 0.01 ,{alpha:1}, 'out-=0.1')
		.to(h_smile, 0.2 ,{alpha:1}, 'out-=0.1')
		.to(h_sword, 1.1, {bottom:-80,left:116,rotation:0,ease:'easeIn',onComplete:function(){
			loopCount++;
			if (loopCount != loops) {
				TweenMax.delayedCall(2,replay);
			}
		}}, 'out-=0.4')

		/*BACKGROUND LEAVES*/
		bg_leaves.forEach(function(item, index){
			var animLeaves = new TimelineMax();
			animLeaves.to(item, R(1.4,1.8), {
				rotationZ: R(0,360), 
				rotationX: R(0,360),
				rotationY: R(0,360),
				top: '+='+R(0,70)+'px', 
				left: 340,
				ease:'linear',
				repeat: 3
			}, index * 0.45)
		});

		// animLeaf.seek(4);
		// animLeaf.timeScale( 0.5 );

		var animLeafShake = new TimelineMax();
		animLeafShake.add(shake(leaf, 35, 0.1), 2);

	}

	/******** SCENE OUT - FOR LOOP ********/
	function replay() {
		var anim = new TimelineMax();

		/*TEXT 2*/
		anim.to(sc_cta, 0.3, {top:'+=5px',alpha:0,ease:'easeOut'});

		TweenMax.delayedCall(1,sceneStart);
	}

	// SHAKE FUNCTION
	function shake(element, shakes, speed){
		var tl = new TimelineLite();
		TweenLite.set(element, {x:"+=0"}); // this creates a full _gsTransform on element
		var transforms = element._gsTransform;
		
		//store the transform values that exist before the shake so we can return to them later
		var initProps = {
			x:transforms.x,
			y:transforms.y,
			rotation:transforms.rotation
		}
		
		//shake a bunch of times
		for(var i = 0; i < shakes; i++){
			tl.to(element, speed ,{x:initProps.x + R(-2,2), y:initProps.y + R(-1,1), rotation:initProps.rotation + R(-2.5,2.5)})
		}
		//return to pre-shake values
		tl.to(element, speed ,{x:initProps.x, y:initProps.y, scale:initProps.scale, rotation:initProps.rotation})
		
		return tl;
	};
	function R(max,min){return Math.random()*(max-min)+min};

}