// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		var ldr = new ImageLoader('assets/', false);
		window.addEventListener("IMAGES_LOADED", imagesLoaded);

		// Load Images
		ldr.load("img_cont", ['person_1'], ".png", "abs lyr auto-x hid", "person_1", 300, 520);
		ldr.load("img_cont", ['person_2'], ".png", "abs lyr auto-x hide", "person_2", 330, 496);
	}

});

function imagesLoaded() {
	initAnimation();
}

// Run Animation
function initAnimation() {

	gsap.registerPlugin(SplitText);
	gsap.registerPlugin(MorphSVGPlugin);
	MorphSVGPlugin.convertToPath("polygon, polyline");

	var edge = window.navigator.userAgent.indexOf("Edge") > -1; // Check if edge browser

	// Settings
	gsap.ticker.fps(120);
	gsap.defaults({
	  ease:"none",
	});

	var 	seekTo=0,
			timescaleTo=1,
			loops=1,
			loopCount=0;

	// Variables
		var txtSplits = [];
		var f1TxtSplit;
		var f2TxtSplit;
		var f3TxtSplit;
		var f4TxtSplit;
		var f5TxtSplit;
		var f5TxtSplit;

	// Start Animation
	StartScene(); 

	function StartScene() {

		CSSPlugin.useSVGTransformAttr = false;

		f1TxtSplit = new SplitText(fr1_txt, {type:"lines"});
		f2TxtSplit = new SplitText(fr2_txt, {type:"lines"});
		f3TxtSplit = new SplitText(fr3_txt, {type:"lines"});
		f4TxtSplit = new SplitText(fr4_txt, {type:"lines"});
		f5TxtSplit = new SplitText(fr5_txt, {type:"lines"});
		f6TxtSplit = new SplitText(fr6_txt, {type:"lines"});
		txtSplits.push(f1TxtSplit,f2TxtSplit,f3TxtSplit,f4TxtSplit,f5TxtSplit,f6TxtSplit);

		// Resets
		gsap.set(ecs("lyr"),{clearProps:"all"});

		// Hide loader
		gsap.to(spinner,{duration:0.1, alpha:0});
		gsap.to(loader,{duration:0.4, alpha:0});

		// Animation setup
		var main = gsap.timeline({onComplete:Replay});

		// Animation
		main	.add(Setup(), 0)
				.add(Frame1(), 0.2)
				.add(Frame2(), '+=2')
				.add(Frame3(), '+=2.5')
				.add(Frame4(), '+=2.5')
				.add(Frame5(), '+=2.5')

		// Playback options
		gsap.globalTimeline.timeScale(timescaleTo);
		main.seek(seekTo, true)
		console.log(main.duration())
	}

	// Setup
	function Setup() {
		return gsap.timeline()
	}

	// Frame 1
	function Frame1() {
		return gsap.timeline() 
		.set(fr1_txt,{alpha:1})
		
		.from('.logo', {duration:0.8, scale:1.6, alpha:0, ease:'power2.out'}, 'logoIn')
		.from(logo_0, {duration:0.8, x:'-=30', ease:'power2.out'}, 'logoIn')
		.from(logo_2, {duration:0.8, x:'+=30', ease:'power2.out'}, 'logoIn')

		.from(person_1, {duration:0.8, alpha:0, y:'+=40', ease:'power2.out'}, 0.3)

		.to([cta,gilogo], {duration:0.4, alpha:1, stagger:0.05}, 0.2)
		.to(cta_txt, {duration:0.4, alpha:1}, 0.4)
		
		.from(f1TxtSplit.lines, {duration:0.4, alpha:0, y:'+=30', stagger:0.05, transformOrigin:'100% 25% 0', ease:'power2.out'}, 0.5)

	}

	// Frame 2
	function Frame2() {
		return gsap.timeline()
		.set(fr2_txt,{alpha:1})

		.to(f1TxtSplit.lines, {duration:0.25, alpha:0, y:'-=15', stagger:0.05, transformOrigin:'100% 25% 0', ease:'sine.in'}, 0)
		.from(f2TxtSplit.lines, {duration:0.4, alpha:0, y:'+=30', stagger:0.05, transformOrigin:'100% 25% 0', ease:'power2.out'}, '+=0.1')
	}

	// Frame 3
	function Frame3() {
		return gsap.timeline()
		.set(fr3_txt,{alpha:1})

		.to(f2TxtSplit.lines, {duration:0.25, alpha:0, y:'-=15', stagger:0.05, transformOrigin:'100% 25% 0', ease:'sine.in'}, 0)
		.from(f3TxtSplit.lines, {duration:0.4, alpha:0, y:'+=30', stagger:0.05, transformOrigin:'100% 25% 0', ease:'power2.out'}, 0.4)

		.to(person_1, {duration:0.7, alpha:0, y:'+=40', ease:'power2.out'}, 0)
		.fromTo(person_2, {alpha:0, y:'+=40'}, {duration:0.8, alpha:1, y:'-=40', ease:'power2.out'}, 0.4)
	}

	// Frame 4
	function Frame4() {
		return gsap.timeline()
		.set(fr4_txt,{alpha:1})

		.to(f3TxtSplit.lines, {duration:0.25, alpha:0, y:'-=15', stagger:0.05, transformOrigin:'100% 25% 0', ease:'sine.in'}, 0)
		.from(f4TxtSplit.lines, {duration:0.4, alpha:0, y:'+=30', stagger:0.05, transformOrigin:'100% 25% 0', ease:'power2.out'}, '+=0.1')
	}

	// Frame 5
	function Frame5() {
		return gsap.timeline()
		.set([fr5_txt,fr6_txt],{alpha:1})

		.to(f4TxtSplit.lines, {duration:0.25, alpha:0, y:'-=15', stagger:0.05, transformOrigin:'100% 25% 0', ease:'sine.in'}, 0)
		.from(f5TxtSplit.lines, {duration:0.4, alpha:0, y:'+=30', stagger:0.05, transformOrigin:'100% 25% 0', ease:'power2.out'}, 0.3)

		.to(person_2, {duration:0.9, scale:0.69, y:'-=50', ease:'power2.out'}, 0.3)

		.from(flourish, {duration: 0.5, scale:3.5, ease:'power2.out'}, 0.4)
		.to(flourish, {duration:6, rotation:45}, 'spin-=0.5')
		.to(['.sticker'], {duration:6, rotation:-45}, 'spin-=0.5')
		.to('.sticker', {duration:1, scale:0.9, yoyo:true, repeat:4}, 'spin-=0.5')

		.to(f5TxtSplit.lines, {duration:0.25, alpha:0, y:'-=15', stagger:0.05, transformOrigin:'100% 25% 0', ease:'sine.in'}, 3)
		.from(f6TxtSplit.lines, {duration:0.4, alpha:0, y:'+=30', stagger:0.05, transformOrigin:'100% 25% 0', ease:'power2.out'}, 3.3)

		.add(ctaHighlight, 5)
	}
	
	// Replay
	function Replay() {
		loopCount++;
		if (loopCount < loops) {
			return gsap.timeline()
			.to(loader, {duration:0.4, alpha:1, delay:2, onComplete:function(){
				reset();
			}});

		}
	}

	function reset(){
		txtSplits.forEach(function(e) {
			e.revert();
		});
		resetAll();
		StartScene();
	}

	// Button hover
	clicktag = document.getElementById('clicktag');
	// clicktag.onmouseover = ctaHighlight;
				
	function ctaHighlight(){
		if (!gsap.isTweening('#cta')) {
			return new gsap.timeline()
			.to([cta,cta_txt], {duration:0.25, scale:0.88, ease:'sine.out', transformOrigin:'50% 50%', repeat:1, yoyo:true});
		} 
	}
}

function resetAll(){var t=ecs("lyr");gsap.killTweensOf(t),gsap.set(t,{x:0,y:0,rotation:rot0(),scale:1,opacity:1})}
function rot0(){return browserSupportsSubpixel()?0:.01}