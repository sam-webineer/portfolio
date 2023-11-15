// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		var ldr = new ImageLoader('assets/', false);
		window.addEventListener("IMAGES_LOADED", imagesLoaded);
		ldr.load("flipbook", ["ftb_m"], ".png", "hide z5", "ftb_m", null, null);
		ldr.load("flipbook", ["ftb_t"], ".png", "hide z7", "ftb_t", null, null);
		ldr.load("flipbook", ["ftb_b"], ".png", "hide z2", "ftb_b", null, null);
		ldr.load("flipbook", ["vln_t"], ".png", "hide z7", "vln_t", null, null);
		ldr.load("flipbook", ["blr_b_2"], ".png", "hide z6", "blr_b_2", null, null);
		ldr.load("flipbook", ["blr_b"], ".png", "hide z5", "blr_b", null, null);
		ldr.load("flipbook", ["bdr_m"], ".png", "hide z6", "bdr_m", null, null);
		ldr.load("flipbook", ["mim_t"], ".png", "hide z4", "mim_t", null, null);
		ldr.load("flipbook", ["dvr_t"], ".png", "hide z3", "dvr_t", null, null);
		ldr.load("flipbook", ["dvr_m"], ".png", "hide z3", "dvr_m", null, null);
		ldr.load("flipbook", ["dvr_b"], ".png", "hide z1", "dvr_b", null, null);
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
			timescaleTo=1,
			loops=1,
			loopCount=0;

	// Variables

	// Start Animation
	StartScene(); 

	function StartScene() {

		CSSPlugin.useSVGTransformAttr = false;

		// Resets
		var all_elems = [nexus,fr2_txt_line_1,fr2_txt_line_2,fr3_img,hsbc,uk,cta,cta_shine1,'.flipbook img']
		gsap.set([all_elems],{clearProps:"all"});

		// Hide loader
		gsap.set(loader,{alpha:0});

		// Animation setup
		var main = gsap.timeline({onComplete:Replay});

		// Animation
		main	.add(Setup(), 0)
				.add(Frame1(), 0.2)
				.add(Frame2(), '+=0.9')
				.add(Frame3(), '+=0.4')
				.add(Frame4(), '+=1')
				.add(Frame5(), '+=2.6')

		// Playback options
		gsap.globalTimeline.timeScale(timescaleTo);
		main.seek(seekTo, true)
		// console.log(main.duration())
	}

	// Setup
	function Setup() {
		return gsap.timeline()
		.set([nexus],{alpha:1})
	}

	// Frame 1
	function Frame1() {
		var counter = {val:0};

		return gsap.timeline()

		// In
		.fromTo([nexus_t,nexus_l], 0.3, {x:'-=420', webkitFilter:"blur(2px)"}, {x:'+=420', webkitFilter:"blur(0px)"}, { ease:'power2.out'}, 0)
		.fromTo([nexus_b,nexus_r], 0.3, {x:'+=420', webkitFilter:"blur(2px)"}, {x:'-=420', webkitFilter:"blur(0px)"}, { ease:'power2.out'}, 0)

	}

	// Frame 2
	function Frame2() {
		return gsap.timeline()

		.set([dvr_b,dvr_m,dvr_t],{alpha:1})
		
		// Out
		.to([nexus], 0.4, {x:'-=420', ease:'power2.in'}, 0)
		
		// In
		.fromTo([dvr_b,dvr_t], 0.3, {x:'-=420', webkitFilter:"blur(5px)"}, {x:'+=420', webkitFilter:"blur(0px)", ease:'power2.out'}, 'sw0-=0.1')
		.fromTo([dvr_m], 0.3, {x:'+=420', webkitFilter:"blur(5px)"}, {x:'-=420', webkitFilter:"blur(0px)", ease:'power2.out'}, 'sw0-=0.1')

		.fromTo([mim_t], 0.3, {x:'-=420', webkitFilter:"blur(5px)"}, {x:'+=420', alpha:1, webkitFilter:"blur(0px)", ease:'none'}, '+=0')
		.fromTo([dvr_t], 0.3, {webkitFilter:"blur(0px)"}, {x:'+=420', webkitFilter:"blur(5px)", ease:'none'}, '-=0.05')

		.fromTo([blr_b], 0.3, {x:'+=420', webkitFilter:"blur(5px)"}, {x:'-=420', alpha:1, webkitFilter:"blur(0px)", ease:'none'}, '-=0.1')
		.fromTo([dvr_b], 0.3, {webkitFilter:"blur(0px)"}, {x:'-=420', webkitFilter:"blur(5px)", ease:'none'}, '-=0.05')
		.to([blr_b_2], 0, {alpha:1}, '-=0.3')

		.fromTo([bdr_m], 0.3, {x:'-=420', webkitFilter:"blur(5px)"}, {x:'+=420', alpha:1, webkitFilter:"blur(0px)", ease:'none'}, '-=0.1')
		.fromTo([dvr_m], 0.3, {webkitFilter:"blur(0px)"}, {x:'+=420', webkitFilter:"blur(5px)", ease:'none'}, '-=0.05')
		.to([blr_b_2], 0, {alpha:0}, '-=0.3')

		.fromTo([vln_t], 0.3, {x:'+=420', webkitFilter:"blur(5px)"}, {x:'-=420', alpha:1, webkitFilter:"blur(0px)", ease:'none'}, '-=0.1')
		.fromTo([mim_t], 0.3, {webkitFilter:"blur(0px)"}, {x:'-=420', webkitFilter:"blur(5px)", ease:'none'}, '-=0.05')

		.fromTo([ftb_b], 0.3, {x:'-=420', webkitFilter:"blur(5px)"}, {x:'+=420', alpha:1, webkitFilter:"blur(0px)", ease:'none'}, '-=0.1')
		.fromTo([blr_b], 0.3, {webkitFilter:"blur(0px)"}, {x:'+=420', webkitFilter:"blur(5px)", ease:'none'}, '-=0.05')

		.fromTo([ftb_t], 0.3, {x:'+=420', webkitFilter:"blur(5px)"}, {x:'-=420', alpha:1, webkitFilter:"blur(0px)", ease:'none'}, '-=0.1')
		.fromTo([vln_t], 0.3, {webkitFilter:"blur(0px)"}, {x:'-=420', webkitFilter:"blur(5px)", ease:'none'}, '-=0.05')

		.fromTo([ftb_m], 0.3, {x:'-=420', webkitFilter:"blur(5px)"}, {x:'+=420', alpha:1, webkitFilter:"blur(0px)", ease:'none'}, '-=0.1')
		.fromTo([bdr_m], 0.3, {webkitFilter:"blur(0px)"}, {x:'+=420', webkitFilter:"blur(5px)", ease:'none'}, '-=0.05')

	}

	// Frame 3
	function Frame3() {
		return gsap.timeline()
		
		// Out
		.to([ftb_t,ftb_b], 0.4, {x:'-=420', webkitFilter:"blur(0.5px)", ease:'power2.in'}, 0)
		.to(ftb_m, 0.4, {x:'+=420', webkitFilter:"blur(0.5px)", ease:'power2.in'}, '-=0.4')
		
		// In
		.to(nexus, 0.4, {x:'+=420', webkitFilter:"blur(0px)", ease:'power2.out'}, '-=0.2')
		.fromTo(fr2_txt_line_1, 0.4, {x:'-=420'}, {x:'+=420', alpha:1, ease:'power2.out'}, 'fr2In-=0.3')
		.fromTo(fr2_txt_line_2, 0.4, {x:'+=420'}, {x:'-=420', alpha:1, ease:'power2.out'}, 'fr2In-=0.3')

	}

	// Frame 4
	function Frame4() {
		return gsap.timeline()
		
		// Out
		.to([fr2_txt_line_1], 0.4, {x:'-=420', ease:'power2.in'}, 0)
		.to([fr2_txt_line_2], 0.4, {x:'+=420', ease:'power2.in'}, '-=0.4')

		.to(nexus, 0.8, {rotation:180, scale:0.19, x:-33, y:-93, ease:'power2.inOut'}, '-=0.3')

		// In
		.to([[hsbc,uk],fr3_img], 0.4, {alpha:1, ease:'none'}, '-=0.1')

	}

	// Frame 5
	function Frame5() {
		return gsap.timeline()
		
		// Out
		.to(fr3_img, 0.6, {alpha:0, ease:'none'}, 0)

		// In
		.to([fr4_txt,cta,terms], 0.8, {alpha:1, ease:'none'}, '+=0.1')

		.to(cta_shine1, 1.6, {x:200, skewX:'-25', alpha:0.9, ease:'power2.out'}, '+=0.2')

	}
	
	// Replay
	function Replay() {
		loopCount++;
		if (loopCount < loops) {
			return gsap.timeline() 
			anim.to([fr3_img,fr4_txt,nexus,hsbc,uk,logo_nexus,cta,terms], 0.5, {alpha:0, ease:'none', onComplete:function(){
				StartScene();
			}}, '+=4.2');

		}
	}
}

// Image loader (Polite Load)
var ImageLoader=function(path,dbug){"use strict";if(dbug)console.log("[IMAGE_LOADER] Init");var count=0;this.load=function(parent,names,extension,className,id,width,height){var container=document.getElementById(parent)||document.querySelector(parent);names.forEach(function(name){container.appendChild(createImage(name,extension,path,className,id,width,height))})};function createImage(name,extension,path,className,id,width,height){if(dbug)console.log("[IMAGE_LOADER] Image "+name);count++;var image=document.createElement("img");image.src=(path?path+name+extension:name+extension)
image.id=(id?id:name);image.width=(width?width:null);image.height=(height?height:null);if(className)image.className=className;image.onload=countReady;return image}
function countReady(){count--;if(count===0){var event=document.createEvent('Event');event.initEvent("IMAGES_LOADED",!0,!1);window.dispatchEvent(event)}}}