// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		var ldr = new ImageLoader('assets/', false);
		window.addEventListener("IMAGES_LOADED", imagesLoaded);

		// Load Images
		ldr.load("img_cont", ['img_lyr_1'], ".png", "abs lyr auto-xy full hide", "img_1", null, null);
		ldr.load("img_cont", ['img_lyr_2'], ".jpg", "abs lyr auto-xy full hide", "img_2", null, null);
		ldr.load("banner", ['card-pp'], ".png", "abs lyr auto-x hide card", "card", null, null);
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
		var endTxtSplit;

	// Start Animation
	StartScene(); 

	function StartScene() {

		CSSPlugin.useSVGTransformAttr = false;

		f1TxtSplit = new SplitText(fr1_txt, {type:"chars,lines"});
		f2TxtSplit = new SplitText(fr2_txt, {type:"chars,lines"});
		f3TxtSplit = new SplitText(fr3_txt, {type:"chars,lines"});
		f4TxtSplit = new SplitText(fr4_txt, {type:"chars,lines"});
		endTxtSplit = new SplitText(end_txt, {type:"chars,lines"});
		txtSplits.push(f1TxtSplit,f2TxtSplit,f3TxtSplit,f4TxtSplit,endTxtSplit);

		// Resets
		gsap.set(ecs("lyr"),{clearProps:"all"});

		// Hide loader
		gsap.to(spinner,{duration:0.1, alpha:0});
		gsap.to(loader,{duration:0.4, alpha:0});

		// Animation setup
		var main = gsap.timeline({onComplete:Replay});

		// Animation
		main	.add(Setup(), 0)
				.add(Frame1(), 0.1)
				.add(Frame2(), '+=1.4')
				.add(Frame3(), '-=0.2')
				.add(Frame4(), '-=0.4')
				.add(Frame5(), '-=0.4')
				.add(Frame6(), '+=3.4')

		// Playback options
		gsap.globalTimeline.timeScale(timescaleTo);
		main.seek(seekTo, true)
		// console.log(main.duration())
	}

	// Setup
	function Setup() {
		return gsap.timeline()
		.set([img_1,img_2],{scale:0.75, marginLeft:-25, marginTop:55, transformOrigin:'50% 50%'})
		.set(card,{marginLeft:15})
		.set([hex_mask_f,hex_mask_m,hex_mask_b],{scale:0.32})
	}

	// Frame 1
	function Frame1() {
		return gsap.timeline() 
		.set([hm_bg,hm_t,hm_tl],{alpha:0})
		.set([hex_mask_b,fr1_txt],{alpha:1})

		.from(f1TxtSplit.chars, {duration:0.2, alpha:0, x:'+=15', scaleY:0, stagger:0.005, transformOrigin:'100% 25% 0', ease:'sine.out'}, 0.2)
		.to(terms, {duration:0.6, alpha:1}, '-=0.1')
	}

	// Frame 2
	function Frame2() {
		return gsap.timeline() 	
		.set([hex_mask_b,fr2_txt,card],{alpha:1})

		.to(terms, {duration:0.2, alpha:0}, 0)

		.to([hex_mask_f,hex_mask_m,hex_mask_b], {duration:0.7, scale:0.9333333, x:'+=110', y:'+=95', rotationZ:0.05, ease:'power1.inOut'}, 0.1)
		.to(hm_l, {duration:0.7, morphSVG:hm_l_colap, ease:'power2.inOut'}, 0)
		.to(hm_r, {duration:0.7, morphSVG:hm_r_colap, ease:'power2.inOut'}, 0)
		
		.to(f1TxtSplit.chars, {duration:0.2, alpha:0, x:'-=5', scaleY:0, stagger:-0.005, transformOrigin:'100% 25% 0', ease:'sine.in'}, 0)
		.from(f2TxtSplit.chars, {duration:0.2, alpha:0, x:'+=15', scaleY:0, stagger:0.005, transformOrigin:'100% 25% 0', ease:'sine.out'}, 0.3)

		.from(card, {duration:0.4, x:'+=300', webkitFilter:"blur(6px)", ease:'power1.out'}, 'fr2In-=0.3')
		.to([hex_mask_f,hex_mask_m,hex_mask_b], {duration:2.3, x:'-=20', rotation:0.1}, 'move1-=0')
		.to(card, {duration:2, x:'-=10', rotation:0.1}, 'move1-=0')
		
		.set([hm_l,hm_r],{alpha:0})
		.set(img_2,{rotationZ:0.05})
	}

	// Frame 3
	function Frame3() {
		return gsap.timeline() 
		.set([hex_mask_b,fr3_txt],{alpha:1})

		.to(card, {duration:0.4, x:'-=350', rotation:0.1, webkitFilter:"blur(6px)", ease:'power2.in', stagger:-0.05}, 0)
		.set(card,{alpha:0})

		.to([hex_mask_f,hex_mask_m,hex_mask_b], {duration:0.6, x:'-=180', ease:'power2.inOut'}, 0)

		.to(f2TxtSplit.chars, {duration:0.2, alpha:0, x:'-=5', scaleY:0, stagger:-0.005, transformOrigin:'100% 25% 0', ease:'sine.in'}, 0.1)
		.from(f3TxtSplit.chars, {duration:0.2, alpha:0, x:'+=15', scaleY:0, stagger:0.005, transformOrigin:'100% 25% 0', ease:'sine.out'}, 0.3)

		.fromTo(img_1, {alpha:0, x:'-=20'}, {duration:0.6, alpha:1, x:'+=10', rotationZ:0.05, ease:'power1.out'}, 0.2)
		.fromTo(img_2, {x:'-=20'}, {duration:0.6, x:'+=10', rotationZ:0.05, ease:'power1.out'}, 0.2)
		.to([img_1,img_2], {duration:2.3, x:'+=10'}, 'move2-=0.2')
		.to([hex_mask_f,hex_mask_m,hex_mask_b], {duration:2.3, x:'-=10', rotation:0.1}, 'move2-=0.2')
	}

	// Frame 4
	function Frame4() {
		return gsap.timeline() 
		.set(fr4_txt,{alpha:1})

		.to(f3TxtSplit.chars, {duration:0.2, alpha:0, x:'-=5', scaleY:0, stagger:-0.005, transformOrigin:'100% 25% 0', ease:'sine.in'}, 0.1)
		.from(f4TxtSplit.chars, {duration:0.2, alpha:0, x:'+=15', scaleY:0, stagger:0.005, transformOrigin:'100% 25% 0', ease:'sine.out'}, 0.3)

		.to(img_2, {duration:0.6, alpha:1}, 0)

		.to([hex_mask_f,hex_mask_m,hex_mask_b], {duration:0.5, scale:1, x:'+=140', y:'-=20', rotationZ:0.05, ease:'sine.inOut'}, 0)
		.to([img_1,img_2], {duration:0.5, x:'+=35', y:'+=50', scale:0.95, ease:'sine.inOut'}, '-=0.46')

		.set([hm_t,hm_tl],{alpha:1},'-=0.1')

		.to([img_1,img_2], {duration:2, x:'+=10'}, 'move3-=0')
	}

	// Frame 5
	function Frame5() {
		return gsap.timeline() 	
		.set([hex_mask_b],{alpha:0})
		.set([hm_t,hm_tl],{alpha:1})

		.to([hex_mask_f,hex_mask_m,hex_mask_b], {duration:0.8, scale:0.10416, rotationZ:180, x:'-=152.5', y:'-=13.5', ease:'power2.in'}, 0)
		.to(frame_t, {duration:0.2, y:'+=100%', ease:'power3.in'}, 'hexColapBack-=0.2')
		.to(frame_r, {duration:0.2, x:'-=75%', ease:'power3.in'}, 'hexColapBack-=0.2')
		.to(hm_l, {duration:0.3, alpha:1, morphSVG:hm_l, ease:'power1.inOut'}, 'hexColapBack-=0.2')
		.to(hm_r, {duration:0.3, alpha:1, morphSVG:hm_r, ease:'power1.inOut'}, 'hexColapBack-=0.2')
		.to(hm_bg, {duration:0.2, alpha:1}, 'hexColapBack-=0.15')
		.set([img_1,img_2], {alpha:0}, '-=0')

		.to(f4TxtSplit.chars, {duration:0.2, alpha:0, x:'-=5', scaleY:0, stagger:-0.005, transformOrigin:'100% 25% 0', ease:'sine.in'}, '-=0.5')

		.fromTo([fr5_txt,fr5_txt_1,fr5_txt_2,fr5_txt_3], {x:'+=15', scaleY:0}, {duration:0.2, alpha:1, x:'-=15', scaleY:1, stagger:0.05, transformOrigin:'100% 25% 0', ease:'sine.out'}, 'fr5In-=0.2')
		.to(logo, {duration:0.6, alpha:1}, 'fr5In-=0.2')
		.to(terms, {duration:0.6, alpha:1}, 'fr5In-=0.1')

		.fromTo(cta, {scaleX:0}, {duration:0.6, scaleX:1, transformOrigin:'50% 0%', alpha:1, ease:'power2.out'}, '-=0.6')
		.to(cta_txt, {duration:0.5, alpha:1, ease:'power2.out'}, '-=0.3')
	}

	// Frame 6
	function Frame6() {
		return gsap.timeline()
		.set(card,{x:'+=500', rotation:0, scale:0.8242, marginTop:-55, marginLeft:92, transformOrigin:'50% 0%'})
		.set(end_txt,{alpha:1})
		
		.to([fr5_txt,fr5_txt_1,fr5_txt_2,fr5_txt_3], {duration:0.3, alpha:0, x:'-=50', stagger:-0.03, ease:'sine.in'}, 0)
		.from(endTxtSplit.chars, {duration:0.2, alpha:0, x:'+=15', scaleY:0, stagger:0.005, transformOrigin:'100% 25% 0', ease:'sine.out'}, '-=0.1')
		.to(card, {duration:0.3, x:0, alpha:1, webkitFilter:"blur(0px)", ease:'power1.out'}, '-=0.2')

		.add(ctaHighlight, '+=0.5')
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