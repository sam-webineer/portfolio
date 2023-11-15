// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		var ldr = new ImageLoader('assets/', false);
		window.addEventListener("IMAGES_LOADED", imagesLoaded);

		// Load Images
		ldr.load("img_cont", ['car_nissan'], ".png", "abs lyr auto-x hide", "car", null, null);
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
			loops=2,
			loopCount=0;

	// Variables
		var txtSplits = [];
		var f1TxtSplit;
		var f2TxtSplit;
		var f3TxtSplit;
		var f4TxtSplit;

	// Start Animation
	StartScene(); 

	function StartScene() {

		CSSPlugin.useSVGTransformAttr = false;

		f1TxtSplit = new SplitText(fr1_txt, {type:"chars,lines"});
		f2TxtSplit = new SplitText(fr2_txt, {type:"chars,lines"});
		f3TxtSplit = new SplitText(fr3_txt, {type:"chars,lines"});
		txtSplits.push(f1TxtSplit,f2TxtSplit,f3TxtSplit);

		// Resets
		gsap.set(ecs("lyr"),{clearProps:"all"});

		// Hide loader
		gsap.to(spinner,{duration:0.1, alpha:0});
		gsap.to(loader,{duration:0.4, alpha:0});

		// Animation setup
		var main = gsap.timeline({onComplete:Replay});

		// Animation
		main	.add(Setup(), 0)
				.add(Frame1(), 0.3)
				.add(Frame2(), '+=1.5')
				.add(Frame3(), '+=2')
				.add(Frame4(), '+=2.2')

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
		return gsap.timeline()
		.set(to_clip, {x:'110%'})
		.set(electrix_logo, {x:'-=40%', scale:0, alpha:1})

		.to(electrix_logo, {duration:0.6, scale:1, transformOrigin:'89.5% 50%', ease:'back.out(8)'})
		.to(electrix_logo, {duration:0.4, x:'+=40%', ease:'power1.inOut'}, 'reveal-=0.2')
		.to(to_clip, {duration:0.4, x:'0', ease:'power1.inOut'}, 'reveal-=0.2')
	}

	// Frame 2
	function Frame2() {
		return gsap.timeline() 	
		.set([fr1_txt],{alpha:1})

		.add(textAnim(f1TxtSplit.chars, null, 0.35))

		.to(electrix_logo, {duration:0.6, y:'-118px', rotation:0.05, scale:0.5, transformOrigin:'50% 50%', ease:'power1.out'}, 0)

		.fromTo(car, {x:'-=100%', y:'-=20', scale:0.7, webkitFilter:"blur(6px)"}, {duration:1, alpha:1, scale:1, x:'+=100%', y:'+=20', webkitFilter:"blur(0px)", ease:'back.out(1.5)'}, 0.3)
		.fromTo(terms_box, {y:'+=100%'}, {duration:0.3, alpha:1, y:'-=100%', ease:'sine.out' }, 0.4)
		.to([powered_by,lv_logo], {duration:0.3, alpha:1, stagger:0.05}, 0.5)
	}

	// Frame 3
	function Frame3() {
		return gsap.timeline() 
		.set([fr2_txt,bolt],{alpha:1})

		.add(textAnim(f1TxtSplit.chars, f2TxtSplit.chars, 0))

		.fromTo(bolt, {x:'+=200', y:'-=350'}, {duration:0.5, x:'-=200', y:'+=350', ease:'back.out(1)'}, 0.2)
	}

	// Frame 4
	function Frame4() {
		return gsap.timeline()
		.set([fr3_txt],{alpha:1})

		.add(textAnim(f2TxtSplit.chars, f3TxtSplit.chars, 0.1, '+=0.05'))
		// .to(car, {duration:0.6, alpha:1, scale:1.1, x:'+=150%', y:'+=50', webkitFilter:"blur(4px)", ease:'back.in(0.8)'}, 0)
		.to(car, {duration:0.3, alpha:0, webkitFilter:"blur(2px)"}, 0.1)

		.fromTo(cta, {scaleX:0}, {duration:0.6, scaleX:1, transformOrigin:'50% 0%', alpha:1, ease:'power2.out'}, 'cta-=0')
		.to(cta_txt, {duration:0.5, alpha:1, ease:'power2.out'}, 'cta+=0.3')

		.add(ctaHighlight, '+=0.4')
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

	function textAnim(txt1, txt2=null, timeIn=0, textDelay='-=0.05') {
		tl = new gsap.timeline()
		if(txt2) {
			tl.to(txt1, {duration:0.2, alpha:0, x:'+=5', scaleY:0, stagger:-0.005, transformOrigin:'0% 25% 0', ease:'sine.in'}, timeIn)
			tl.from(txt2, {duration:0.2, alpha:0, x:'-=15', scaleY:0, stagger:0.005, transformOrigin:'0% 25% 0', ease:'sine.out'}, textDelay)
		} else {
			tl.from(txt1, {duration:0.2, alpha:0, x:'-=15', scaleY:0, stagger:0.005, transformOrigin:'0% 25% 0', ease:'sine.out'}, timeIn)
		}
		return tl
	}
}

function resetAll(){var t=ecs("lyr");gsap.killTweensOf(t),gsap.set(t,{x:0,y:0,rotation:rot0(),scale:1,opacity:1})}
function rot0(){return browserSupportsSubpixel()?0:.01}