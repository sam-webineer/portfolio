// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {

	window.onload = function() {
		imagesLoaded();
	}

});

function imagesLoaded() {
	textPlugin();
	splitTextPlugin();
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
	var count = 0; 
	var fr2_txt_splits = new SplitText("#splitit", {type:"chars", charsClass:'char++'});

	// Start Animation
	StartScene(); 

	function StartScene() {

		CSSPlugin.useSVGTransformAttr = false;

		// Resets
		document.getElementById("counter").innerHTML = 0;
		var all_elems = [nexus,nexus_t,nexus_b,fr1_txt,fr1_txt_line_1,fr1_txt_line_2,fr2,fr2_txt,fr3_img,logo,cta,cta_shine1]
		TweenMax.set([all_elems],{clearProps:"all"});
		TweenMax.set(fr1_txt_line_1,{text:"Turn"});

		// Hide loader
		TweenMax.set(loader,{alpha:0});

		// Animation setup
		var anim = new TimelineMax();
		var main = new TimelineMax({onComplete:Replay});

		// Animation
		main	.add(Setup(anim, 0))
				.add(Frame1(anim, 0.2))
				.add(Frame2(anim, '+=0.6'))
				.add(Frame3(anim, '+=0.3'))
				.add(Frame4(anim, '+=0.8'))
				.add(Frame5(anim, '+=1.4'))

		// Playback options
		main.seek(seekTo);
		main.timeScale(timescaleTo);
	}

	// Setup
	function Setup(anim,delay) {
		anim 	
		.set([nexus],{alpha:1})
		return anim;
	}

	// Frame 1
	function Frame1(anim,delay) {
		var counter = {val:0};

		anim 	

		// In
		.fromTo(nexus, 0.3, {scale:6}, {scale:0.9, ease:Power3.easeOut}, delay)
		.fromTo(nexus_t, 0.3, {y:'-=30'}, {y:'+=30', ease:Power3.easeOut}, delay)
		.fromTo(nexus_b, 0.3, {y:'30'}, {y:'0', ease:Power3.easeOut}, delay)

		.to(fr1_txt_line_1, 0, {alpha:1}, '+=0')

		.to(fr1_txt_line_1, 0, {top:0}, 'in1+=0.2')
		.to(fr1_txt_line_2, 0, {alpha:1}, 'in1+=0.2')

		.to(fr1_txt_line_1, 0, {text:'Into'}, '+=0.3')

		.to(counter, 0.6, {val:75, roundProps:"val", ease:Linear.easeNone, onUpdate:function(){  
			document.getElementById("counter").innerHTML = counter.val
		}}, 'countUp+=0.2')
		.fromTo(fr1_txt_line_2, 0.6, {scale:1}, {scale:1.3, ease:Linear.easeNone}, 'countUp+=0.2')
		.to(fr1_txt_line_1, 0.6, {y:'-=8', ease:Linear.easeNone}, 'countUp+=0.2')
		.to(nexus, 0.6, {scale:1, ease:Linear.easeNone}, 'countUp+=0.2')

		.to(fr1_txt_line_2, 0.4, {webkitFilter:"blur(5px)"}, '-=0.6')
		.to(fr1_txt_line_2, 0.2, {webkitFilter:"blur(0px)"}, '-=0.2')


		return anim;
	}

	// Frame 2
	function Frame2(anim,delay) {
		anim 	
		
		// Out
		.to(nexus, 0.8, {scale:0, ease:Back.easeIn.config(2)}, delay)
		.to(nexus, 0.6, {webkitFilter:"blur(4px)"}, '-=0.2')
		
		// In
		.staggerTo('.stack_1 img', 0.02, {alpha:1}, -0.05, 'coinsIn-=0.3')
		.staggerTo('.stack_2 img', 0.02, {alpha:1}, -0.05, 'coinsIn-=0.2')
		.staggerTo('.stack_3 img', 0.02, {alpha:1}, -0.05, 'coinsIn-=0.1')
		.staggerTo('.stack_4 img', 0.02, {alpha:1}, -0.05, 'coinsIn-=0.2')
		.staggerTo('.stack_5 img', 0.02, {alpha:1}, -0.05, 'coinsIn-=0.3')
		.staggerTo('.stack_6 img', 0.02, {alpha:1}, -0.05, 'coinsIn-=0.2')

		return anim;
	}

	// Frame 3
	function Frame3(anim,delay) {
		anim 	
		
		// Out
		.to(fr1_txt, 0, {alpha:0}, delay)
		
		// In
		.to(fr2_txt, 0, {alpha:1}, delay)
		.staggerTo('.stack_1 img', 0.02, {alpha:0}, 0.05, 'coinsOut+=0')
		.staggerTo('.stack_2 img', 0.02, {alpha:0}, 0.05, 'coinsOut+=0.1')
		.staggerTo('.stack_3 img', 0.02, {alpha:0}, 0.05, 'coinsOut+=0.15')
		.staggerTo('.stack_4 img', 0.02, {alpha:0}, 0.05, 'coinsOut+=0.1')
		.staggerTo('.stack_5 img', 0.02, {alpha:0}, 0.05, 'coinsOut+=0.2')
		.staggerTo('.stack_6 img', 0.02, {alpha:0}, 0.05, 'coinsOut+=0.1')

		.staggerFrom(['.char2','.char6','.char4','.char1','.char5','.char3'], 0.4, {rotationY:'-180deg'}, 0.08, '-=0.15' )

		return anim;
	}

	// Frame 4
	function Frame4(anim,delay) {
		anim 	
		
		// Out
		.to(fr2, 0.6, {scale:30, webkitFilter:"blur(0.5px)", x:'+=40', ease:Power3.easeIn}, delay)
		.to(fr2, 0, {alpha:0}, '+-=0')

		// In
		.staggerTo([logo,fr3_img], 0.5, {alpha:1, ease:Linear.easeNone}, 0.1, '-=0.1')

		return anim;
	}

	// Frame 5
	function Frame5(anim,delay) {
		anim 	
		
		// Out
		.to(fr3_img, 0.6, {alpha:0, ease:Linear.easenone}, delay)

		// In
		.to([fr4_txt,cta,terms], 0.8, {alpha:1, ease:Linear.easeNone}, '+=0.1')

		.to(cta_shine1, 1.6, {x:200, skewX:'-25', alpha:0.9, ease:Power2.easeOut}, '+=0.2')

		return anim;
	}
	
	// Replay
	function Replay() {
		var anim = new TimelineMax();

		loopCount++;
		if (loopCount < loops) {

			anim.to([fr4_txt,logo,cta,terms], 0.5, {alpha:0, ease:Linear.easeNone, onComplete:function(){
				StartScene();
			}}, '+=1.2');

		}
	}
}

var textPlugin = function() {
	// Textplugin
	var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=function(b){var c=b.nodeType,d="";if(1===c||9===c||11===c){if("string"==typeof b.textContent)return b.textContent;for(b=b.firstChild;b;b=b.nextSibling)d+=a(b)}else if(3===c||4===c)return b.nodeValue;return d},b="[-]|�[�-�]|�[�-�]|[⚔-⚗]|�[�-�]|[�-�][�-�]",c=new RegExp(b),d=new RegExp(b+"|.","g"),e=function(a,b){return""!==b&&b||!c.test(a)?a.split(b||""):a.match(d)},f=_gsScope._gsDefine.plugin({propName:"text",API:2,version:"0.6.2",init:function(b,c,d,f){var g,h=b.nodeName.toUpperCase();if("function"==typeof c&&(c=c(f,b)),this._svg=b.getBBox&&("TEXT"===h||"TSPAN"===h),!("innerHTML"in b||this._svg))return!1;if(this._target=b,"object"!=typeof c&&(c={value:c}),void 0===c.value)return this._text=this._original=[""],!0;for(this._delimiter=c.delimiter||"",this._original=e(a(b).replace(/\s+/g," "),this._delimiter),this._text=e(c.value.replace(/\s+/g," "),this._delimiter),this._runBackwards=d.vars.runBackwards===!0,this._runBackwards&&(h=this._original,this._original=this._text,this._text=h),"string"==typeof c.newClass&&(this._newClass=c.newClass,this._hasClass=!0),"string"==typeof c.oldClass&&(this._oldClass=c.oldClass,this._hasClass=!0),h=this._original.length-this._text.length,g=0>h?this._original:this._text,this._fillChar=c.fillChar||(c.padSpace?"&nbsp;":""),0>h&&(h=-h);--h>-1;)g.push(this._fillChar);return!0},set:function(a){a>1?a=1:0>a&&(a=0),this._runBackwards&&(a=1-a);var b,c,d,e=this._text.length,f=a*e+.5|0;this._hasClass?(b=this._newClass&&0!==f,c=this._oldClass&&f!==e,d=(b?"<span class='"+this._newClass+"'>":"")+this._text.slice(0,f).join(this._delimiter)+(b?"</span>":"")+(c?"<span class='"+this._oldClass+"'>":"")+this._delimiter+this._original.slice(f).join(this._delimiter)+(c?"</span>":"")):d=this._text.slice(0,f).join(this._delimiter)+this._delimiter+this._original.slice(f).join(this._delimiter),this._svg?this._target.textContent=d:this._target.innerHTML="&nbsp;"===this._fillChar&&-1!==d.indexOf("  ")?d.split("  ").join("&nbsp;&nbsp;"):d}}),g=f.prototype;g._newClass=g._oldClass=g._delimiter=""}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("TextPlugin");
}
var splitTextPlugin = function() {
	var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(a){"use strict";var b=a.GreenSockGlobals||a,c=function(a){var c,d=a.split("."),e=b;for(c=0;c<d.length;c++)e[d[c]]=e=e[d[c]]||{};return e},d=c("com.greensock.utils"),e=function(a){var b=a.nodeType,c="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===b||4===b)return a.nodeValue;return c},f=document,g=f.defaultView?f.defaultView.getComputedStyle:function(){},h=/([A-Z])/g,i=function(a,b,c,d){var e;return(c=c||g(a,null))?(a=c.getPropertyValue(b.replace(h,"-$1").toLowerCase()),e=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,e=c[b]),d?e:parseInt(e,10)||0},j=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},k=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],j(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else e.push(c);return e},l=/(?:\r|\n|\t\t)/g,m=/(?:\s\s+)/g,n=55296,o=56319,p=56320,q=127462,r=127487,s=127995,t=127999,u=function(a){return(a.charCodeAt(0)-n<<10)+(a.charCodeAt(1)-p)+65536},v=f.all&&!f.addEventListener,w=" style='position:relative;display:inline-block;"+(v?"*display:inline;*zoom:1;'":"'"),x=function(a,b){a=a||"";var c=-1!==a.indexOf("++"),d=1;return c&&(a=a.split("++").join("")),function(){return"<"+b+w+(a?" class='"+a+(c?d++:"")+"'>":">")}},y=d.SplitText=b.SplitText=function(a,b){if("string"==typeof a&&(a=y.selector(a)),!a)throw"cannot split a null element.";this.elements=j(a)?k(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=b||{},this.split(b)},z=function(a,b,c){var d=a.nodeType;if(1===d||9===d||11===d)for(a=a.firstChild;a;a=a.nextSibling)z(a,b,c);else(3===d||4===d)&&(a.nodeValue=a.nodeValue.split(b).join(c))},A=function(a,b){for(var c=b.length;--c>-1;)a.push(b[c])},B=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},C=function(a,b,c){for(var d;a&&a!==b;){if(d=a._next||a.nextSibling)return d.textContent.charAt(0)===c;a=a.parentNode||a._parent}return!1},D=function(a){var b,c,d=B(a.childNodes),e=d.length;for(b=0;e>b;b++)c=d[b],c._isSplit?D(c):(b&&3===c.previousSibling.nodeType?c.previousSibling.nodeValue+=3===c.nodeType?c.nodeValue:c.firstChild.nodeValue:3!==c.nodeType&&a.insertBefore(c.firstChild,c),a.removeChild(c))},E=function(a,b,c,d,e,h,j){var k,l,m,n,o,p,q,r,s,t,u,v,w=g(a),x=i(a,"paddingLeft",w),y=-999,B=i(a,"borderBottomWidth",w)+i(a,"borderTopWidth",w),E=i(a,"borderLeftWidth",w)+i(a,"borderRightWidth",w),F=i(a,"paddingTop",w)+i(a,"paddingBottom",w),G=i(a,"paddingLeft",w)+i(a,"paddingRight",w),H=.2*i(a,"fontSize"),I=i(a,"textAlign",w,!0),J=[],K=[],L=[],M=b.wordDelimiter||" ",N=b.span?"span":"div",O=b.type||b.split||"chars,words,lines",P=e&&-1!==O.indexOf("lines")?[]:null,Q=-1!==O.indexOf("words"),R=-1!==O.indexOf("chars"),S="absolute"===b.position||b.absolute===!0,T=b.linesClass,U=-1!==(T||"").indexOf("++"),V=[];for(P&&1===a.children.length&&a.children[0]._isSplit&&(a=a.children[0]),U&&(T=T.split("++").join("")),l=a.getElementsByTagName("*"),m=l.length,o=[],k=0;m>k;k++)o[k]=l[k];if(P||S)for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,(p||S||R&&!Q)&&(v=n.offsetTop,P&&p&&Math.abs(v-y)>H&&("BR"!==n.nodeName||0===k)&&(q=[],P.push(q),y=v),S&&(n._x=n.offsetLeft,n._y=v,n._w=n.offsetWidth,n._h=n.offsetHeight),P&&((n._isSplit&&p||!R&&p||Q&&p||!Q&&n.parentNode.parentNode===a&&!n.parentNode._isSplit)&&(q.push(n),n._x-=x,C(n,a,M)&&(n._wordEnd=!0)),"BR"===n.nodeName&&(n.nextSibling&&"BR"===n.nextSibling.nodeName||0===k)&&P.push([])));for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,"BR"!==n.nodeName?(S&&(s=n.style,Q||p||(n._x+=n.parentNode._x,n._y+=n.parentNode._y),s.left=n._x+"px",s.top=n._y+"px",s.position="absolute",s.display="block",s.width=n._w+1+"px",s.height=n._h+"px"),!Q&&R?n._isSplit?(n._next=n.nextSibling,n.parentNode.appendChild(n)):n.parentNode._isSplit?(n._parent=n.parentNode,!n.previousSibling&&n.firstChild&&(n.firstChild._isFirst=!0),n.nextSibling&&" "===n.nextSibling.textContent&&!n.nextSibling.nextSibling&&V.push(n.nextSibling),n._next=n.nextSibling&&n.nextSibling._isFirst?null:n.nextSibling,n.parentNode.removeChild(n),o.splice(k--,1),m--):p||(v=!n.nextSibling&&C(n.parentNode,a,M),n.parentNode._parent&&n.parentNode._parent.appendChild(n),v&&n.parentNode.appendChild(f.createTextNode(" ")),b.span&&(n.style.display="inline"),J.push(n)):n.parentNode._isSplit&&!n._isSplit&&""!==n.innerHTML?K.push(n):R&&!n._isSplit&&(b.span&&(n.style.display="inline"),J.push(n))):P||S?(n.parentNode&&n.parentNode.removeChild(n),o.splice(k--,1),m--):Q||a.appendChild(n);for(k=V.length;--k>-1;)V[k].parentNode.removeChild(V[k]);if(P){for(S&&(t=f.createElement(N),a.appendChild(t),u=t.offsetWidth+"px",v=t.offsetParent===a?0:a.offsetLeft,a.removeChild(t)),s=a.style.cssText,a.style.cssText="display:none;";a.firstChild;)a.removeChild(a.firstChild);for(r=" "===M&&(!S||!Q&&!R),k=0;k<P.length;k++){for(q=P[k],t=f.createElement(N),t.style.cssText="display:block;text-align:"+I+";position:"+(S?"absolute;":"relative;"),T&&(t.className=T+(U?k+1:"")),L.push(t),m=q.length,l=0;m>l;l++)"BR"!==q[l].nodeName&&(n=q[l],t.appendChild(n),r&&n._wordEnd&&t.appendChild(f.createTextNode(" ")),S&&(0===l&&(t.style.top=n._y+"px",t.style.left=x+v+"px"),n.style.top="0px",v&&(n.style.left=n._x-v+"px")));0===m?t.innerHTML="&nbsp;":Q||R||(D(t),z(t,String.fromCharCode(160)," ")),S&&(t.style.width=u,t.style.height=n._h+"px"),a.appendChild(t)}a.style.cssText=s}S&&(j>a.clientHeight&&(a.style.height=j-F+"px",a.clientHeight<j&&(a.style.height=j+B+"px")),h>a.clientWidth&&(a.style.width=h-G+"px",a.clientWidth<h&&(a.style.width=h+E+"px"))),A(c,J),A(d,K),A(e,L)},F=function(a,b,c,d){var g,h,i,j,k,p,v,w,x,y=b.span?"span":"div",A=b.type||b.split||"chars,words,lines",B=-1!==A.indexOf("chars"),C="absolute"===b.position||b.absolute===!0,D=b.wordDelimiter||" ",E=" "!==D?"":C?"&#173; ":" ",F=b.span?"</span>":"</div>",G=!0,H=f.createElement("div"),I=a.parentNode;for(I.insertBefore(H,a),H.textContent=a.nodeValue,I.removeChild(a),a=H,g=e(a),v=-1!==g.indexOf("<"),b.reduceWhiteSpace!==!1&&(g=g.replace(m," ").replace(l,"")),v&&(g=g.split("<").join("{{LT}}")),k=g.length,h=(" "===g.charAt(0)?E:"")+c(),i=0;k>i;i++)if(p=g.charAt(i),p===D&&g.charAt(i-1)!==D&&i){for(h+=G?F:"",G=!1;g.charAt(i+1)===D;)h+=E,i++;i===k-1?h+=E:")"!==g.charAt(i+1)&&(h+=E+c(),G=!0)}else"{"===p&&"{{LT}}"===g.substr(i,6)?(h+=B?d()+"{{LT}}</"+y+">":"{{LT}}",i+=5):p.charCodeAt(0)>=n&&p.charCodeAt(0)<=o||g.charCodeAt(i+1)>=65024&&g.charCodeAt(i+1)<=65039?(w=u(g.substr(i,2)),x=u(g.substr(i+2,2)),j=w>=q&&r>=w&&x>=q&&r>=x||x>=s&&t>=x?4:2,h+=B&&" "!==p?d()+g.substr(i,j)+"</"+y+">":g.substr(i,j),i+=j-1):h+=B&&" "!==p?d()+p+"</"+y+">":p;a.outerHTML=h+(G?F:""),v&&z(I,"{{LT}}","<")},G=function(a,b,c,d){var e,f,g=B(a.childNodes),h=g.length,j="absolute"===b.position||b.absolute===!0;if(3!==a.nodeType||h>1){for(b.absolute=!1,e=0;h>e;e++)f=g[e],(3!==f.nodeType||/\S+/.test(f.nodeValue))&&(j&&3!==f.nodeType&&"inline"===i(f,"display",null,!0)&&(f.style.display="inline-block",f.style.position="relative"),f._isSplit=!0,G(f,b,c,d));return b.absolute=j,void(a._isSplit=!0)}F(a,b,c,d)},H=y.prototype;H.split=function(a){this.isSplit&&this.revert(),this.vars=a=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var b,c,d,e=this.elements.length,f=a.span?"span":"div",g=x(a.wordsClass,f),h=x(a.charsClass,f);--e>-1;)d=this.elements[e],this._originals[e]=d.innerHTML,b=d.clientHeight,c=d.clientWidth,G(d,a,g,h),E(d,a,this.chars,this.words,this.lines,c,b);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},H.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;--a>-1;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},y.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(y.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)},y.version="0.5.8"}(_gsScope),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?module.exports=b():"function"==typeof define&&define.amd&&define([],b)}("SplitText");
}