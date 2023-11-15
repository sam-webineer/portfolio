// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		var ldr = new ImageLoader('assets/', false);
		window.addEventListener("IMAGES_LOADED", imagesLoaded);
		ldr.load("fr1", ["300x250_brand_fr1"], ".jpg", "hide", "fr1_img", null, null);
		ldr.load("fr2", ["300x250_brand_fr2"], ".jpg", "hide", "fr2_img", null, null);
		ldr.load("fr3", ["300x250_brand_fr3"], ".jpg", "hide", "fr3_img", null, null);
		ldr.load("fr4", ["300x250_brand_fr4"], ".jpg", "hide", "fr4_img", null, null);
	}

});

function imagesLoaded() {
	initAnimation();
}

// Run Animation
function initAnimation() {

	var edge = window.navigator.userAgent.indexOf("Edge") > -1; // Check if edge browser

	// Settings
	TweenMax.ticker.fps(120);
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
		var all_elems = [logo,cta,slant_gn,slant_wt,slant_wt2,cta_shine1]
		TweenMax.set([all_elems],{clearProps:"all"});

		// Hide loader
		TweenMax.set(loader,{alpha:0});

		// Animation setup
		var anim = new TimelineMax();
		var main = new TimelineMax({onComplete:Replay});

		// Animation
		main	.add(Setup(anim, 0))
				.add(Frame1(anim, 0.2))
				.add(Frame2(anim, '+=1.7'))
				.add(Frame3(anim, '+=2.2'))
				.add(Frame4(anim, '+=2.2'))

		// Playback options
		main.seek(seekTo);
		main.timeScale(timescaleTo);
	}

	// Setup
	function Setup(anim,delay) {
		anim 	
		.set([slant_gn,fr1_img],{alpha:1})
		.set([slant_wt,slant_wt2],{height:0,alpha:0.5})
		.set([slant_wt,slant_wt2],{height:0,alpha:0.5})
		return anim;
	}

	// Frame 1
	function Frame1(anim,delay) {
		anim 	

		// In
		.from(slant_gn, 0.6, {height:450, ease:Power1.easeOut}, delay)
		.to(slant_wt2, 0.8, {height:225, alpha:0, ease:Power1.easeOut}, 's1-=0.5')
		.fromTo(slant_wt, 0.6, {height:225}, {height:400, alpha:0, ease:Power1.easeOut}, 's1-=0.5')
		
		.fromTo(fr1_txt, 0.4, {x:'-=5'}, {x:'+=5', alpha:1, ease:Power1.easeOUt}, '-=0.5')
		.fromTo(fr_txt, 0.4, {x:'+=5'}, {x:'-=5', alpha:1, ease:Power1.easeOut}, '-=0.4')
		.to(logo, 0.5, {alpha:1, ease:Linear.easeNone}, '-=0.6')
		
		.to(cta, 0.3, {alpha:1, ease:Linear.easeNone}, '-=0.2')

		.set(slant_wt,{height:0,alpha:0.3})
		.set(slant_wt2,{height:0,alpha:0.3})

		return anim;
	}

	// Frame 2
	function Frame2(anim,delay) {
		anim 	

		// Out
		.to(fr1_txt, 0.4, {alpha:0, ease:Linear.easeNone}, delay)

		// In
		.to(fr1_img, 0.6, {alpha:0, ease:Linear.easeNone}, 'sw1-=0.1')
		.to(fr2_img, 0.6, {alpha:1, ease:Linear.easeNone}, 'sw1-=0.1')
		.to(slant_wt2, 0.8, {height:225, alpha:0, ease:Power1.easeOut}, 's2-=0.8')
		.fromTo(slant_wt, 0.6, {height:225}, {height:400, alpha:0, ease:Power1.easeOut}, 's2-=0.8')
		.to(fr2_txt, 0.4, {alpha:1, ease:Linear.easeNone}, '-=0.5')

		.set(slant_wt,{height:0,alpha:0.3})
		.set(slant_wt2,{height:0,alpha:0.3})

		return anim;
	}

	// Frame 3
	function Frame3(anim,delay) {
		anim 	

		// Out
		.to(fr2_txt, 0.4, {alpha:0, ease:Linear.easeNone}, delay)

		// In
		.to(fr2_img, 0.6, {alpha:0, ease:Linear.easeNone}, 'sw2-=0.1')
		.to(fr3_img, 0.6, {alpha:1, ease:Linear.easeNone}, 'sw2-=0.1')
		.to(slant_wt2, 0.8, {height:225, alpha:0, ease:Power1.easeOut}, 's3-=0.8')
		.fromTo(slant_wt, 0.6, {height:225}, {height:400, alpha:0, ease:Power1.easeOut}, 's3-=0.8')
		.to(fr3_txt, 0.4, {alpha:1, ease:Linear.easeNone}, '-=0.5')

		.set(slant_wt,{height:0,alpha:0.3})
		.set(slant_wt2,{height:0,alpha:0.3})

		return anim;
	}

	// Frame 4
	function Frame4(anim,delay) {
		anim 	

		// Out
		.to([fr3_txt,fr_txt,logo], 0.4, {alpha:0, ease:Linear.easeNone}, delay)
		.set(logo,{left:114})

		// In
		.to(fr3_img, 0.2, {alpha:0, ease:Linear.easeNone}, 'sw3-=0.1')
		.to(fr4_img, 0.6, {alpha:1, ease:Linear.easeNone}, 'sw3-=0.1')
		.to(slant_wt2, 0.8, {height:400, alpha:0, ease:Power1.easeOut}, 's4-=0.8')
		.to(slant_gn, 0.7, {height:400, alpha:0, ease:Power1.easeInOut}, 's4-=0.8')
		.fromTo(slant_wt, 0.6, {height:225}, {height:400, alpha:0, ease:Power1.easeOut}, 's4-=0.8')

		.staggerTo([logo,fr4_txt], 0.4, {alpha:1, ease:Linear.easeNone}, -0.1, '-=0.3')

		.to(cta_shine1, 1.6, {x:280, skewX:'-25', alpha:0.9, ease:Power2.easeOut}, '+=0.6')
		
		return anim;
	}
	
	// Replay
	function Replay() {
		var anim = new TimelineMax();

		loopCount++;
		if (loopCount < loops) {

			anim.to([logo,fr4_txt,fr4_img,cta], 0.4, {alpha:0, ease:Linear.easeNone, onComplete:function(){
				StartScene();
			}}, '+=2');

		}
	}
}

// Image loader (Polite Load)
var ImageLoader=function(path,dbug){"use strict";if(dbug)console.log("[IMAGE_LOADER] Init");var count=0;this.load=function(parent,names,extension,className,id,width,height){var container=document.getElementById(parent)||document.querySelector(parent);names.forEach(function(name){container.appendChild(createImage(name,extension,path,className,id,width,height))})};function createImage(name,extension,path,className,id,width,height){if(dbug)console.log("[IMAGE_LOADER] Image "+name);count++;var image=document.createElement("img");image.src=(path?path+name+extension:name+extension)
image.id=(id?id:name);image.width=(width?width:null);image.height=(height?height:null);if(className)image.className=className;image.onload=countReady;return image}
function countReady(){count--;if(count===0){var event=document.createEvent('Event');event.initEvent("IMAGES_LOADED",!0,!1);window.dispatchEvent(event)}}}
