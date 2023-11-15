// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		var ldr = new ImageLoader('assets/', false);
		window.addEventListener("IMAGES_LOADED", imagesLoaded);
		ldr.load("cards", ["card_1"], ".png", "hide", "card_1", 174, null);
		ldr.load("cards", ["card_3"], ".jpg", "hide", "card_2", 112, null);
		ldr.load("cards", ["card_2"], ".jpg", "hide", "card_3", 112, null);
	}

});

function imagesLoaded() {
	textPlugin();
	initAnimation();
}

// Run Animation
function initAnimation() {

	var edge = window.navigator.userAgent.indexOf("Edge") > -1; // Check if edge browser

	// Settings
	TweenMax.ticker.fps(120);
	var 	seekTo=0,
			timescaleTo=1,
			loops=1,
			loopCount=0;

	// Variables
	var sombrero = [smb_front,smb_tie,smb_back];

	// Start Animation
	StartScene(); 

	function StartScene() {

		// Hide loader
		TweenMax.set(loader,{alpha:0});

		// Animation setup
		var anim = new TimelineMax();
		var main = new TimelineMax({onComplete:Replay});

		// Animation
		main	.add(Setup(anim, 0))
				.add(Frame1(anim, 0.3))
				.add(Frame2(anim, '+=0.9'))
				.add(Frame3(anim, '+=0.2'))
				.add(Frame4(anim, '-=1'))
				.add(Frame5(anim, '+=2'))
				.add(Frame6(anim, '+=2'))

		// Playback options
		main.seek(seekTo);
		main.timeScale(timescaleTo);
	}

	// Setup
	function Setup(anim,delay) {
		anim 	
		return anim;
	}

	// Frame 1
	function Frame1(anim,delay) {
		// In
		anim 	

		.set([nexus],{alpha:1})
		.from([nexus], 0.4, {scale:0.25, ease:Power3.easeIn}, delay)
		.to(fr1_txt_1, 0, {alpha:1, text:'Say'}, '+=0.2')
		.to(fr1_txt_1, 0, {text:'Say Adi&oacute;s'}, '+=0.3')

		return anim;
	}

	// Frame 2
	function Frame2(anim,delay) {
		anim 	
		
		// Out
		.to(fr1_txt, 0.1, {alpha:0, ease:Linear.easenone}, delay)
		.to(hex_t, 0.4, {x:'+=30',y:'-=30', ease:Power3.easeIn}, 'hexOut-=0.2')
		.to(hex_b, 0.4, {x:'-=30',y:'+=30', ease:Power3.easeIn}, 'hexOut-=0.2')

		// In
		.set([fr2_txt_1,fr2_txt_2,sombrero],{alpha:1})
		.from([fr2_txt_1], 0.3, {y:'+=250', ease:Power2.easeOut}, '-=0')
		.from([fr2_txt_2], 0.3, {y:'+=250', ease:Power2.easeOut}, '-=0.2')

		.fromTo(sombrero, 0.3, {y:'-=200'}, {y:'+=200', ease:Power2.easeOut}, '-=0')
		.to([fr2_txt_1,fr2_txt_2], 0.2, {y:'+=2', ease:Power1.easeInOut}, '-=0.2')
		.to(sombrero, 1.6,{rotation:'+=22', y:'+=5', x:'+=5', ease:Power2.easeIn}, 'smb1-=0')
		.to(smb_tie, 1.6,{rotation:'-=2', transformOrigin:'0 0 0', ease:Linear.easenone}, 'smb1-=0')

		.staggerTo([fr2_txt_1,fr2_txt_2], 0.3, {x:'-=350', webkitFilter:"blur(1px)", ease:Power2.easeIn}, 0.1, '-=0.3')
		.to(fr2_wrap, 0.3, {rotation:'+=50', y:'+=250', x:'+=5', ease:Power1.easeIn}, '-=0.27')
		
		return anim;
	}

	// Frame 3
	function Frame3(anim,delay) {
		anim 	
		
		// In
		.set([fr3_world,fr3_statue,fr3_tower], {transformOrigin:'122px 149px 0'})
		.set([fr3_plane], {x:'-=80'})
		.fromTo(fr3_txt_1, 0.3, {x:'-=300', webkitFilter:"blur(1px)"}, {webkitFilter:"blur(0px)", alpha:1, x:'+=300', ease:Power2.easeOut }, delay)
		.fromTo(fr3_txt_2, 0.3, {x:'+=300', webkitFilter:"blur(1px)"}, {webkitFilter:"blur(0px)", alpha:1, x:'-=300', ease:Power2.easeOut }, '-=0.1')
		.fromTo(fr3_txt_3, 0.3, {x:'-=300', webkitFilter:"blur(1px)"}, {webkitFilter:"blur(0px)", alpha:1, x:'+=300', ease:Power2.easeOut }, '-=0.2')

		.fromTo([fr3_wrap], 1, {y:'+=120', scale:0.6, alpha:0}, {y:'-=120', scale:1, alpha:1, ease:Power2.easeOut}, '-=0.8')
		.staggerFromTo([fr3_statue,fr3_tower], 0.8, {y:'+=80', scale:0.5}, {y:'-=80', scale:1, ease:Power2.easeOut}, 0.06, '-=0.6')
		.fromTo([fr3_plane], 1, {scale:0.6, alpha:0}, {scale:1, alpha:1, ease:Power2.easeOut}, '-=0.7')

		.fromTo([fr3_world,fr3_statue,fr3_tower], 3, {rotation:'-=10'}, {rotation:'+=22', ease:Linear.easeNone}, '-=1')
		.to([fr3_plane], 3, {x:'+=80', ease:Linear.easeNone}, '-=3')

		return anim;
	}

	// Frame 4
	function Frame4(anim,delay) {
		anim 	
		
		// Out
		.staggerTo([fr3_txt_1,fr3_txt_2,fr3_txt_3,fr3_world,fr3_statue,fr3_tower], 0.3, {y:'+=200', ease:Power2.easeIn}, -0.05, delay)
		.to(fr3_plane, 0.5, {y:'-=60', x:'+=90', scale:1.5, ease:Power2.easeIn}, '-=1.2')

		// In
		.staggerFromTo([fr4_txt,card_1], 0.4, {y:'-=200',alpha:0}, {y:'+=200', alpha:1, ease:Power2.easeOut}, -0.05, '-=0.4')

		return anim;
	}

	// Frame 5
	function Frame5(anim,delay) {
		anim 	

		// Out
		.set([fr5_mask], {alpha:1})
		.fromTo(fr5_mask, 0.3, {y:'-=250'}, {y:'+=250', ease:Power1.easeOut}, delay)

		// In
		.fromTo(fr5_txt, 0.05, {y:'+=50'}, {y:'-=50', alpha:1, ease:Power1.easeOut}, 'fr5Mask-=0.28')
		.fromTo(fr5_txt_mask, 0.05, {y:'-=50'}, {y:'+=50',ease:Power1.easeOut}, 'fr5Mask-=0.28')
		.set(fr4_txt, {alpha:0})

		return anim;
	}

	// Frame 6
	function Frame6(anim,delay) {
		anim 	

		.set([card_2,card_3], {alpha:1})

		// Out
		.to([fr5_mask], 0.4, {y:'-=250', ease:Power2.easeIn}, delay)
		.set(fr5_txt, {alpha:0})

		// In
		.to(card_1, 1, {scale:0.82, ease:Power1.easeInOut}, '-=0.2')
		.fromTo(card_2, 0.8, {x:'+=40'}, {x:'-=40', ease:Power1.easeOut}, 'cardsIn-=0.7')
		.fromTo(card_3, 0.8, {x:'-=40'}, {x:'+=40', ease:Power1.easeOut}, 'cardsIn-=0.7')
		.staggerTo([fr6_txt,logo,cta,terms], 0.8, {alpha:1, ease:Linear.easeNone}, 0.05, '-=0.3')

		.to(cta_shine1, 1.2, {x:150, skewX:'-25', alpha:0.9, ease:Power2.easeOut}, '+=1')

		return anim;
	}
	
	// Replay
	function Replay() {
		var anim = new TimelineMax();

		loopCount++;
		if (loopCount < loops) {
			anim
			.to([fr4_txt_1,fr4_txt_2,logo,nexus,cta,terms], 0.5, {alpha:0, ease:Linear.easeNone}, '+=0.5')
			.to(stage, 0, {alpha:1, onComplete:function(){
				StartScene();
			}}, '+=0.5');

		}
	}
}

// Image loader (Polite Load)
var ImageLoader = function(path, dbug) {
	"use strict";
	if(dbug) console.log("[IMAGE_LOADER] Init");
	var count = 0;

	this.load = function(parent, names, extension, className, id, width, height) {
		var container = document.getElementById(parent) || document.querySelector(parent);
		names.forEach( function(name) {
			container.appendChild(createImage(name, extension, path, className, id, width, height)) 
		})
	};

	function createImage(name, extension, path, className, id, width, height) {
		if(dbug) console.log("[IMAGE_LOADER] Image " + name);
		count++;
		var image = document.createElement("img");
		image.src = (path ? path + name + extension : name + extension)
		image.id = (id ? id : name);
		image.width = (width ? width : null);
		image.height = (height ? height : null);
		if(className) image.className = className;
		image.onload = countReady;
		return image;
	}

	function countReady() {
		count--;
		if( count === 0 ) {
			var event = document.createEvent('Event');
			event.initEvent("IMAGES_LOADED", true, false);
			window.dispatchEvent(event);
		}
	}
};

var textPlugin = function() {
	var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=function(b){var c=b.nodeType,d="";if(1===c||9===c||11===c){if("string"==typeof b.textContent)return b.textContent;for(b=b.firstChild;b;b=b.nextSibling)d+=a(b)}else if(3===c||4===c)return b.nodeValue;return d},b="[-]|�[�-�]|�[�-�]|[⚔-⚗]|�[�-�]|[�-�][�-�]",c=new RegExp(b),d=new RegExp(b+"|.","g"),e=function(a,b){return""!==b&&b||!c.test(a)?a.split(b||""):a.match(d)},f=_gsScope._gsDefine.plugin({propName:"text",API:2,version:"0.6.2",init:function(b,c,d,f){var g,h=b.nodeName.toUpperCase();if("function"==typeof c&&(c=c(f,b)),this._svg=b.getBBox&&("TEXT"===h||"TSPAN"===h),!("innerHTML"in b||this._svg))return!1;if(this._target=b,"object"!=typeof c&&(c={value:c}),void 0===c.value)return this._text=this._original=[""],!0;for(this._delimiter=c.delimiter||"",this._original=e(a(b).replace(/\s+/g," "),this._delimiter),this._text=e(c.value.replace(/\s+/g," "),this._delimiter),this._runBackwards=d.vars.runBackwards===!0,this._runBackwards&&(h=this._original,this._original=this._text,this._text=h),"string"==typeof c.newClass&&(this._newClass=c.newClass,this._hasClass=!0),"string"==typeof c.oldClass&&(this._oldClass=c.oldClass,this._hasClass=!0),h=this._original.length-this._text.length,g=0>h?this._original:this._text,this._fillChar=c.fillChar||(c.padSpace?"&nbsp;":""),0>h&&(h=-h);--h>-1;)g.push(this._fillChar);return!0},set:function(a){a>1?a=1:0>a&&(a=0),this._runBackwards&&(a=1-a);var b,c,d,e=this._text.length,f=a*e+.5|0;this._hasClass?(b=this._newClass&&0!==f,c=this._oldClass&&f!==e,d=(b?"<span class='"+this._newClass+"'>":"")+this._text.slice(0,f).join(this._delimiter)+(b?"</span>":"")+(c?"<span class='"+this._oldClass+"'>":"")+this._delimiter+this._original.slice(f).join(this._delimiter)+(c?"</span>":"")):d=this._text.slice(0,f).join(this._delimiter)+this._delimiter+this._original.slice(f).join(this._delimiter),this._svg?this._target.textContent=d:this._target.innerHTML="&nbsp;"===this._fillChar&&-1!==d.indexOf("  ")?d.split("  ").join("&nbsp;&nbsp;"):d}}),g=f.prototype;g._newClass=g._oldClass=g._delimiter=""}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("TextPlugin");
}