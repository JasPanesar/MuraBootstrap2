//-----------------------------------------------------------------------------------
// Author: David Panzarella (SB InnerWeb Development - www.sbinnerweb.com)
// Date: 9/24/2012
// This file contains scripts for various JS functions
//-----------------------------------------------------------------------------------
$(window).load(function(){function t(e){jQuery(window).scrollTop()>0?e.fadeIn(150):e.fadeOut(150)}var e=jQuery("#back-to-top");jQuery(window).scroll(function(){t(e)});e.find("a").click(function(){jQuery("html, body").stop().animate({scrollTop:0},450);return!1})});if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)){var viewportmeta=document.querySelector('meta[name="viewport"]');if(viewportmeta){viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0";document.body.addEventListener("gesturestart",function(){viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},!1)}};