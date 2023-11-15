// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		imagesLoaded();
	}

});

function imagesLoaded() {
	initAnimation();
}

// Run Animation
function initAnimation() {

	var edge = window.navigator.userAgent.indexOf("Edge") > -1; // Check if edge browser

	// Settings
	gsap.ticker.fps(120);
	gsap.defaults({
	  ease:"none",
	});

	var 	seekTo=0,
			timescaleTo=1,
			loops=2,
			loopCount=0;

	// Variables

	// Start Animation
	StartScene(); 

	function StartScene() {

		CSSPlugin.useSVGTransformAttr = false;

		// Resets
		var hexes = [hex_t,hex_r,hex_b,hex_l]
		var all_elems = [hex,hexes,fr1_txt_1,fr1_txt_2,fr1_txt_3,fr2_txt_1,fr2_txt_2,fr4_txt_1,fr4_txt_2,fr4_txt_3,fr5_txt_1,fr5_txt_2,fr5_txt_3,img1,cta,cta_txt,terms]
		gsap.set([all_elems],{clearProps:"all"});
		gsap.set([hexes],{x:0,y:0,rotation:0});

		// Hide loader
		gsap.set(loader,{alpha:0});

		// Animation setup
		var main = gsap.timeline({onComplete:Replay});

		// Animation
		main	.add(Setup(), 0)
				.add(Frame1(), 0.1)
				.add(Frame2(), '+=1')
				// .add(Frame3(), '+=1.5')
				.add(Frame4(), '+=1.6')
				.add(Frame5(), '+=1.8')

		// Playback options
		gsap.globalTimeline.timeScale(timescaleTo);
		main.seek(seekTo, true)
		// console.log(main.duration())
	}

	// Setup
	function Setup() {
		return gsap.timeline()
	}

	// Frame 1
	function Frame1() {
		// In
		return gsap.timeline() 	

		.set([hex,img1],{alpha:1})

		.to(hex, {duration:0.3, scale:0.1875, ease:'power2.out'}, 'hexIn')
		.from(hex_t, {duration:0.3, y:'-=30', ease:'power2.out'}, 'hexIn')
		.from(hex_b, {duration:0.3, y:'+=30', ease:'power2.out'}, 'hexIn')

		.fromTo([fr1_txt_1,fr1_txt_2,fr1_txt_3], {y:'-=250'}, {duration:0.3, y:'+=250', alpha:1, ease:'power2.out', stagger:-0.05}, '-=0.2')
	}

	// Frame 2
	function Frame2() {
		return gsap.timeline() 	

		.to([fr1_txt_1,fr1_txt_2,fr1_txt_3], {duration:0.25, y:'+=250', alpha:1, ease:'power2.in', stagger:-0.05})
		.to(hex, {duration:0.3, scale:1, ease:'power2.in'}, '-=0.2')

		.from(img1, {duration:0.35, y:'-=250', ease:'power2.out'}, '-=0.1')

		.fromTo([fr2_txt_1,fr2_txt_2], {y:'+=250'}, {duration:0.3, y:'-=250', alpha:1, ease:'power2.out', stagger:0.05}, '-=0.3')
	}

	// Frame 4
	function Frame4() {
		return gsap.timeline() 	

		.to([fr2_txt_1,fr2_txt_2,img1], {duration:0.35, alpha:0}, 0)

		.to(hex, {duration:0.4, scale:0.1875, ease:'sine.inOut'}, '-=0.3')
		.fromTo(fr4_txt_2, {scale:3}, {duration:0.3, scale:1, alpha:1, ease:'power2.out'}, '-=0.15')

		.to([fr4_txt_1,fr4_txt_3,terms], {duration:0.4, alpha:1, stagger:0.075}, '-=0.3')
	}

	// Frame 5
	function Frame5() {
		return gsap.timeline() 	

		.to([fr4_txt_2,hex], {duration:0.6, scale:0, ease:'back.in(2)', stagger:0.075}, 0)
		.to([fr4_txt_1,fr4_txt_3], {duration:0.2, alpha:0, stagger:0.075}, '-=0.4')

		.set(hex, {y:-27})

		.to([hex], {duration:0.6, scale:0.1875, ease:'back.out(2)'})
		.fromTo(fr5_txt_2, {scale:3}, {duration:0.3, scale:1, alpha:1, ease:'power2.out'}, '-=0.4')

		.to([fr5_txt_1,fr5_txt_3], {duration:0.4, alpha:1, stagger:0.075}, '-=0.2')

		.fromTo(cta, {scaleX:0}, {duration:0.6, scaleX:1, alpha:1, ease:Back.easeOut.config(2)}, 'cta-=0.4')
		.fromTo(cta_txt, {scale:0.6}, {duration:0.5, scale:1, alpha:1, ease:Back.easeOut.config(1)}, 'cta-=0.4')

		.add(ctaPulse, '+=0.4')
	}
	
	// Replay
	function Replay() {
		loopCount++;
		if (loopCount < loops) {
			return gsap.timeline()
			.to([fr5_txt_1,fr5_txt_2,fr5_txt_3,terms,hex,cta,cta_txt], 0.5, {alpha:0, ease:Linear.easeNone}, '+=3')
			.to(stage, 0, {alpha:1, onComplete:function(){
				StartScene();
			}}, '+=0.1');

		}
	}

	// Button hover
	stage = document.getElementById('stage');
	stage.onmouseover = ctaPulse;
				
	function ctaPulse(){
		if (!gsap.isTweening('#cta')) {
			return new gsap.timeline()
			.to([cta,cta_txt], {duration:0.4, scale:1.1, ease:Back.easeOut.config(6), repeat:1, yoyo:true}, '+=0')
		} 
	}
}

var ImageLoader=function(e,n){"use strict";n&&console.log("[IMAGE_LOADER] Init");var t=0;function o(){if(0===--t){var e=document.createEvent("Event");e.initEvent("IMAGES_LOADED",!0,!1),window.dispatchEvent(e)}}this.load=function(c,i,a,l,r,d,u){var E=document.getElementById(c)||document.querySelector(c);i.forEach(function(c){E.appendChild(function(e,c,i,a,l,r,d){n&&console.log("[IMAGE_LOADER] Image "+e);t++;var u=document.createElement("img");u.src=i?i+e+c:e+c,u.id=l||e,u.width=r||null,u.height=d||null,a&&(u.className=a);return u.onload=o,u}(c,a,e,l,r,d,u))})}};
