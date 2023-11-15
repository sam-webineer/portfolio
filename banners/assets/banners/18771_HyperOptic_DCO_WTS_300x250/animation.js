/* - - - - - - - - - - - Variable Settings - - - - - - - - - - - */

var seekTo = 0;
var timescaleTo = 1;
var loops = 1;
var loopCount = 0;
var fr_length = 4;
var frameDur = [2.1, 2.5, 2.5, 1.2];
var firstRun = true;
var totalDur = 0;

var custom_anim = false;
var cta_anim = "fade";
var cta_highlight_anim = "heartbeat";
var txt_anim = "fade";
var txt_anim_stagger = "none";
var img_anim = "fade";
var ctaBgHover = null;
var curveVis = true;
var cta_frame_in = "1";

var ad = getBounds(e("banner"));
var txtSplits = [];
var f1TxtSplit;
var f2TxtSplit;
var f3TxtSplit;
var endTxtSplit;
var dynImagesToLoad = 0;
var dynImagesLoaded = 0;

var assets = {};
var devDynamic = {};
var dynamic = {};

/* - - - - - - - - -  - - Page Initiation - - - - - - - -- - - - */

window.onload = function () {
  Enabler.isInitialized()
    ? init()
    : Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
};

// Enabler Handler
function init() {
  setupDynamic(); // Setup dynamic variables
  addListeners(); // Activate event listeners
  initGSAP(); // Set GSAP Settings

  // Polite load - init animation
  Enabler.isPageLoaded()
    ? initScenes()
    : Enabler.addEventListener(
        studio.events.StudioEvent.PAGE_LOADED,
        initScenes
      );
}

function initGSAP() {
  // Register Plugins
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(CSSRulePlugin);

  // GSAP Settings
  gsap.defaults({
    ease: "none",
  });
}

// Add Event Listeners
function addListeners() {
  document
    .getElementById("clicktag")
    .addEventListener("click", bgExitHandler, false);
}
function bgExitHandler(e) {
  if (!e) {
    var e = window.event;
  }
  Enabler.exitOverride("Background Dynamic Exit", dynamic.EXIT_URL.Url);
}

/* - - - - - - - - -  Dynamic Studio Functions - - - - - -- - - - */

function setupDynamic() {
  // Dynamic Content variables and sample values
  Enabler.setProfileId(10710088);
  var devDynamicContent = {};
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED = [{}];
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0]._id = 0;
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].ID = 1;
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].REPORTING_LABEL =
    "default_300x250";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].LINE_ITEM_ID = "";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].START_DATE = {};
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].START_DATE.RawValue =
    "1/1/2022";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].START_DATE.UtcValue = 1641024000000;
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].END_DATE = {};
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].END_DATE.RawValue =
    "12/31/2022";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].END_DATE.UtcValue = 1672473600000;
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].EXIT_URL = {};
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].EXIT_URL.Url =
    "https://hyperoptic.com/";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].LOGO_IMG = {};
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].LOGO_IMG.Type =
    "file";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].LOGO_IMG.Url =
    "https://s0.2mdn.net/ads/richmedia/studio/29136062/29136062_20220120084418460_hyperoptic_logo_white_mono.png";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_1_BG = {};
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_1_BG.Type =
    "file";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_1_BG.Url =
    "image_assets/wts_background_300x250_F1.jpg";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_2_BG = {};
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_2_BG.Type =
    "file";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_2_BG.Url =
    "image_assets/wts_background_300x250_F2.jpg";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_3_BG = {};
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_3_BG.Type =
    "file";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_3_BG.Url =
    "https://s0.2mdn.net/ads/richmedia/studio/29136062/29136062_20220110032817441_x.gif";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_END_BG = {};
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_END_BG.Type =
    "file";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_END_BG.Url =
    "image_assets/wts_background_300x250_F3.jpg";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].VIDEO_BG = {};
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].VIDEO_BG.Type =
    "video";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].VIDEO_BG.Progressive_Url =
    "";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].AWARD_IMG = {};
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].AWARD_IMG.Type =
    "file";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].AWARD_IMG.Url =
    "https://s0.2mdn.net/ads/richmedia/studio/29136062/29136062_20220901065628221_trustpilot_alt.png";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_1_COPY =
    "NEED A<br>REASON TO<br><span>SWITCH</span><br>BROADBAND?";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_1_COPY_TCS =
    "1Gb 24-month package. Monthly package charge from<br> month 4 to 24 (inclusive) is currently £45. Terms apply.";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_2_COPY =
    "<span>MONTHS</span><br>FREE<br><span id='span2'>BROADBAND</span>";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_2_COPY_TCS =
    "1Gb 24-month package. Monthly package charge from<br> month 4 to 24 (inclusive) is currently £45. Terms apply.";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_3_COPY = "";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_3_COPY_TCS =
    "1Gb 24-month package. Monthly package charge from<br> month 4 to 24 (inclusive) is currently £45. Terms apply.";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_END_COPY =
    "SWITCH<span>TODAY</span>";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_END_COPY_TCS =
    "1Gb 24-month package. Monthly package charge from<br> month 4 to 24 (inclusive) is currently £45. Terms apply.";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CTA_COPY =
    "Switch now";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].TERMS_COPY = "";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].AD_BG_COLOUR =
    "#fff";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CTA_COLOUR = "#fff";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CTA_BG_COLOUR =
    "#6F5FA3";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CTA_FRAME_IN = "1";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CURVE_VISIBILITY =
    "OFF";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CURVE_OFFSET_X = "";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CURVE_OFFSET_Y =
    "20";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CUSTOM_HTML = "";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAMES = 3;
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CREATIVE_ROUTE =
    "wts_apr23";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].TEXT_TRANSITION =
    "flipInY";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].TEXT_TRANSITION_STAGGER =
    "characters";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].IMAGE_TRANSITION =
    "fade";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CTA_IN_ANIMATION =
    "fade";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CTA_HIGHLIGHT_ANIMATION =
    "heartbeat";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].CUSTOM_ANIMATION =
    "";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].GLOBAL_CSS = "";
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].LOOP_COUNT = 1;
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_1_DUR = 2.1;
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_2_DUR = 2.5;
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_3_DUR = 2.5;
  devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0].FRAME_4_DUR = 1.2;
  Enabler.setDevDynamicContent(devDynamicContent);

  // Place all results in dynamic array
  devDynamic = devDynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0];
  dynamic = dynamicContent.HYPEROPTIC_DCO_FEED_2022_MASTER_FEED[0];
}
function bindDynamicData() {
  // Apply dynamic data
  dynamic.FRAME_1_COPY ? (f1_txt.innerHTML = dynamic.FRAME_1_COPY) : null;
  dynamic.FRAME_1_COPY_TCS
    ? (f1_txt_tcs.innerHTML = dynamic.FRAME_1_COPY_TCS)
    : null;

  dynamic.FRAME_2_COPY ? (f2_txt.innerHTML = dynamic.FRAME_2_COPY) : null;
  dynamic.FRAME_2_COPY_TCS
    ? (f2_txt_tcs.innerHTML = dynamic.FRAME_2_COPY_TCS)
    : null;

  dynamic.FRAME_3_COPY ? (f3_txt.innerHTML = dynamic.FRAME_3_COPY) : null;
  dynamic.FRAME_3_COPY_TCS
    ? (f3_txt_tcs.innerHTML = dynamic.FRAME_3_COPY_TCS)
    : null;

  dynamic.FRAME_END_COPY ? (end_txt.innerHTML = dynamic.FRAME_END_COPY) : null;
  dynamic.FRAME_END_COPY_TCS
    ? (end_txt_tcs.innerHTML = dynamic.FRAME_END_COPY_TCS)
    : null;

  dynamic.TERMS_COPY ? (tcs.innerHTML = dynamic.TERMS_COPY) : null;

  dynamic.CTA_COPY ? (cta_txt.innerHTML = dynamic.CTA_COPY) : null;
  dynamic.CTA_BG_COLOUR
    ? (cta.style.backgroundColor = dynamic.CTA_BG_COLOUR)
    : null;
  dynamic.CTA_COLOUR ? (cta_txt.style.color = dynamic.CTA_COLOUR) : null;

  ctaBgHover = dynamic.CTA_BG_COLOUR ? pSBC(-0.5, dynamic.CTA_BG_COLOUR) : null;
  cta_anim = dynamic.CTA_IN_ANIMATION ? dynamic.CTA_IN_ANIMATION : "fade";
  cta_highlight_anim = dynamic.CTA_HIGHLIGHT_ANIMATION
    ? dynamic.CTA_HIGHLIGHT_ANIMATION
    : "heartbeat";

  cta_frame_in = dynamic.CTA_FRAME_IN ? dynamic.CTA_FRAME_IN : "1";

  if (dynamic.AD_BG_COLOUR) {
    banner.style.backgroundColor = dynamic.AD_BG_COLOUR;
    mask.style.fill = dynamic.AD_BG_COLOUR;
  }

  txt_anim = dynamic.TEXT_TRANSITION ? dynamic.TEXT_TRANSITION : "fade";
  txt_anim_stagger = dynamic.TEXT_TRANSITION_STAGGER
    ? dynamic.TEXT_TRANSITION_STAGGER
    : "none";

  // Curve
  curveVis = dynamic.CURVE_VISIBILITY == "ON" ? true : false;
  dynamic.CURVE_VISIBILITY != "ON" ? addClass(e("curve"), "hide") : false;
  dynamic.CURVE_OFFSET_X
    ? (curve.style.marginLeft = dynamic.CURVE_OFFSET_X + "px")
    : null;
  dynamic.CURVE_OFFSET_Y
    ? (curve.style.marginTop = dynamic.CURVE_OFFSET_Y + "px")
    : null;

  // Loops
  var LOOP_COUNT = dynamic.LOOP_COUNT;
  if (LOOP_COUNT && !isNaN(Number(LOOP_COUNT)) && Number(LOOP_COUNT) > 0.1) {
    loops = Number(LOOP_COUNT);
  }

  // Frames
  dynamic.FRAMES &&
  !isNaN(dynamic.FRAMES) &&
  Number(dynamic.FRAMES) > 1 &&
  Number(dynamic.FRAMES) < 5
    ? (fr_length = dynamic.FRAMES)
    : 3;

  // Frame Durations
  frameDur[0] =
    dynamic.FRAME_1_DUR &&
    !isNaN(dynamic.FRAME_1_DUR) &&
    Number(dynamic.FRAME_1_DUR) > 0
      ? dynamic.FRAME_1_DUR
      : frameDur[0];
  frameDur[1] =
    dynamic.FRAME_2_DUR &&
    !isNaN(dynamic.FRAME_2_DUR) &&
    Number(dynamic.FRAME_2_DUR) > 0
      ? dynamic.FRAME_2_DUR
      : frameDur[1];
  frameDur[2] =
    dynamic.FRAME_3_DUR &&
    !isNaN(dynamic.FRAME_3_DUR) &&
    Number(dynamic.FRAME_3_DUR) > 0
      ? dynamic.FRAME_3_DUR
      : frameDur[2];
  frameDur[3] =
    dynamic.FRAME_4_DUR &&
    !isNaN(dynamic.FRAME_4_DUR) &&
    Number(dynamic.FRAME_4_DUR) > 0
      ? dynamic.FRAME_4_DUR
      : frameDur[3];

  // CSS Class Name
  dynamic.CREATIVE_ROUTE ? addClass(e("banner"), dynamic.CREATIVE_ROUTE) : null;

  // Global CSS
  var GLOBAL_CSS = dynamic.GLOBAL_CSS;
  if (GLOBAL_CSS) {
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    head.appendChild(style);
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = GLOBAL_CSS;
    } else {
      style.appendChild(document.createTextNode(GLOBAL_CSS));
    }
  }

  // Custom HTML
  var CUSTOM_HTML = dynamic.CUSTOM_HTML;
  if (CUSTOM_HTML) {
    let div = document.createElement("div");
    div.classList.add("custom_html");
    div.setAttribute("id", "custom_html");

    div.innerHTML = dynamic.CUSTOM_HTML;
    e("banner").appendChild(div);
  }

  // Custom Animation
  custom_anim = dynamic.CUSTOM_ANIMATION ? dynamic.CUSTOM_ANIMATION : false;

  // Video
  var VIDEO = dynamic.VIDEO_BG.Progressive_Url;
  if (VIDEO) {
    video.setAttribute("sources", dynamic.VIDEO_BG.Progressive_Url);
    video_src.setAttribute("src", dynamic.VIDEO_BG.Progressive_Url);
    video.load();
    video.pause();
  }

  // Imagery
  img_anim = dynamic.IMAGE_TRANSITION ? dynamic.IMAGE_TRANSITION : "fade";

  var srcPaths = [];

  // Images to Load
  dynamic.LOGO_IMG.Url ? srcPaths.push([logo, dynamic.LOGO_IMG.Url]) : null;
  dynamic.FRAME_1_BG.Url ? srcPaths.push([bg_1, dynamic.FRAME_1_BG.Url]) : null;
  dynamic.FRAME_2_BG.Url ? srcPaths.push([bg_2, dynamic.FRAME_2_BG.Url]) : null;
  dynamic.FRAME_3_BG.Url ? srcPaths.push([bg_3, dynamic.FRAME_3_BG.Url]) : null;
  dynamic.FRAME_END_BG.Url
    ? srcPaths.push([bg_end, dynamic.FRAME_END_BG.Url])
    : null;
  dynamic.AWARD_IMG.Url ? srcPaths.push([award, dynamic.AWARD_IMG.Url]) : null;

  dynImagesLoaded = 0;
  dynImagesToLoad = srcPaths.length;

  for (var i = 0; i <= srcPaths.length; i++) {
    if (dynImagesLoaded == dynImagesToLoad) {
      resetAll();
      startScene();
    } else {
      addDynImage(srcPaths[i][0], srcPaths[i][1]);
    }
  }
}

function addDynImage(img, src) {
  var newSrc = src;
  image = new Image();
  image.onload = function () {
    img.setAttribute("src", newSrc);
  };
  image.src = newSrc;

  dynImagesLoaded++;
}

/* - - - - - - - - - - - - - Animation - - - - - - - - - - - - - */

function initScenes() {
  if (firstRun) {
    bindDynamicData();
  } else {
    startScene();
  }
}

function startScene() {
  e("cta") ? ctaResize() : null;

  // Set Video and BG on from start if no curve
  if (!curveVis) gsap.set([video, bg_1], { alpha: 1 });

  // Hide loader
  tl = new gsap.timeline();
  tl.to(spinner, { duration: 0.1, alpha: 0 });
  tl.to(loader, {
    duration: 0.4,
    alpha: 0,
    onComplete: function () {
      Setup();
    },
  });

  totalDur += tl.duration();

  // Playback options
  gsap.globalTimeline.timeScale(timescaleTo);
}

function Setup() {
  gsap.set(ecs("bg"), { alpha: 0 });

  custom_anim ? startCustomAnimation() : null;

  Frame1();
}

function Frame1() {
  f1TxtSplit = new SplitText(f1_txt, { type: "lines,chars" });
  txtSplits.push(f1TxtSplit);
  video.play();

  gsap.set([video, bg_1, logo, f1_txt, award, f1_txt_tcs], { alpha: 1 });
  if (cta_frame_in == "1") gsap.set([cta, cta_txt], { alpha: 1 });

  tl = new gsap.timeline();

  if (curveVis)
    tl.from(
      curve,
      { duration: 0.6, y: "-=" + ad.height, margin: 0, ease: "power1.out" },
      0
    );

  tl.from(logo, { duration: 0.6, alpha: 0 }, 0);

  txtAnimIn(f1TxtSplit, txt_anim, tl, txt_anim_stagger, "-=0.4");

  if (cta_frame_in == "1")
    ctaAnimIn(cta, cta_txt, cta_anim, tl, "-=0.1", ad.width, ad.height);

  tl.from(award, { duration: 0.6, alpha: 0 }, "-=0.2");

  tl.from(f1_txt_tcs, { duration: 0.4, alpha: 0 }, "-=0.3");

  // tl.to([f1_txt_tcs,award,cta,cta_txt,logo], {duration:0.1,alpha:0})

  fr_length > 2
    ? wait(tl.duration() + frameDur[0], Frame2)
    : wait(tl.duration() + frameDur[0], Frame4);

  totalDur += tl.duration() + frameDur[0];
}

function Frame2() {
  f2TxtSplit = new SplitText(f2_txt, { type: "lines,chars" });
  txtSplits.push(f2TxtSplit);
  gsap.set([f2_txt], { alpha: 1 });
  if (cta_frame_in == "2") gsap.set([cta, cta_txt], { alpha: 1 });

  tl = new gsap.timeline();

  txtAnimOut(f1TxtSplit, txt_anim, tl, txt_anim_stagger, 0);
  txtAnimIn(f2TxtSplit, txt_anim, tl, txt_anim_stagger, "-=0.1");
  showTerms(f1_txt_tcs, f2_txt_tcs, tl);

  imgAnimOut(bg_1, img_anim, tl, null, ad.width, ad.height);
  imgAnimIn(bg_2, img_anim, tl, null, ad.width, ad.height);

  if (cta_frame_in == "2")
    ctaAnimIn(cta, cta_txt, cta_anim, tl, "-=0", ad.width, ad.height);

  fr_length > 3
    ? wait(tl.duration() + frameDur[1], Frame3)
    : wait(tl.duration() + frameDur[1], Frame4);

  totalDur += tl.duration() + frameDur[1];
}

function Frame3() {
  f3TxtSplit = new SplitText(f3_txt, { type: "lines,chars" });
  txtSplits.push(f3TxtSplit);
  gsap.set([f3_txt], { alpha: 1 });
  if (cta_frame_in == "2") gsap.set([cta, cta_txt], { alpha: 1 });

  tl = new gsap.timeline();

  txtAnimOut(f2TxtSplit, txt_anim, tl, txt_anim_stagger, 0);
  txtAnimIn(f3TxtSplit, txt_anim, tl, txt_anim_stagger, "-=0.1");
  showTerms(f2_txt_tcs, f3_txt_tcs, tl);

  imgAnimOut(bg_2, img_anim, tl, null, ad.width, ad.height);
  imgAnimIn(bg_3, img_anim, tl, null, ad.width, ad.height);

  if (cta_frame_in == "3")
    ctaAnimIn(cta, cta_txt, cta_anim, tl, "-=0", ad.width, ad.height);

  wait(tl.duration() + frameDur[2], Frame4);

  totalDur += tl.duration() + frameDur[2];
}

function Frame4() {
  endTxtSplit = new SplitText(end_txt, { type: "lines,chars" });
  txtSplits.push(endTxtSplit);
  gsap.set([end_txt], { alpha: 1 });
  if (cta_frame_in == "4") gsap.set([cta, cta_txt], { alpha: 1 });

  txt_out = lastFrameTxtOut(fr_length);
  tcs_out = lastFrameTcsOut(fr_length);
  bg_out = lastFrameBgOut(fr_length);

  tl = new gsap.timeline();

  txtAnimOut(txt_out, txt_anim, tl, txt_anim_stagger, 0);
  txtAnimIn(endTxtSplit, txt_anim, tl, txt_anim_stagger, "-=0.1");
  showTerms(tcs_out, end_txt_tcs, tl);

  tl.to(tcs, { duration: 0.5, alpha: 1 }, "-=0.2");

  if (cta_frame_in == "4")
    ctaAnimIn(cta, cta_txt, cta_anim, tl, "+=0.2", ad.width, ad.height);
  ctaAnimHighlight(cta, cta_txt, cta_highlight_anim, tl, "+=0.3");

  imgAnimOut(bg_out, img_anim, tl, null, ad.width, ad.height);
  imgAnimIn(bg_end, img_anim, tl, null, ad.width, ad.height);

  wait(tl.duration() + frameDur[3], Replay);

  totalDur += tl.duration();
}

function Replay() {
  loopCount++;

  if (loopCount < loops) {
    firstRun = false;

    tl = new gsap.timeline();
    tl.to(loader, {
      duration: 0.4,
      alpha: 1,
      onComplete: function () {
        reset();
      },
    });

    totalDur += tl.duration() + frameDur[3];

    console.log("Loop duration = " + totalDur);
  } else {
    console.log("Total duration = " + totalDur);
  }
}

function reset() {
  txtSplits.forEach(function (e) {
    e.revert();
  });
  resetAll();
  initScenes();
}

/* - - - - - - - - - - - Custom Animation - - - - - - - - - - - */

function startCustomAnimation() {
  tl = new gsap.timeline();
  eval(custom_anim);
}

/* - - - - - - - - - - - Frame Functions - - - - - - - - - - - */

function initCTAHover() {
  //e('clicktag').onmouseover = ctaOver;
  //e('clicktag').onmouseout = ctaOut;
}
function ctaOver() {
  if (!gsap.isTweening([cta, cta_txt])) {
    gsap.to(cta, { duration: 0.2, background: ctaBgHover });
  }
}
function ctaOut() {
  if (!gsap.isTweening([cta, cta_txt])) {
    gsap.to(cta, { duration: 0.2, background: dynamic.CTA_BG_COLOUR });
  }
}

function lastFrameTxtOut(fr) {
  return fr <= 2
    ? f1TxtSplit
    : fr == 3
    ? f2TxtSplit
    : fr >= 4
    ? f3TxtSplit
    : f3TxtSplit;
}

function lastFrameTcsOut(fr) {
  return fr <= 2
    ? f1_txt_tcs
    : fr == 3
    ? f2_txt_tcs
    : fr >= 4
    ? f3_txt_tcs
    : f3_txt_tcs;
}

function lastFrameBgOut(fr) {
  return fr <= 2 ? bg_1 : fr == 3 ? bg_2 : fr >= 4 ? bg_3 : bg_3;
}

function showTerms(t1, t2, tl) {
  if (t1.innerText == t2.innerText) {
    tl.set(t1, { alpha: 0 }).set(t2, { alpha: 1 });
  } else {
    tl.to(t1, { duration: 0.2, alpha: 0 }, 0).to(
      t2,
      { duration: 0.5, alpha: 1 },
      0.6
    );
  }
}

function ctaResize() {
  cta = e("cta");
  cta_txt = e("cta_txt");
  cln = cta_txt.cloneNode(true);
  cln.id = "cta_clone";
  e("banner").appendChild(cln);

  cta_cln = e("cta_clone");
  getW = cta_cln.offsetWidth + 20;

  if (getW > cta_txt.offsetWidth) {
    cta.style.width = getW + "px";
    cta_txt.style.width = getW + "px";
  }
}

/* - - - - - - - - - - - Global Functions - - - - - - - - - - - */

function e(t) {
  return document.getElementById(String(t));
}
function ecs(t) {
  return document.getElementsByClassName(String(t));
}
function resetAll() {
  var t = ecs("lyr");
  gsap.killTweensOf(t),
    gsap.set(t, { x: 0, y: 0, rotation: rot0(), scale: 1, opacity: 1 }),
    hide(t);
}
function wait(t, e, n) {
  (n = void 0 !== n ? n : []),
    Math.abs(t) < 1e-4 ? e.apply(window, n) : gsap.delayedCall(t, e, n, window);
}
function hasClass(t, e) {
  return t.classList
    ? t.classList.contains(e)
    : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
}
function addClass(t, e) {
  t.classList ? t.classList.add(e) : hasClass(t, e) || (t.className += " " + e);
}
function getBounds(t) {
  var e = {};
  return (
    (e.width = getProp(t, "width")),
    (e.height = getProp(t, "height")),
    (e.left = getProp(t, "left")),
    (e.top = getProp(t, "top")),
    e
  );
}
function getProp(t, e) {
  var n = window.getComputedStyle(t, null);
  return parseInt(n[e]);
}
function getStrProp(t, e) {
  return window.getComputedStyle(t, null)[e];
}
function stopWatch(t) {
  wait((t = void 0 !== t ? t : 0), function () {
    !1 === F
      ? (F = (F = new Date()).getTime())
      : (new Date().getTime(), (F = !1));
  });
}
function browserSupportsSubpixel() {
  var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"),
    e = /MSIE|Trident/.test(window.navigator.userAgent);
  return !t && !e;
}
function rot0() {
  return browserSupportsSubpixel() ? 0 : 0.01;
}
function hide(t) {
  gsap.set(t, { opacity: 0 });
}
function show(t) {
  gsap.set(t, { opacity: 1 });
}
const pSBC = (t, e, n, r) => {
  let s,
    i,
    a,
    o,
    l,
    u,
    g,
    p = parseInt,
    c = Math.round,
    d = "string" == typeof n;
  return "number" != typeof t ||
    t < -1 ||
    t > 1 ||
    "string" != typeof e ||
    ("r" != e[0] && "#" != e[0]) ||
    (n && !d)
    ? null
    : (this.pSBCr ||
        (this.pSBCr = (t) => {
          let e = t.length,
            n = {};
          if (e > 9) {
            if (
              (([s, i, a, d] = t = t.split(",")), (e = t.length) < 3 || e > 4)
            )
              return null;
            (n.r = p("a" == s[3] ? s.slice(5) : s.slice(4))),
              (n.g = p(i)),
              (n.b = p(a)),
              (n.a = d ? parseFloat(d) : -1);
          } else {
            if (8 == e || 6 == e || e < 4) return null;
            e < 6 &&
              (t =
                "#" +
                t[1] +
                t[1] +
                t[2] +
                t[2] +
                t[3] +
                t[3] +
                (e > 4 ? t[4] + t[4] : "")),
              (t = p(t.slice(1), 16)),
              9 == e || 5 == e
                ? ((n.r = (t >> 24) & 255),
                  (n.g = (t >> 16) & 255),
                  (n.b = (t >> 8) & 255),
                  (n.a = c((255 & t) / 0.255) / 1e3))
                : ((n.r = t >> 16),
                  (n.g = (t >> 8) & 255),
                  (n.b = 255 & t),
                  (n.a = -1));
          }
          return n;
        }),
      (g = e.length > 9),
      (g = d ? n.length > 9 || ("c" == n && !g) : g),
      (l = this.pSBCr(e)),
      (o = t < 0),
      (u =
        n && "c" != n
          ? this.pSBCr(n)
          : o
          ? { r: 0, g: 0, b: 0, a: -1 }
          : { r: 255, g: 255, b: 255, a: -1 }),
      (o = 1 - (t = o ? -1 * t : t)),
      l && u
        ? (r
            ? ((s = c(o * l.r + t * u.r)),
              (i = c(o * l.g + t * u.g)),
              (a = c(o * l.b + t * u.b)))
            : ((s = c((o * l.r ** 2 + t * u.r ** 2) ** 0.5)),
              (i = c((o * l.g ** 2 + t * u.g ** 2) ** 0.5)),
              (a = c((o * l.b ** 2 + t * u.b ** 2) ** 0.5))),
          (d = l.a),
          (u = u.a),
          (d = (l = d >= 0 || u >= 0)
            ? d < 0
              ? u
              : u < 0
              ? d
              : d * o + u * t
            : 0),
          g
            ? "rgb" +
              (l ? "a(" : "(") +
              s +
              "," +
              i +
              "," +
              a +
              (l ? "," + c(1e3 * d) / 1e3 : "") +
              ")"
            : "#" +
              (
                4294967296 +
                16777216 * s +
                65536 * i +
                256 * a +
                (l ? c(255 * d) : 0)
              )
                .toString(16)
                .slice(1, l ? void 0 : -2))
        : null);
};

/* - - - - - - - - - - - - GSAP Plugins - - - - - - - - - - - - */

!(function (D, u) {
  "object" == typeof exports && "undefined" != typeof module
    ? u(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], u)
    : u(((D = D || self).window = D.window || {}));
})(this, function (D) {
  "use strict";
  var _ =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function k(D) {
    return e.getComputedStyle(D);
  }
  function n(D, u) {
    var e;
    return i(D)
      ? D
      : "string" == (e = typeof D) && !u && D
      ? E.call(Q.querySelectorAll(D), 0)
      : D && "object" == e && "length" in D
      ? E.call(D, 0)
      : D
      ? [D]
      : [];
  }
  function o(D) {
    return "absolute" === D.position || !0 === D.absolute;
  }
  function p(D, u) {
    for (var e, t = u.length; -1 < --t; )
      if (((e = u[t]), D.substr(0, e.length) === e)) return e.length;
  }
  function r(D, u) {
    void 0 === D && (D = "");
    var e = ~D.indexOf("++"),
      t = 1;
    return (
      e && (D = D.split("++").join("")),
      function () {
        return (
          "<" +
          u +
          " style='position:relative;display:inline-block;'" +
          (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
        );
      }
    );
  }
  function s(D, u, e) {
    var t = D.nodeType;
    if (1 === t || 9 === t || 11 === t)
      for (D = D.firstChild; D; D = D.nextSibling) s(D, u, e);
    else (3 !== t && 4 !== t) || (D.nodeValue = D.nodeValue.split(u).join(e));
  }
  function t(D, u) {
    for (var e = u.length; -1 < --e; ) D.push(u[e]);
  }
  function u(D, u, e) {
    for (var t; D && D !== u; ) {
      if ((t = D._next || D.nextSibling)) return t.textContent.charAt(0) === e;
      D = D.parentNode || D._parent;
    }
  }
  function v(D) {
    var u,
      e,
      t = n(D.childNodes),
      F = t.length;
    for (u = 0; u < F; u++)
      (e = t[u])._isSplit
        ? v(e)
        : u && e.previousSibling && 3 === e.previousSibling.nodeType
        ? ((e.previousSibling.nodeValue +=
            3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue),
          D.removeChild(e))
        : 3 !== e.nodeType &&
          (D.insertBefore(e.firstChild, e), D.removeChild(e));
  }
  function w(D, u) {
    return parseFloat(u[D]) || 0;
  }
  function x(D, e, F, C, i, n, E) {
    var r,
      l,
      p,
      d,
      a,
      h,
      B,
      f,
      A,
      c,
      x,
      g,
      y = k(D),
      _ = w("paddingLeft", y),
      b = -999,
      S = w("borderBottomWidth", y) + w("borderTopWidth", y),
      T = w("borderLeftWidth", y) + w("borderRightWidth", y),
      N = w("paddingTop", y) + w("paddingBottom", y),
      m = w("paddingLeft", y) + w("paddingRight", y),
      L = w("fontSize", y) * (e.lineThreshold || 0.2),
      W = y.textAlign,
      H = [],
      O = [],
      V = [],
      j = e.wordDelimiter || " ",
      M = e.tag ? e.tag : e.span ? "span" : "div",
      R = e.type || e.split || "chars,words,lines",
      z = i && ~R.indexOf("lines") ? [] : null,
      P = ~R.indexOf("words"),
      q = ~R.indexOf("chars"),
      G = o(e),
      I = e.linesClass,
      J = ~(I || "").indexOf("++"),
      K = [];
    for (
      J && (I = I.split("++").join("")),
        p = (l = D.getElementsByTagName("*")).length,
        a = [],
        r = 0;
      r < p;
      r++
    )
      a[r] = l[r];
    if (z || G)
      for (r = 0; r < p; r++)
        ((h = (d = a[r]).parentNode === D) || G || (q && !P)) &&
          ((g = d.offsetTop),
          z &&
            h &&
            Math.abs(g - b) > L &&
            ("BR" !== d.nodeName || 0 === r) &&
            ((B = []), z.push(B), (b = g)),
          G &&
            ((d._x = d.offsetLeft),
            (d._y = g),
            (d._w = d.offsetWidth),
            (d._h = d.offsetHeight)),
          z &&
            (((d._isSplit && h) ||
              (!q && h) ||
              (P && h) ||
              (!P &&
                d.parentNode.parentNode === D &&
                !d.parentNode._isSplit)) &&
              (B.push(d), (d._x -= _), u(d, D, j) && (d._wordEnd = !0)),
            "BR" === d.nodeName &&
              ((d.nextSibling && "BR" === d.nextSibling.nodeName) || 0 === r) &&
              z.push([])));
    for (r = 0; r < p; r++)
      if (((h = (d = a[r]).parentNode === D), "BR" !== d.nodeName))
        if (
          (G &&
            ((A = d.style),
            P || h || ((d._x += d.parentNode._x), (d._y += d.parentNode._y)),
            (A.left = d._x + "px"),
            (A.top = d._y + "px"),
            (A.position = "absolute"),
            (A.display = "block"),
            (A.width = d._w + 1 + "px"),
            (A.height = d._h + "px")),
          !P && q)
        )
          if (d._isSplit)
            for (
              d._next = l = d.nextSibling, d.parentNode.appendChild(d);
              l && 3 === l.nodeType && " " === l.textContent;

            )
              (d._next = l.nextSibling),
                d.parentNode.appendChild(l),
                (l = l.nextSibling);
          else
            d.parentNode._isSplit
              ? ((d._parent = d.parentNode),
                !d.previousSibling &&
                  d.firstChild &&
                  (d.firstChild._isFirst = !0),
                d.nextSibling &&
                  " " === d.nextSibling.textContent &&
                  !d.nextSibling.nextSibling &&
                  K.push(d.nextSibling),
                (d._next =
                  d.nextSibling && d.nextSibling._isFirst
                    ? null
                    : d.nextSibling),
                d.parentNode.removeChild(d),
                a.splice(r--, 1),
                p--)
              : h ||
                ((g = !d.nextSibling && u(d.parentNode, D, j)),
                d.parentNode._parent && d.parentNode._parent.appendChild(d),
                g && d.parentNode.appendChild(Q.createTextNode(" ")),
                "span" === M && (d.style.display = "inline"),
                H.push(d));
        else
          d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML
            ? O.push(d)
            : q &&
              !d._isSplit &&
              ("span" === M && (d.style.display = "inline"), H.push(d));
      else
        z || G
          ? (d.parentNode && d.parentNode.removeChild(d), a.splice(r--, 1), p--)
          : P || D.appendChild(d);
    for (r = K.length; -1 < --r; ) K[r].parentNode.removeChild(K[r]);
    if (z) {
      for (
        G &&
          ((c = Q.createElement(M)),
          D.appendChild(c),
          (x = c.offsetWidth + "px"),
          (g = c.offsetParent === D ? 0 : D.offsetLeft),
          D.removeChild(c)),
          A = D.style.cssText,
          D.style.cssText = "display:none;";
        D.firstChild;

      )
        D.removeChild(D.firstChild);
      for (f = " " === j && (!G || (!P && !q)), r = 0; r < z.length; r++) {
        for (
          B = z[r],
            (c = Q.createElement(M)).style.cssText =
              "display:block;text-align:" +
              W +
              ";position:" +
              (G ? "absolute;" : "relative;"),
            I && (c.className = I + (J ? r + 1 : "")),
            V.push(c),
            p = B.length,
            l = 0;
          l < p;
          l++
        )
          "BR" !== B[l].nodeName &&
            ((d = B[l]),
            c.appendChild(d),
            f && d._wordEnd && c.appendChild(Q.createTextNode(" ")),
            G &&
              (0 === l &&
                ((c.style.top = d._y + "px"), (c.style.left = _ + g + "px")),
              (d.style.top = "0px"),
              g && (d.style.left = d._x - g + "px")));
        0 === p
          ? (c.innerHTML = "&nbsp;")
          : P || q || (v(c), s(c, String.fromCharCode(160), " ")),
          G && ((c.style.width = x), (c.style.height = d._h + "px")),
          D.appendChild(c);
      }
      D.style.cssText = A;
    }
    G &&
      (E > D.clientHeight &&
        ((D.style.height = E - N + "px"),
        D.clientHeight < E && (D.style.height = E + S + "px")),
      n > D.clientWidth &&
        ((D.style.width = n - m + "px"),
        D.clientWidth < n && (D.style.width = n + T + "px"))),
      t(F, H),
      P && t(C, O),
      t(i, V);
  }
  function y(D, u, e, t) {
    var F,
      C,
      i,
      n,
      E,
      r,
      l,
      d,
      a = u.tag ? u.tag : u.span ? "span" : "div",
      h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"),
      B = o(u),
      f = u.wordDelimiter || " ",
      A = " " !== f ? "" : B ? "&#173; " : " ",
      c = "</" + a + ">",
      x = 1,
      g = u.specialChars
        ? "function" == typeof u.specialChars
          ? u.specialChars
          : p
        : null,
      y = Q.createElement("div"),
      v = D.parentNode;
    for (
      v.insertBefore(y, D),
        y.textContent = D.nodeValue,
        v.removeChild(D),
        l =
          -1 !==
          (F = (function getText(D) {
            var u = D.nodeType,
              e = "";
            if (1 === u || 9 === u || 11 === u) {
              if ("string" == typeof D.textContent) return D.textContent;
              for (D = D.firstChild; D; D = D.nextSibling) e += getText(D);
            } else if (3 === u || 4 === u) return D.nodeValue;
            return e;
          })((D = y))).indexOf("<"),
        !1 !== u.reduceWhiteSpace && (F = F.replace(S, " ").replace(b, "")),
        l && (F = F.split("<").join("{{LT}}")),
        E = F.length,
        C = (" " === F.charAt(0) ? A : "") + e(),
        i = 0;
      i < E;
      i++
    )
      if (((r = F.charAt(i)), g && (d = g(F.substr(i), u.specialChars))))
        (r = F.substr(i, d || 1)),
          (C += h && " " !== r ? t() + r + "</" + a + ">" : r),
          (i += d - 1);
      else if (r === f && F.charAt(i - 1) !== f && i) {
        for (C += x ? c : "", x = 0; F.charAt(i + 1) === f; ) (C += A), i++;
        i === E - 1
          ? (C += A)
          : ")" !== F.charAt(i + 1) && ((C += A + e()), (x = 1));
      } else
        "{" === r && "{{LT}}" === F.substr(i, 6)
          ? ((C += h ? t() + "{{LT}}</" + a + ">" : "{{LT}}"), (i += 5))
          : (55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319) ||
            (65024 <= F.charCodeAt(i + 1) && F.charCodeAt(i + 1) <= 65039)
          ? ((n = ((F.substr(i, 12).split(_) || [])[1] || "").length || 2),
            (C +=
              h && " " !== r
                ? t() + F.substr(i, n) + "</" + a + ">"
                : F.substr(i, n)),
            (i += n - 1))
          : (C += h && " " !== r ? t() + r + "</" + a + ">" : r);
    (D.outerHTML = C + (x ? c : "")), l && s(v, "{{LT}}", "<");
  }
  function z(D, u, e, t) {
    var F,
      C,
      i = n(D.childNodes),
      E = i.length,
      s = o(u);
    if (3 !== D.nodeType || 1 < E) {
      for (u.absolute = !1, F = 0; F < E; F++)
        ((C = i[F])._next = C._isFirst = C._parent = C._wordEnd = null),
          (3 === C.nodeType && !/\S+/.test(C.nodeValue)) ||
            (s &&
              3 !== C.nodeType &&
              "inline" === k(C).display &&
              ((C.style.display = "inline-block"),
              (C.style.position = "relative")),
            (C._isSplit = !0),
            z(C, u, e, t));
      return (u.absolute = s), void (D._isSplit = !0);
    }
    y(D, u, e, t);
  }
  var Q,
    e,
    F,
    C,
    b = /(?:\r|\n|\t\t)/g,
    S = /(?:\s\s+)/g,
    i = Array.isArray,
    E = [].slice,
    l =
      (((C = SplitText.prototype).split = function split(D) {
        this.isSplit && this.revert(),
          (this.vars = D = D || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0);
        for (
          var u,
            e,
            t,
            F = this.elements.length,
            C = D.tag ? D.tag : D.span ? "span" : "div",
            i = r(D.wordsClass, C),
            n = r(D.charsClass, C);
          -1 < --F;

        )
          (t = this.elements[F]),
            (this._originals[F] = t.innerHTML),
            (u = t.clientHeight),
            (e = t.clientWidth),
            z(t, D, i, n),
            x(t, D, this.chars, this.words, this.lines, e, u);
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (C.revert = function revert() {
        var e = this._originals;
        if (!e) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (D, u) {
            return (D.innerHTML = e[u]);
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (SplitText.create = function create(D, u) {
        return new SplitText(D, u);
      }),
      SplitText);
  function SplitText(D, u) {
    F ||
      (function _initCore() {
        (Q = document), (e = window), (F = 1);
      })(),
      (this.elements = n(D)),
      (this.chars = []),
      (this.words = []),
      (this.lines = []),
      (this._originals = []),
      (this.vars = u || {}),
      this.split(u);
  }
  (l.version = "3.6.0"), (D.SplitText = l), (D.default = l);
  if (typeof window === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", { value: !0 });
  } else {
    delete D.default;
  }
});

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function h() {
    return "undefined" != typeof window;
  }
  function i() {
    return t || (h() && (t = window.gsap) && t.registerPlugin && t);
  }
  function j() {
    return (
      n ||
        (s(),
        o ||
          console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),
      n
    );
  }
  var t,
    n,
    c,
    o,
    s = function _initCore(e) {
      (t = e || i()),
        h() && (c = document),
        t && (o = t.plugins.css) && (n = 1);
    },
    r = {
      version: "3.6.0",
      name: "cssRule",
      init: function init(e, t, n, i, s) {
        if (!j() || void 0 === e.cssText) return !1;
        var r = (e._gsProxy = e._gsProxy || c.createElement("div"));
        (this.ss = e),
          (this.style = r.style),
          (r.style.cssText = e.cssText),
          o.prototype.init.call(this, r, t, n, i, s);
      },
      render: function render(e, t) {
        for (var n, i = t._pt, s = t.style, r = t.ss; i; )
          i.r(e, i.d), (i = i._next);
        for (n = s.length; -1 < --n; ) r[s[n]] = s[s[n]];
      },
      getRule: function getRule(e) {
        j();
        var t,
          n,
          i,
          s,
          r = c.all ? "rules" : "cssRules",
          o = c.styleSheets,
          l = o.length,
          u = ":" === e.charAt(0);
        for (
          e = (u ? "" : ",") + e.split("::").join(":").toLowerCase() + ",",
            u && (s = []);
          l--;

        ) {
          try {
            if (!(n = o[l][r])) continue;
            t = n.length;
          } catch (e) {
            console.warn(e);
            continue;
          }
          for (; -1 < --t; )
            if (
              (i = n[t]).selectorText &&
              -1 !==
                (
                  "," +
                  i.selectorText.split("::").join(":").toLowerCase() +
                  ","
                ).indexOf(e)
            ) {
              if (!u) return i.style;
              s.push(i.style);
            }
        }
        return s;
      },
      register: s,
    };
  i() && t.registerPlugin(r), (e.CSSRulePlugin = r), (e.default = r);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
