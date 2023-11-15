// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		var ldr = new ImageLoader('assets/', false);
		window.addEventListener("IMAGES_LOADED", imagesLoaded);

		// Load Images
		imagesLoaded();
	}
});

function imagesLoaded() {
	initAnimation();
}

// Run Animation
function initAnimation() {

	gsap.registerPlugin(DrawSVGPlugin);
	gsap.registerPlugin(SplitText);

	var edge = window.navigator.userAgent.indexOf("Edge") > -1; // Check if edge browser

	// Settings
	gsap.ticker.fps(60);
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

	// Start Animation
	StartScene(); 

	function StartScene() {

		// SplitText
		f1TxtSplit = new SplitText(f1_txt, {type:"chars,lines"});
		f3TxtSplit = new SplitText(f3_txt, {type:"chars,lines"});
		f4Txt3Split = new SplitText(f4_txt, {type:"chars,lines"});
		f5TxtSplit = new SplitText(f5_txt, {type:"chars,lines"});
		txtSplits.push(f1TxtSplit,f3TxtSplit,f4Txt3Split,f5TxtSplit);

		// Resets
		gsap.set(ecs("lyr"),{clearProps:"all"});

		// Hide loader
		gsap.to(spinner,{duration:0.1, alpha:0});
		gsap.to(loader,{duration:0.4, alpha:0});

		// Animation setup
		var main = gsap.timeline({onComplete:Replay});
		var grad = gsap.timeline({onComplete:Replay})

		// Animation
		main	.add(Setup(), 0)
				.add(Frame1(), 1)
				.add(Frame2(), '+=1')
				.add(Frame3(), '+=1.5')
				.add(Frame4(), '+=2')
				.add(Frame5(), '+=2')

		grad .add(runGrad(), 1)

		// Playback options
		gsap.globalTimeline.timeScale(timescaleTo);
		main.seek(seekTo, true)
		grad.seek(seekTo, true)
		console.log(main.duration())
	}

	// Setup
	function runGrad() {
		const b1 = "linear-gradient(0deg, rgba(163,214,30,1) 0%, rgba(71,141,50,1) 40%, rgba(0,86,64,1) 80%)";
		const b2 = "linear-gradient(230deg, rgba(163,214,30,1) 0%, rgba(71,141,50,1) 30%, rgba(0,86,64,1) 120%)";

		return gsap.timeline()
		.fromTo(bg, {background:b1}, {duration:12, background:b2})
		.to(bg2, {duration:2, alpha:1}, 6)
	}

	// Setup
	function Setup() {
		return gsap.timeline()
		.set(logo, {scale:0.18})
		.set(['.mask_el','.fr5_mask_el'], {scale:0, transformOrigin:'50% 50%'})
	}


	// Frame 1
	function Frame1() {
		return gsap.timeline()
		.set([f1_txt], {alpha:1})
		
		.to(logo, {duration:0.4, scale:1, ease:'sine.in'})
		.to(logo_elems, {duration:0.3, alpha:0}, '-=0.4')

		.to(bg, {duration:0.1, alpha:1}, '-=0.1')
		.to(logo, {duration:0.4, alpha:0}, '-=0.15')

		.set(logo, {scale:0.1075, x:'-=111', y:'+=88'})
		.set(logo_elems, {alpha:1})

		.fromTo(f1TxtSplit.chars, {alpha:0}, {duration:0.4, alpha:1, stagger:0.015}, '-=0.3')
		.to('.mask_el', {duration:0.8, scale:1.2, rotation:-270, ease:'none'}, '-=0.3')
		
		.to([logo,tcs], {duration:0.6, alpha:1, stagger:0.05}, '-=0.6')

	}

	// Frame 2
	function Frame2() {
		return gsap.timeline() 

		.to(f1TxtSplit.lines, {duration:0.3, alpha:0, y:'-=40', stagger:0.01, ease:'power2.in'}, 0)

		.to(f2_txt, {duration:0.4, y:'-=84', ease:'power2.inOut'}, '-=0.2')

		.fromTo(card, {y:'+=200', webkitFilter:"blur(6px)"}, {duration:0.5, y:'-=200', alpha:1, webkitFilter:"blur(0px)", ease:'power2.inOut'}, '-=0.45')
	}

	// Frame 3
	function Frame3() {
		return gsap.timeline() 
		.set([f3_txt], {alpha:1})

		.to(f2_txt, {duration:0.2, alpha:0, y:'-=1'}, 0)
		.fromTo(f3TxtSplit.chars, {alpha:0}, {duration:0.3, alpha:1, stagger:0.005}, '+=0')
	}

	// Frame 4
	function Frame4() {
		return gsap.timeline() 	
		.set([f4_txt], {alpha:1})

		.to(f3_txt, {duration:0.2, alpha:0}, 0)
		
		.fromTo(f4Txt3Split.chars, {alpha:0}, {duration:0.3, alpha:1, stagger:0.005}, 'fr4In+=0')
	}

	// Frame 5
	function Frame5() {
		return gsap.timeline()
		.set([f5_txt], {alpha:1})

		.to([f4_txt,card], {duration:0.4, alpha:0.7, x:'-=300', webkitFilter:"blur(4px)", ease:'power2.in', stagger:0.05}, 0)

		.fromTo(f5TxtSplit.chars, {alpha:0}, {duration:0.3, alpha:1, stagger:0.005}, '+=0.1')

		.to('.fr5_mask_el', {duration:0.8, scale:1.2, rotation:-270, ease:'none'}, '-=0.2')

		.fromTo(cta, {scaleX:0.5}, {duration:0.7, scaleX:1, alpha:1, ease:'back.out(2)'}, 'cta-=0.3')
		.fromTo(cta_cont, {scale:0.6}, {duration:0.7, scale:1, alpha:1, ease:'back.out(1)'}, 'cta-=0.3')

		.add(ctaPulse, '+=0.3')
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

	// Button
	clicktag = document.getElementById('clicktag');
	// clicktag.onmouseover = ctaPulse;
		
	function ctaPulse(){
		if (!gsap.isTweening('#cta')) {
			return new gsap.timeline()
			.to([cta,cta_cont], {duration:0.2, scale:1.1, ease:'power2.inOut', repeat:3, yoyo:true}, '+=0')
		} 
	}

	function textAnim(txt1, txt2=null, timeIn=0, textDelay='-=0.05') {
		tl = new gsap.timeline()
		if(txt2) {
			tl.to(txt1, {duration:0.15, alpha:0, x:'+=5', scaleY:0, stagger:-0.005, transformOrigin:'0% 25% 0', ease:'sine.in'}, timeIn)
			tl.from(txt2, {duration:0.15, alpha:0, x:'-=10', scaleY:0, stagger:0.005, transformOrigin:'0% 25% 0', ease:'sine.out'}, textDelay)
		} else {
			tl.from(txt1, {duration:0.15, alpha:0, x:'-=10', scaleY:0, stagger:0.005, transformOrigin:'0% 25% 0', ease:'sine.out'}, timeIn)
		}
		return tl
	}
}

function resetAll(){var t=ecs("lyr");gsap.killTweensOf(t),gsap.set(t,{x:0,y:0,rotation:rot0(),scale:1,opacity:1})}
function rot0(){return browserSupportsSubpixel()?0:.01}