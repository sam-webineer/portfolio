// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		var ldr = new ImageLoader('assets/', false);
		window.addEventListener("IMAGES_LOADED", imagesLoaded);
		ldr.load("head", ["head_grp1"], ".png", null, "head_grp1", null, null);
		ldr.load("head", ["head_grp2"], ".png", null, "head_grp2", null, null);
		ldr.load("head", ["head_grp3"], ".png", null, "head_grp3", null, null);
		ldr.load("head", ["head_grp4"], ".png", null, "head_grp4", null, null);
		ldr.load("head", ["head_grp5"], ".png", null, "head_grp5", null, null);
		ldr.load("head", ["head_grp6"], ".png", null, "head_grp6", null, null);
		ldr.load("head", ["head_grp7"], ".png", null, "head_grp7", null, null);
		ldr.load("head", ["head_main"], ".png", null, "head_main", null, null);
		ldr.load("head", ["head_cog_l"], ".png", null, "head_cog_l", null, null);
		ldr.load("head", ["head_cog_m"], ".png", null, "head_cog_m", null, null);
		ldr.load("head", ["head_cog_s"], ".png", null, "head_cog_s", null, null);
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

	// Start Animation
	StartScene(); 

	function StartScene() {

		CSSPlugin.useSVGTransformAttr = false;

		// Resets
		var all_elems = [nexus,nexus_t,nexus_b,fr1_txt_1,fr2_txt_1,head,head_main,head_grp1,head_grp2,head_grp3,head_grp4,head_grp5,head_grp6,head_grp7,head_cog_l,head_cog_m,head_cog_s,fr3_txt_1,fr3_txt_1_1,fr3_txt_1_3,fr4_img,logo,cta,cta_shine1]
		TweenMax.set([all_elems],{clearProps:"all"});
		TweenMax.set(fr2_txt_1,{text:"When"});

		// Hide loader
		TweenMax.set(loader,{alpha:0});

		// Animation setup
		var anim = new TimelineMax();
		var main = new TimelineMax({onComplete:Replay});
		var spin = new TimelineMax();

		// Animation
		main	.add(Setup(anim, 0))
				.add(Frame1(anim, 0.2))
				.add(Frame2(anim, '+=0.6'))
				.add(Frame3(anim, '+=0.8'))
				.add(Frame4(anim, '+=0.2'))
				.add(Frame5(anim, '+=1.2'))
				.add(Frame6(anim, '+=1.4'))

		spin
		.to(head_cog_l, 4, {rotation:360, transformOrigin:'127.1px 54.9px 0', repeat:2, ease:Linear.easeNone}, 0)
		.to(head_cog_m, 4, {rotation:-360, transformOrigin:'108.2px 99.3px 0', repeat:2, ease:Linear.easeNone}, 0)
		.to(head_cog_s, 5, {rotation:360, transformOrigin:'134.6px 97.9px 0', repeat:2, ease:Linear.easeNone}, 0)
		.to([head_main,head_grp1,head_grp2,head_grp3,head_grp4,head_grp5,head_grp6,head_grp7], 5, {rotation:0.01, repeat:2, ease:Linear.easeNone}, 0);

		// Playback options
		main.seek(seekTo);
		main.timeScale(timescaleTo);
		spin.timeScale(timescaleTo);
	}

	// Setup
	function Setup(anim,delay) {
		anim 	
		.set([nexus],{alpha:1})
		return anim;
	}

	// Frame 1
	function Frame1(anim,delay) {
		anim 	

		// In
		.fromTo(nexus, 0.3, {scale:1}, {scale:0.25, ease:Power3.easeOut}, delay)
		.fromTo(nexus_t, 0.3, {y:'-=30'}, {y:'+=30', ease:Power3.easeOut}, delay)
		.fromTo(nexus_b, 0.3, {y:'30'}, {y:'0', ease:Power3.easeOut}, delay)

		.fromTo(fr1_txt_1, 0.2, {scale:20}, {scale:1, alpha:1}, '-=0.1')
		.to(fr1_txt_1, 0.03, {x:"+=7", y:"+=4", yoyo:true, repeat:3})
		.to(fr1_txt_1, 0.03, {x:"-=7", y:"-=4", yoyo:true, repeat:3})

		return anim;
	}

	// Frame 2
	function Frame2(anim,delay) {
		anim 	
		
		// Out
		.to(fr1_txt_1, 0.15, {scale:2.5, ease:Linear.easeNone}, delay)
		.to(fr1_txt_1, 0.05, {alpha:0, ease:Linear.easeNone}, '-=0.05')
		
		// In
		.to(fr2_txt_1, 0, {alpha:1}, '+=0')
		.to(fr2_txt_1, 0, {text:'When<br> you'}, '+=0.1')
		.to(fr2_txt_1, 0, {text:'When<br> you<br> Switch'}, '+=0.1')

		.to(fr2_txt_1, 0.03, {x:"+=4", y:"+=3", yoyo:true, repeat:3})
		.to(fr2_txt_1, 0.03, {x:"-=4", y:"-=3", yoyo:true, repeat:3})

		return anim;
	}

	// Frame 3
	function Frame3(anim,delay) {
		anim 	
		
		// Out
		.to(fr2_txt_1, 0.4, {scale:8, alpha:0, ease:Power3.easeIn}, delay)
		.to(nexus, 0.4, {scale:1, ease:Power3.easeIn}, '-=0.4')

		.to(nexus, 0.4, {rotation:90, ease:Power1.easeIn}, '-=0.1')
		.to(nexus, 0.2, {alpha:0, ease:Power1.easeIn}, '-=0.2')
		
		// In
		.fromTo(head, 0.4, {rotation:-45, alpha:0}, {rotation:0, alpha:1, ease:Power3.easeOut}, '-=0')

		.set(head,{transformOrigin:"173.5px 58px 0"})
		.to(head, 1.2, {rotation:20, scale:3.5, x:'-=25', y:'+=68', ease:Power1.easeInOut}, '+=0.3')

		return anim;
	}

	// Frame 4
	function Frame4(anim,delay) {
		anim 	
		
		// Out
		.to(head, 1.2, {rotation:0, scale:0.9, x:'+=28', y:'-=0', ease:Power1.easeInOut}, delay)
		.staggerTo([head_main,head_grp1,head_grp4,head_grp2,head_grp3,head_grp5,head_grp6,head_cog_s,head_grp7,head_cog_m], 0.3, {alpha:0, ease:Linear.easeNone}, 0.07, '-=1.2')

		// In
		.fromTo(fr3_txt_1, 0.6, {scale:0.8}, {scale:1, alpha:1, ease:Power1.easeOut}, '-=0.7')

		.fromTo(fr3_txt_1_1, 0.6, {alpha:0, y:'+=20'}, {alpha:1, y:'-=20', ease:Power1.easeOut}, 'fr4In-=0.4')
		.fromTo(fr3_txt_1_3, 0.6, {alpha:0, y:'-=20'}, {alpha:1, y:'+=20', ease:Power1.easeOut}, 'fr4In-=0.4')

		.to(fr3_txt_1_3, 0.03, {x:"+=7", y:"+=4", yoyo:true, repeat:3})
		.to(fr3_txt_1_3, 0.03, {x:"-=7", y:"-=4", yoyo:true, repeat:3})

		return anim;
	}

	// Frame 5
	function Frame5(anim,delay) {
		anim 	
		
		// Out
		.to(head_cog_l, 0.6, { scale:8, x:'+=0', y:'-=0', ease:Power2.easeIn}, delay)
		.to(head_cog_l, 0.2, { alpha:0, ease:Power1.easeIn}, '-=0.15')
		.to(fr3_txt_1, 0, { alpha:0}, '-=0.15')

		// In
		.staggerTo([logo,fr4_img], 0.8, {alpha:1, ease:Linear.easeNone}, 0.1, '-=0.1')

		return anim;
	}

	// Frame 6
	function Frame6(anim,delay) {
		anim 	
		
		// Out
		.to(fr4_img, 0.6, {alpha:0, ease:Linear.easenone}, delay)

		// In
		.to([fr5_txt,cta,terms], 0.8, {alpha:1, ease:Linear.easeNone}, '+=0.1')

		.to(cta_shine1, 1.6, {x:200, skewX:'-25', alpha:0.9, ease:Power2.easeOut}, '+=0.2')

		return anim;
	}
	
	// Replay
	function Replay() {
		var anim = new TimelineMax();

		loopCount++;
		if (loopCount < loops) {

			anim.to([fr4_img,fr5_txt,logo,cta,terms], 0.5, {alpha:0, ease:Linear.easeNone, onComplete:function(){
				StartScene();
			}}, '+=1.2');

		}
	}
}

// Image loader (Polite Load)
var ImageLoader=function(path,dbug){"use strict";if(dbug)console.log("[IMAGE_LOADER] Init");var count=0;this.load=function(parent,names,extension,className,id,width,height){var container=document.getElementById(parent)||document.querySelector(parent);names.forEach(function(name){container.appendChild(createImage(name,extension,path,className,id,width,height))})};function createImage(name,extension,path,className,id,width,height){if(dbug)console.log("[IMAGE_LOADER] Image "+name);count++;var image=document.createElement("img");image.src=(path?path+name+extension:name+extension)
image.id=(id?id:name);image.width=(width?width:null);image.height=(height?height:null);if(className)image.className=className;image.onload=countReady;return image}
function countReady(){count--;if(count===0){var event=document.createEvent('Event');event.initEvent("IMAGES_LOADED",!0,!1);window.dispatchEvent(event)}}}

var textPlugin = function() {
	// Textplugin
	var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=function(b){var c=b.nodeType,d="";if(1===c||9===c||11===c){if("string"==typeof b.textContent)return b.textContent;for(b=b.firstChild;b;b=b.nextSibling)d+=a(b)}else if(3===c||4===c)return b.nodeValue;return d},b="[-]|�[�-�]|�[�-�]|[⚔-⚗]|�[�-�]|[�-�][�-�]",c=new RegExp(b),d=new RegExp(b+"|.","g"),e=function(a,b){return""!==b&&b||!c.test(a)?a.split(b||""):a.match(d)},f=_gsScope._gsDefine.plugin({propName:"text",API:2,version:"0.6.2",init:function(b,c,d,f){var g,h=b.nodeName.toUpperCase();if("function"==typeof c&&(c=c(f,b)),this._svg=b.getBBox&&("TEXT"===h||"TSPAN"===h),!("innerHTML"in b||this._svg))return!1;if(this._target=b,"object"!=typeof c&&(c={value:c}),void 0===c.value)return this._text=this._original=[""],!0;for(this._delimiter=c.delimiter||"",this._original=e(a(b).replace(/\s+/g," "),this._delimiter),this._text=e(c.value.replace(/\s+/g," "),this._delimiter),this._runBackwards=d.vars.runBackwards===!0,this._runBackwards&&(h=this._original,this._original=this._text,this._text=h),"string"==typeof c.newClass&&(this._newClass=c.newClass,this._hasClass=!0),"string"==typeof c.oldClass&&(this._oldClass=c.oldClass,this._hasClass=!0),h=this._original.length-this._text.length,g=0>h?this._original:this._text,this._fillChar=c.fillChar||(c.padSpace?"&nbsp;":""),0>h&&(h=-h);--h>-1;)g.push(this._fillChar);return!0},set:function(a){a>1?a=1:0>a&&(a=0),this._runBackwards&&(a=1-a);var b,c,d,e=this._text.length,f=a*e+.5|0;this._hasClass?(b=this._newClass&&0!==f,c=this._oldClass&&f!==e,d=(b?"<span class='"+this._newClass+"'>":"")+this._text.slice(0,f).join(this._delimiter)+(b?"</span>":"")+(c?"<span class='"+this._oldClass+"'>":"")+this._delimiter+this._original.slice(f).join(this._delimiter)+(c?"</span>":"")):d=this._text.slice(0,f).join(this._delimiter)+this._delimiter+this._original.slice(f).join(this._delimiter),this._svg?this._target.textContent=d:this._target.innerHTML="&nbsp;"===this._fillChar&&-1!==d.indexOf("  ")?d.split("  ").join("&nbsp;&nbsp;"):d}}),g=f.prototype;g._newClass=g._oldClass=g._delimiter=""}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("TextPlugin");
}