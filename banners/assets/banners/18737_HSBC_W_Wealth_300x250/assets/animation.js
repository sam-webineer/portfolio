// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		var ldr = new ImageLoader('assets/', false);
		window.addEventListener("IMAGES_LOADED", imagesLoaded);

		// // Load Images
		ldr.load("img_cont", ['img_lyr_1'], ".png", "abs lyr auto-xy full hide", "img_1", null, null);
		ldr.load("img_cont", ['img_lyr_2'], ".jpg", "abs lyr auto-xy full hide", "img_2", null, null);
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

	// Start Animation
	StartScene(); 

	function StartScene() {

		CSSPlugin.useSVGTransformAttr = false;

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
				.add(Frame2(), '+=1')
				.add(Frame3(), '-=0.2')
				.add(Frame4(), '+=0.5')
				.add(Frame5(), '+=1.7')

		// Playback options
		gsap.globalTimeline.timeScale(timescaleTo);
		main.seek(seekTo, true)
		console.log(main.duration())
	}

	// Setup
	function Setup() {
		return gsap.timeline()
		.set([img_1,img_2],{scale:1})
	}

	// Frame 1
	function Frame1() {
		return gsap.timeline() 

		.set([hm_bg,hm_t],{alpha:0})
		.set([hex_mask_b],{alpha:1})

		.to(fr1_txt, {duration:0.6, alpha:1}, '+=0.1')
	}

	// Frame 2
	function Frame2() {
		return gsap.timeline() 	
		.set([hex_mask_b],{alpha:1})

		.to([hex_mask_f,hex_mask_m,hex_mask_b], {duration:0.7, scale:1.4, x:'+=70', y:'+=70', rotationZ:0.05, ease:'power1.inOut'}, 0.1)
		.to(hm_l, {duration:0.7, morphSVG:hm_l_colap, ease:'power2.inOut'}, 0)
		.to(hm_r, {duration:0.7, morphSVG:hm_r_colap, ease:'power2.inOut'}, 0)
		
		.to(fr1_txt, {duration:0.4, alpha:0}, 0)		
		.to(fr2_txt, {duration:0.6, alpha:1}, 0.4)

		.fromTo(img_1, {alpha:0, x:'-=10', y:'+=20'}, {duration:0.6, x:'+=10', y:'-=20', alpha:1, rotationZ:0.05, ease:'power1.out'}, 0.3)
		.fromTo(img_2, {x:'-=10', y:'+=20'}, {duration:0.6, x:'+=10', y:'-=20', rotationZ:0.05, ease:'power1.out'}, 0.3)
		.to([img_1,img_2], {duration:2, x:'+=10'}, '-=0.1')
		
		.set([hm_l,hm_r],{alpha:0})
		.set(img_2,{rotationZ:0.05})

	}

	// Frame 3
	function Frame3() {
		return gsap.timeline() 
		.to(fr2_txt, {duration:0.4, alpha:0}, 0)
		.to(img_2, {duration:0.6, alpha:1}, 0.2)
		.set(img_1, {alpha:0})

		.to([hex_mask_f,hex_mask_m,hex_mask_b], {duration:1, x:'-=60', y:'-=50', scale:3, rotationZ:0.05, ease:'power2.inOut'}, 0)
		.to([img_1,img_2], {duration:1, scale:0.64, rotationZ:0.1, x:'-=55', y:'-=40', ease:'power1.inOut'}, 0)
	}

	// Frame 4
	function Frame4() {
		return gsap.timeline() 	
		.set([hex_mask_b],{alpha:0})
		.set([hm_t],{alpha:1})

		.to([hex_mask_f,hex_mask_m,hex_mask_b], {duration:1.2, scale:0.2084, rotationZ:180, x:'-=119', y:'+=17', ease:'power2.in'}, 0)

		.to(frame_t, {duration:0.2, y:'+=100%', ease:'power3.in'}, 'hexColapBack-=0.2')
		.to(frame_r, {duration:0.2, x:'-=75%', ease:'power3.in'}, 'hexColapBack-=0.2')

		.to(hm_l, {duration:0.3, alpha:1, morphSVG:hm_l, ease:'power1.inOut'}, 'hexColapBack-=0.2')
		.to(hm_r, {duration:0.3, alpha:1, morphSVG:hm_r, ease:'power1.inOut'}, 'hexColapBack-=0.2')
		
		.to(hm_bg, {duration:0.2, alpha:1}, 'hexColapBack-=0.15')

		.to(fr3_txt_1, {duration:0.6, alpha:1}, 'fr4In-=0.35')
		.to(logo, {duration:0.6, alpha:1}, 'fr4In-=0.3')
		
		.to(terms, {duration:0.6, alpha:1}, 'fr4In-=0.2')

		.fromTo(cta, {scaleX:0}, {duration:0.6, scaleX:1, transformOrigin:'0% 0%', alpha:1, ease:'power2.out'}, 'cta-=0.5')
		.to(cta_txt, {duration:0.5, alpha:1, ease:'power2.out'}, 'cta-=0.3')
	}

	// Frame 5
	function Frame5() {
		return gsap.timeline() 	

		.to(fr3_txt_1, {duration:0.4, alpha:0}, 0)
		.to([fr3_txt_2,fr3_txt_3], {duration:0.6, alpha:1, stagger:0.15}, '-=0')

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