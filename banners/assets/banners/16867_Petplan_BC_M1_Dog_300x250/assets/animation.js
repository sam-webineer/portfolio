// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		var ldr = new ImageLoader('assets/', false);
		window.addEventListener("IMAGES_LOADED", imagesLoaded);

		// Set vars
		ldr.load("bgs", [$bg_1], ".jpg", "fr_bg hide", "bg1", 300, 250);
		if($bg_2) {
			ldr.load("bgs", [$bg_2], ".jpg", "fr_bg hide", "bg2", 300, 250);
		}
		document.getElementById("stage").classList.add($theme);
		document.getElementById("fr1_txt_1").innerHTML              = $fr1_txt_1;
		document.getElementById("fr1_txt_2").innerHTML              = $fr1_txt_2;
		document.getElementById("fr1_txt_3").innerHTML              = $fr1_txt_3;
		document.getElementById("fr1_txt_4").innerHTML              = $fr1_txt_4;
		document.getElementById("fr1_txt").style.top                = $fr1_txt_y;
		document.getElementById("fr1_txt").style.left               = $fr1_txt_x;
		document.getElementById("fr1_txt").style.textAlign          = $fr1_txt_align;
		document.getElementById("fr1_txt").style.fontSize           = $fr1_txt_size;
		document.getElementById("fr2_txt_1").innerHTML              = $fr2_txt_1;
		document.getElementById("fr2_txt_2").innerHTML              = $fr2_txt_2;
		document.getElementById("fr2_txt_3").innerHTML              = $fr2_txt_3;
		document.getElementById("fr2_txt_4").innerHTML              = $fr2_txt_4;
		document.getElementById("fr2_txt").style.top                = $fr2_txt_y;
		document.getElementById("fr2_txt").style.left               = $fr2_txt_x;
		document.getElementById("fr2_txt").style.textAlign          = $fr2_txt_align;
		document.getElementById("fr2_txt").style.fontSize           = $fr2_txt_size;
		document.getElementById("award").style.width                = $fr3_awd_w;
		document.getElementById("award").style.height               = $fr3_awd_h;
		document.getElementById("award").style.left                 = $fr3_awd_x;
		document.getElementById("award").style.top                  = $fr3_awd_y;
		document.getElementById("fr3_txt").style.top                = $fr3_txt_y;
		document.getElementById("fr3_txt").innerHTML                = $fr3_txt;
		document.getElementById("fr3_txt").style.fontSize           = $fr3_txt_size;
		document.getElementById("terms").style.top                  = $fr3_terms_y;
		document.getElementById("terms").style.left                 = $fr3_terms_x;
		document.getElementById("terms").innerHTML                  = $fr3_terms;
		document.getElementById("terms").style.fontSize             = $fr3_terms_size;
		document.getElementById("cta").style.top                    = $cta_y;
		document.getElementById("cta_txt").innerHTML                = $cta;
		document.getElementById("cta_cpy").style.fontSize           = $cta_txt_size;
		document.getElementById("cta_arrow").src                    = $cta_arrow;

		document.getElementById("heart").style.width                = $heart_w;
		document.getElementById("heart").style.height               = $heart_h;
		document.getElementById("heart").style.left                 = $heart_x;
		document.getElementById("heart").style.top                  = $heart_y;
		document.getElementById("heart_path").style.stroke          = $heart_clr;
		document.getElementById("heart_path").style.strokeWidth     = $heart_stroke;
		document.getElementById("arrow").style.width                = $arrow_w;
		document.getElementById("arrow").style.left                 = $arrow_x;
		document.getElementById("arrow").style.marginTop            = $arrow_y;
		document.getElementById("arrow_point").style.stroke         = $arrow_clr;
		document.getElementById("arrow_body").style.stroke          = $arrow_clr;
		document.getElementById("underline").style.width            = $underline_w;
		document.getElementById("underline").style.height           = $underline_h;
		document.getElementById("underline").style.left             = $underline_x;
		document.getElementById("underline").style.top              = $underline_y;
		document.getElementById("line").style.stroke                = $underline_clr;
		document.getElementById("ring_path").style.width            = $ring_w;
		document.getElementById("ring_path").style.height           = $ring_h;
		document.getElementById("ring_path").style.left             = $ring_x;
		document.getElementById("ring_path").style.top              = $ring_y;
		document.getElementById("ring").style.stroke                = $ring_clr;
		document.getElementById("ring").style.strokeWidth           = $ring_stroke;
		document.getElementById("arrows").style.width               = $arrows_w;
		document.getElementById("arrows").style.height              = $arrows_h;
		document.getElementById("arrows").style.left                = $arrows_x;
		document.getElementById("arrows").style.top                 = $arrows_y;
		var al = document.getElementsByClassName("arrows_line");
		var ap = document.getElementsByClassName("arrows_point");
		for(i=0; i<al.length; i++) { al[i].style.stroke = $arrows_clr; }
		for(i=0; i<ap.length; i++) { ap[i].style.stroke = $arrows_clr; }

		var tckr = document.getElementsByClassName('tckr');
		for(i=tckr.length-1; i>=0; i--) { tckr[i].style.zIndex = tckr.length-i; }

		var ztop = document.getElementsByClassName('ztop');
		for(i=ztop.length-1; i>=0; i--) { ztop[i].style.zIndex = 20; }
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
	$txt_amt = 300;
	$1from = '-'; $1to = '+';
	$2from = '-'; $2to = '+';
	if ($fr1_txt_align == 'right') { $1from = '+'; $1to = '-'; }
	if ($fr2_txt_align == 'right') { $2from = '+'; $2to = '-'; }

	// Start Animation
	StartScene(); 

	function StartScene() {

		CSSPlugin.useSVGTransformAttr = false;

		// Hide loader
		gsap.set(loader,{alpha:0});

		// Animation setup
		var main = gsap.timeline({onComplete:Replay});

		// Animation
		main	.add(Setup(), 0)
				.add(Frame1(), 0.2)
				.add(Frame2(), '+=1.5')
				.add(Frame3(), '-=1.8')
				.add(Frame4(), '+=0.7')

		// Playback options
		gsap.globalTimeline.timeScale(timescaleTo);
		main.seek(seekTo, true)
		// console.log(main.duration())
	}

	// Setup
	function Setup() {
		return gsap.timeline()
		
		.set([ring,arrow_body,arrow_point,line,'.arrows_line, .arrows_point','.award_line',heart_path],{drawSVG:'0%', alpha:1})
		.set(['.arrows_arrow'],{rotation:'0.1'})
		.set([logo,fr1_txt],{alpha:1})
		.set(ring_path,{rotation:$ring_rte})
	}

	// Frame 1
	function Frame1() {
		return gsap.timeline()

		// In
		.to(bg1, {duration:0.6, alpha:1, ease:'none'})
		.from(logo, {duration:0.4, y:'-=50%', ease:'power2.out'}, '-=0.4')
		.fromTo('#fr1_txt .tckr', {x:$1from+'='+$txt_amt}, {duration:0.8, x:$1to+'='+$txt_amt, ease:'power2.out', stagger:0.1}, '-=0.4')
		.fromTo(ring, {drawSVG:'100% 100%'}, {duration:0.5, drawSVG:'0% 100%', ease:'none'}, '-=0')
	}

	// Frame 2
	function Frame2() {
		return gsap.timeline()

		.set([fr2_txt,bg2],{alpha:1})
		.set(stage,{background:$stage_bg})

		// Out
		.to([fr1_txt,bg1], {duration:2.2, x:'-=300', ease:'power2.inOut'}, 'f1Out')
		.from([fr2_txt,bg2,arrow], {duration:2.2, x:'+=300', ease:'power2.inOut'}, 'f1Out')

		.to(arrow_body, {duration:0.7, drawSVG:'100%', ease:'power2.inOut'}, 'f1Out+=0.2')
		.to(arrow_point, {duration:0.7, drawSVG:'100%', ease:'power2.inOut'}, 'f1Out+=0.7')

		.to('#fr1_txt .tckr', {duration:0.7, x:$1from+'='+$txt_amt, stagger:-0.1, ease:'power2.in'}, 'f1Out+=0.2')
		.to(ring, {duration:0.6, drawSVG:'0%', ease:'power1.inOut'}, 'f1Out-=0.2')
		
		// In
		.fromTo('#fr2_txt .tckr', {x:$2from+'='+$txt_amt}, {duration:0.8, x:$2to+'='+$txt_amt, stagger:0.1, ease:'power2.out'}, '-=1.2')
		.to(arrow, {duration:0.7, x:'-=90', ease:'power1.out'}, '-=0.6')

		.to(line, {duration:0.3, drawSVG:'100%', ease:'power1.inOut'}, '-=0.4')

		.to('.arrows_line', {duration:0.3, drawSVG:'0% 100%', ease:'power1.inOut', stagger:0.1}, 'arrows-=0.2')
		.fromTo('.arrows_point', {drawSVG:'100% 100%'}, {duration:0.3, drawSVG:'0% 100%', ease:'power1.inOut', stagger:0.1}, 'arrows-=0.03')
		.to(arrow_1, {duration:0.6, y:'-=7', yoyo:true, repeat:5, ease:'power1.inOut'}, 'arrows-=0.2')
		.to(arrow_2, {duration:0.6, y:'-=7', yoyo:true, repeat:5, ease:'power1.inOut'}, 'arrows+=0.1')
		.to(arrow_3, {duration:0.6, y:'-=7', yoyo:true, repeat:5, ease:'power1.inOut'}, 'arrows+=0.4')
		.to(arrow_4, {duration:0.6, y:'-=7', yoyo:true, repeat:5, ease:'power1.inOut'}, 'arrows+=0.7')
	}

	// Frame 3
	function Frame3() {
		return gsap.timeline()

		// Out
		.set([cta,terms],{alpha:1})
		
		.to(fr_wrap, {duration:1.1, y:'-=300', ease:'power1.inOut'}, 'fr3-=0')
		.to(fr_wrap_inner, {duration:1.1, y:'+=300', ease:'power1.inOut'}, 'fr3-=0')

		// In
		.to('.award_line', {duration:0.4, drawSVG:'100%', ease:'power1.inOut', stagger:-0.1}, '-=0.4')
		.to(award_img, {duration:0.6, alpha:1, ease:'power1.inOut'}, '-=0.3')

		.fromTo(cta_arrow, {rotation:'-=315', right:'+=100%'}, {duration:1.2, rotation:'+=315', right:'-=100%', ease:'power2.out'}, 'cta-=0.5')
		.to(cta_mask, {duration:1.6, x:'+=92%', ease:'power2.out'}, 'cta-=0.5')
	}

	// Frame 4
	function Frame4() {
		return gsap.timeline()

		// Out
		.to(award, {duration:0.4, alpha:0, ease:'none'})

		// In
		.to(heart_path, {duration:1.3, drawSVG:'100%', ease:'power1.inOut'}, 'fr4-=0.2')
		.to(fr3_txt, {duration:1, alpha:1, ease:'none'}, 'fr4+=0.5')

		.add(ctaPulse, '+=0.5')
	}
	
	// Replay
	function Replay() {
		loopCount++;
		if (loopCount < loops) {
			return gsap.timeline()
			.to([logo], 0.5, {alpha:0, ease:'none'}, '+=1.5')
			.to(stage, 0, {alpha:1, onComplete:function(){
				StartScene();
			}}, '+=0');

		}
	}

	// Button hover
	stage = document.getElementById('stage');
	stage.onmouseover = ctaPulse;
		
	function ctaPulse(){
		if (!gsap.isTweening('#cta_arrow')) {
			return new gsap.timeline()
			.to(cta_arrow, {duration:0.25, x:'-=8', repeat:3, yoyo:true, ease:'power1.inOut'})
		} 
	}
}

// Image loader (Polite Load)
var ImageLoader=function(e,n){"use strict";n&&console.log("[IMAGE_LOADER] Init");var t=0;function o(){if(0===--t){var e=document.createEvent("Event");e.initEvent("IMAGES_LOADED",!0,!1),window.dispatchEvent(e)}}this.load=function(c,i,a,l,r,d,u){var E=document.getElementById(c)||document.querySelector(c);i.forEach(function(c){E.appendChild(function(e,c,i,a,l,r,d){n&&console.log("[IMAGE_LOADER] Image "+e);t++;var u=document.createElement("img");u.src=i?i+e+c:e+c,u.id=l||e,u.width=r||null,u.height=d||null,a&&(u.className=a);return u.onload=o,u}(c,a,e,l,r,d,u))})}};
function injectClassAroundTags(n,i,s,r){if(r=void 0!==r?r:-1,Array.isArray(n))for(var a=0;a<n.length;a++)injectClassAroundTags(n[a],i,s,r);else{var e=(o=n.innerHTML).split(s),l=0;if(e.length%2==1){for(a=0;a<e.length-1;a++)if(a%2==0)e[a]+='<span class="'+i+'" >__';else if(e[a]+="</span>__",++l==r)break;var o;o=(o=e.join(s)).split("__"+s).join(""),n.innerHTML=o}}}
function injectIDAroundTags(n,i,s,r){if(r=void 0!==r?r:-1,Array.isArray(n))for(var a=0;a<n.length;a++)injectIDAroundTags(n[a],i,s,r);else{var e=(o=n.innerHTML).split(s),l=0;if(e.length%2==1){for(a=0;a<e.length-1;a++)if(a%2==0)e[a]+='<span id="'+i+'" >__';else if(e[a]+="</span>__",++l==r)break;var o;o=(o=e.join(s)).split("__"+s).join(""),n.innerHTML=o}}}
function injectClassAroundChar(t,n,a){"1"!==t.getAttribute("data-char-injected")&&(t.setAttribute("data-char-injected","1"),t.innerHTML=t.innerHTML.split(n).join('<span class="'+a+'" >'+n+"</span>"))}

// DrawSVGPlugin 3.6.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function i(){return"undefined"!=typeof window}function j(){return a||i()&&(a=window.gsap)&&a.registerPlugin&&a}function m(e){return Math.round(1e4*e)/1e4}function n(e){return parseFloat(e)||0}function o(e,t){var r=n(e);return~e.indexOf("%")?r/100*t:r}function p(e,t){return n(e.getAttribute(t))}function r(e,t,r,i,s,o){return P(Math.pow((n(r)-n(e))*s,2)+Math.pow((n(i)-n(t))*o,2))}function s(e){return console.warn(e)}function t(e){return"non-scaling-stroke"===e.getAttribute("vector-effect")}function w(e){if(!(e=v(e)[0]))return 0;var n,i,o,a,f,h,d,l=e.tagName.toLowerCase(),u=e.style,c=1,g=1;t(e)&&(g=e.getScreenCTM(),c=P(g.a*g.a+g.b*g.b),g=P(g.d*g.d+g.c*g.c));try{i=e.getBBox()}catch(e){s("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var _=i||{x:0,y:0,width:0,height:0},y=_.x,w=_.y,x=_.width,m=_.height;if(i&&(x||m)||!k[l]||(x=p(e,k[l][0]),m=p(e,k[l][1]),"rect"!==l&&"line"!==l&&(x*=2,m*=2),"line"===l&&(y=p(e,"x1"),w=p(e,"y1"),x=Math.abs(x-y),m=Math.abs(m-w))),"path"===l)a=u.strokeDasharray,u.strokeDasharray="none",n=e.getTotalLength()||0,c!==g&&s("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),n*=(c+g)/2,u.strokeDasharray=a;else if("rect"===l)n=2*x*c+2*m*g;else if("line"===l)n=r(y,w,y+x,w+m,c,g);else if("polyline"===l||"polygon"===l)for(o=e.getAttribute("points").match(b)||[],"polygon"===l&&o.push(o[0],o[1]),n=0,f=2;f<o.length;f+=2)n+=r(o[f-2],o[f-1],o[f],o[f+1],c,g)||0;else"circle"!==l&&"ellipse"!==l||(h=x/2*c,d=m/2*g,n=Math.PI*(3*(h+d)-P((3*h+d)*(h+3*d))));return n||0}function x(e,t){if(!(e=v(e)[0]))return[0,0];t=t||w(e)+1;var r=h.getComputedStyle(e),i=r.strokeDasharray||"",s=n(r.strokeDashoffset),o=i.indexOf(",");return o<0&&(o=i.indexOf(" ")),t<(i=o<0?t:n(i.substr(0,o)))&&(i=t),[-s||0,i-s||0]}function y(){i()&&(h=window,l=a=j(),v=a.utils.toArray,d=-1!==((h.navigator||{}).userAgent||"").indexOf("Edge"))}var a,v,h,d,l,b=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,k={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},P=Math.sqrt,f={version:"3.6.0",name:"drawSVG",register:function register(e){a=e,y()},init:function init(e,r){if(!e.getBBox)return!1;l||y();var i,s,a,f=w(e);return this._style=e.style,this._target=e,r+""=="true"?r="0 100%":r?-1===(r+"").indexOf(" ")&&(r="0 "+r):r="0 0",s=function _parse(e,t,n){var r,i,s=e.indexOf(" ");return i=s<0?(r=void 0!==n?n+"":e,e):(r=e.substr(0,s),e.substr(s+1)),r=o(r,t),(i=o(i,t))<r?[i,r]:[r,i]}(r,f,(i=x(e,f))[0]),this._length=m(f),this._dash=m(i[1]-i[0]),this._offset=m(-i[0]),this._dashPT=this.add(this,"_dash",this._dash,m(s[1]-s[0])),this._offsetPT=this.add(this,"_offset",this._offset,m(-s[0])),d&&(a=h.getComputedStyle(e)).strokeLinecap!==a.strokeLinejoin&&(s=n(a.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",s,s+.01)),this._live=t(e)||~(r+"").indexOf("live"),this._props.push("drawSVG"),1},render:function render(e,t){var n,r,i,s,o=t._pt,a=t._style;if(o){for(t._live&&(n=w(t._target))!==t._length&&(r=n/t._length,t._length=n,t._offsetPT.s*=r,t._offsetPT.c*=r,t._dashPT?(t._dashPT.s*=r,t._dashPT.c*=r):t._dash*=r);o;)o.r(e,o.d),o=o._next;i=t._dash||e&&1!==e&&1e-4||0,n=t._length-i+.1,s=t._offset,i&&s&&i+Math.abs(s%t._length)>t._length-.2&&(s+=s<0?.1:-.1)&&(n+=.1),a.strokeDashoffset=i?s:s+.001,a.strokeDasharray=n<.2?"none":i?i+"px,"+n+"px":"0px, 999999px"}},getLength:w,getPosition:x};j()&&a.registerPlugin(f),e.DrawSVGPlugin=f,e.default=f;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});