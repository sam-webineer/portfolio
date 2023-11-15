// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		var ldr = new ImageLoader('assets/', false);
		window.addEventListener("IMAGES_LOADED", imagesLoaded);

		// Load Images
		ldr.load("img_cont", ['orb_bg'], ".jpg", "imgs abs lyr auto-xy full hide", "orb_bg", null, null);
		ldr.load("img_cont", ['phone'], ".png", "imgs abs lyr full hide", "phone", null, null);
		ldr.load("img_cont", ['man'], ".png", "imgs abs lyr full hide", "man", null, null);
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
		var f5TxtSplit;

	// Start Animation
	StartScene(); 

	function StartScene() {

		CSSPlugin.useSVGTransformAttr = false;

		f1TxtSplit = new SplitText(fr1_txt, {type:"chars,lines"});
		f2TxtSplit = new SplitText(fr2_txt, {type:"chars,lines"});
		f3TxtSplit = new SplitText(fr3_txt, {type:"chars,lines"});
		f4TxtSplit = new SplitText(fr4_txt, {type:"chars,lines"});
		f5TxtSplit = new SplitText(fr5_txt, {type:"chars,lines"});
		txtSplits.push(f1TxtSplit,f2TxtSplit,f3TxtSplit,f4TxtSplit,f5TxtSplit);

		// Resets
		gsap.set(ecs("lyr"),{clearProps:"all"});

		// Hide loader
		gsap.to(spinner,{duration:0.1, alpha:0});
		gsap.to(loader,{duration:0.4, alpha:0});

		// Animation setup
		var main = gsap.timeline({onComplete:Replay});

		// Animation
		main	.add(Setup(), 0)
				.add(Frame1(), 0.5)
				.add(Frame2(), '-=1.4')
				.add(Frame3(), '-=0.2')
				.add(Frame4(), '-=0.2')
				.add(Frame5(), '-=0.2')

		// Playback options
		gsap.globalTimeline.timeScale(timescaleTo);
		main.seek(seekTo, true)
		// console.log(main.duration())
	}

	// Setup
	function Setup() {
		return gsap.timeline()
		.set(['.hex_mask'],{scale:0.25})
		.set(hm_l, {morphSVG:hm_l, alpha:1})
		.set(hm_r, {morphSVG:hm_r, alpha:1})
	}

	// Frame 1
	function Frame1() {
		return gsap.timeline() 
		.set([hm_bg],{alpha:0})
		.set([hex_mask_b,fr1_txt],{alpha:1})
		.set(orb_bg, {scale:0.3, alpha:1, transformOrigin:'50% 50%'})

		.add(textAnim(f1TxtSplit.chars, null, 0))

		.to(hm_l, {duration:0.5, morphSVG:hm_l_colap, ease:'sine.inOut'}, 0)
		.to(hm_r, {duration:0.5, morphSVG:hm_r_colap, ease:'sine.inOut'}, 0)
		.to(hm_back, {duration:0.6, alpha:0}, 0.1)

		.fromTo(orb_bg, {y:'-=20', x:'+=15'}, {duration:3, scale:1, y:'+=100', alpha:0.7, rotation:-4, ease:'power1.inOut'}, 0)
		.to([hex_mask_f,hex_mask_m], {duration:2, scale:0.9, rotationZ:0.05, ease:'power4.inOut'}, 0.6)
		
	}

	// Frame 2
	function Frame2() {
		return gsap.timeline() 
		.set([fr2_txt,man],{alpha:1})

		.set([hm_back],{alpha:1})
		.set([hex_mask_b], {x:'+=400', y:'+=55', scale:0.63, rotationZ:0})

		.add(textAnim(f1TxtSplit.chars, f2TxtSplit.chars, 0.1))
		.to([terms], {duration:0.6, alpha:1}, 0)

		.to([hex_mask_b], {duration:0.5, x:'-=300', rotationZ:0.05, ease:'sine.out'}, 0.4)
		.from(man, {duration:0.4, x:'+=300', webkitFilter:"blur(6px)", ease:'sine.out'}, 0.42)
		
		.to([hex_mask_b], {duration:2.2, x:'-=30', rotationZ:0.05}, 0.9)
		.to([man], {duration:2.2, x:'-=10', rotationZ:0.05}, 0.9)

		.to(orb_bg, {duration:3, x:'-=15'}, 0)

	}

	// Frame 3
	function Frame3() {
		return gsap.timeline() 
		.set([fr3_txt,phone],{alpha:1})

		.add(textAnim(f2TxtSplit.chars, f3TxtSplit.chars, 0, 0.2))

		.to(man, {duration:0.4, x:'-=300', rotation:0.1, webkitFilter:"blur(6px)", ease:'power2.in', stagger:-0.05}, 0.1)
		.to([hex_mask_b], {duration:0.6, x:'-=170', ease:'power2.inOut'}, 0.1)

		.fromTo(phone, {y:'+=180', webkitFilter:"blur(6px)"}, {duration:0.4, y:'-=180', rotationZ:0.05, webkitFilter:"blur(0px)", ease:'power1.out'}, 0.3)
		.to([phone], {duration:2.5, x:'-=10'}, 'move2-=0.2')
		.to([hex_mask_b], {duration:2.5, x:'-=30', rotation:0.1}, 'move2-=0.2')

		.to(orb_bg, {duration:2.7, x:'-=15'}, 0)
	}

	// Frame 4
	function Frame4() {
		return gsap.timeline() 
		.set([fr4_txt,fr5_txt],{alpha:1})

		.add(textAnim(f3TxtSplit.chars, [f4TxtSplit.chars,f5TxtSplit.chars], 0, 0.25))

		.to([hex_mask_b,phone], {duration:0.4, x:'-=300', rotation:0, webkitFilter:"blur(6px)", ease:'sine.in', stagger:-0.05}, 0.1)

		.fromTo([gp_logo, apple_logo], {x:'+=30', alpha:0}, {duration:0.4, x:'-=30', alpha:1, stagger:-0.1, ease:'power2.out'}, '-=0.3')

		.to(orb_bg, {duration:3, x:'-=15'}, 0)
	}

	// Frame 5
	function Frame5() {
		return gsap.timeline() 

		.set([fr5_txt],{alpha:1})
		.to([fr5_txt, gp_logo, apple_logo], {duration:0.3, alpha:0, stagger:0.05}, 0)

		.to([logo,switch_logo], {duration:0.5, alpha:1}, '-=0.1')

		.fromTo(cta, {scaleX:0}, {duration:0.6, scaleX:1, transformOrigin:'0% 0%', alpha:1, ease:'power2.out'}, 'cta-=0.4')
		.to(cta_txt, {duration:0.5, alpha:1, ease:'power2.out'}, 'cta-=0.2')

		.add(ctaHighlight, '+=0.5')

		.to(orb_bg, {duration:3.5, x:'-=15'}, 0)
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
			tl.to(txt1, {duration:0.2, alpha:0, x:'-=5', scaleY:0, stagger:-0.005, transformOrigin:'100% 25% 0', ease:'sine.in'}, timeIn)
			tl.from(txt2, {duration:0.2, alpha:0, x:'+=15', scaleY:0, stagger:0.005, transformOrigin:'100% 25% 0', ease:'sine.out'}, textDelay)
		} else {
			tl.from(txt1, {duration:0.2, alpha:0, x:'+=15', scaleY:0, stagger:0.005, transformOrigin:'100% 25% 0', ease:'sine.out'}, timeIn)
		}
		return tl
	}
}

function resetAll(){var t=ecs("lyr");gsap.killTweensOf(t),gsap.set(t,{x:0,y:0,rotation:rot0(),scale:1,opacity:1})}
function rot0(){return browserSupportsSubpixel()?0:.01}