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
	var 	seekTo=0,
			timescaleTo=1.2,
			loops=1,
			loopCount=0;

	// Variables

	// Start Animation
	StartScene(); 

	function StartScene() {

		// Resets

		// Hide loader
		gsap.set(loader,{alpha:0});

		// Animation setup
		var main = gsap.timeline({onComplete:Replay});

		// Animation
		main	.add(Setup(), 0)
				.add(Frame1(), 0.2)
				.add(Frame2(), '+=0.2')
				.add(Frame3(), '+=2')
				.add(Frame4(), '+=2.2')
				.add(Frame5(), '+=1.6')
				.add(Frame6(), '+=1.4')

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

		.fromTo(nexus, 0.2, {scale:3, alpha:0}, {scale:1, alpha:1, ease:'power2.out'}, 0)
		.to(fr1_txt_1, 0, {alpha:1, text:'We'}, '+=0.1')
		.to(fr1_txt_1, 0, {alpha:1, text:'Wouldn\'t'}, '+=0.25')
		.to(fr1_txt_1, 0, {alpha:1, text:'Say'}, '+=0.4')
		.to(fr1_txt_1, 0, {alpha:1, text:'We\'re<br> the best'}, '+=0.3')
		.to(fr1_txt_1, 0, {alpha:1, text:''}, '+=1')
		
		.to(fr1_txt_1, 0, {alpha:1, text:'These'}, '+=0.8')
		.to(fr1_txt_1, 0, {alpha:1, text:'Guys'}, '+=0.3')
		.to(fr1_txt_1, 0, {alpha:1, text:'Do'}, '+=0.25')
		.to(fr1_txt_1, 0, {alpha:1, text:''}, '+=0.6')
	}

	// Frame 2
	function Frame2() {
		return gsap.timeline() 	

		.set([fr2_award,fr2_txt], {alpha:1})
		
		// Out
		.to(nexus, 0.8, {scale:5, rotation:'+=45', left:'-=1', top:-85, ease:'power1.inOut'}, 0)

		// In
		.from(fr2_award, 0.8, {x:'+=150', ease:'power1.out'}, 'fr2In-=0.2')
		.from(fr2_txt, 0.8, {x:'-=150', ease:'power1.out'}, 'fr2In-=0.2')
		
		.to(terms, 0.7, {alpha:1, ease:'none'}, '-=0.4')
	}

	// Frame 3
	function Frame3() {
		return gsap.timeline() 	

		.set([fr3_award,fr3_txt], {alpha:1})
		
		// Out
		.to(nexus, 0.6, {scale:10, rotation:'-=5', left:'-=220', top:-70, ease:'power1.in'}, 0)
		.to(fr2_award_wrap, 0.6, {x:'-=210', ease:'power1.in'}, 'fr2_award_out-=0.6')
		.to(fr2_award, 0.6, {x:'+=210', ease:'power1.in'}, 'fr2_award_out-=0.6')

		// In
		.to(nexus, 0.8, {scale:5, rotation:'+=5', left:'+=220', top:210, ease:'power1.out'}, '+=0.4')
		.from(fr3_award, 0.8, {x:'+=150', ease:'power1.out'}, 'fr3In-=0.25')
		.from(fr3_txt, 0.8, {x:'-=150', ease:'power1.out'}, 'fr3In-=0.25')

		.set([fr2_award,fr2_txt], {alpha:0})
	}

	// Frame 4
	function Frame4() {
		return gsap.timeline() 	
		
		.set([fr4_award,fr4_txt], {alpha:1})
		
		// Out
		.to(nexus, 0.6, {scale:10, rotation:'-=5', left:'+=210', top:180, ease:'power1.in'}, 0)
		.set(fr3_txt, {alpha:0})
		.set(fr3_award_wrap, {zIndex:1})

		// In
		.to(nexus, 0.9, {scale:5, rotation:'-=85', left:'-=211', top:210, ease:'power1.inOut'}, '+=0.1')

		.from(fr4_award, 0.8, {x:'+=150', ease:'power1.out'}, 'fr4In-=0.2')
		.from(fr4_txt, 0.8, {x:'-=150', ease:'power1.out'}, 'fr4In-=0.2')
		
		.set([fr3_award,fr3_txt], {alpha:0})
	}

	// Frame 5
	function Frame5() {
		return gsap.timeline()

		// Out
		.to(nexus, 0.7, {scale:10, rotation:'+=180', left:'-=10', top:105, ease:'power1.in'}, 0)
		.set([fr4_txt], {alpha:0}, '-=0.25')
		.set([fr4_award_wrap], {zIndex:1}, '-=0.2')
		.set([fr4_award], {alpha:0}, '-=0.03')

		// In
		.to(nexus, 0.3, {scale:1, rotation:180, left:24, top:62, ease:'power1.out'}, '-=0.1')
		.fromTo(fr5_txt, 0.4, {alpha:0}, {alpha:1, ease:'none'}, '+=0.2')
			}

	// Frame 6
	function Frame6() {
		return gsap.timeline() 	

		// Out
		.to([fr5_txt,nexus], 0.6, {alpha:0, ease:'none'}, 0)

		// In
		.staggerTo([logo,fr6_txt,cta,terms], 0.8, {alpha:1, ease:'none'}, 0.08, '+=0.2')
		.to(cta_shine1, 1.2, {x:250, skewX:'-25', alpha:0.9, ease:'power2.out'}, '+=0.5')
	}
	
	// Replay
	function Replay() {
		var anim = new TimelineMax();

		loopCount++;
		if (loopCount < loops) {
			return gsap.timeline()
			.to(stage, 0, {alpha:1, onComplete:function(){
				StartScene();
			}}, '+=0');

		}
	}
}