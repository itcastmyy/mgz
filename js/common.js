var commonjspath=(function(B,A,C){for(A in B){if(B[A].src&&B[A].src.indexOf("js/common.js")!==-1){C=B[A];break}}C=C||B[B.length-1];return C.src}(document.getElementsByTagName("script")));
var vp=commonjspath.split("vp=")[1]||"/";function setFontSize(A){var B=document.getElementById("info_content");
if(B){B.style.fontSize=A+"px"}}function bannerShow(C,B,A,E,F){if(C=="3D"){var G="&xml="+vp+"banner?defaultBannerId="+F;
document.write('<div style="width:'+B+'px;margin:0 auto;">');
document.write('<object id="banner" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+B+'" height="'+A+'" align="left" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param name="FlashVars" value="flashVars='+G+'" /> <param name="movie" value="banner/banner'+C+'.swf" /> <param name="quality" value="high" /> <param name="play" value="true" /> <param name="loop" value="true" /> <param name="scale" value="noscale" /> <param name="wmode" value="transparent" /> <param name="devicefont" value="false" /> <param name="bgcolor" value="'+E+'" /> <param name="menu" value="true" /> <param name="allowFullScreen" value="false" /> <param name="allowScriptAccess" value="sameDomain" /> <param name="salign" value="lt" /> <embed name="banner" FlashVars="flashVars='+G+'" width="'+B+'" height="'+A+'" src="banner/banner'+C+'.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" align="left" play="true" loop="true" scale="noscale" wmode="transparent" devicefont="false" bgcolor="'+E+'" menu="true" allowFullScreen="false" allowScriptAccess="sameDomain" salign="lt" type="application/x-shockwave-flash" > </embed> </object>');document.write("</div>")}else{if(C==5){var D=$.ajax({url:vp+"banner?mode=js&defaultBannerId="+F,async:false}).responseText;document.write(D)}else{if(C==6){var D=$.ajax({url:vp+"banner?mode=jsMobile&defaultBannerId="+F,async:false}).responseText;document.write(D)}else{if(C==7){var D=$.ajax({url:vp+"banner?mode=jsbanner&defaultBannerId="+F,async:false}).responseText;document.write(D)}else{var G="&xml="+vp+"banner?defaultBannerId="+F;document.write('<div style="width:'+B+'px;margin:0 auto;">');document.write('<object id="banner" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+B+'" height="'+A+'" align="left" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param name="FlashVars" value="flashVars='+G+'" /> <param name="movie" value="banner/banner'+C+'.swf" /> <param name="quality" value="high" /> <param name="play" value="true" /> <param name="loop" value="true" /> <param name="scale" value="noscale" /> <param name="wmode" value="transparent" /> <param name="devicefont" value="false" />  <param name="menu" value="true" /> <param name="allowFullScreen" value="false" /> <param name="allowScriptAccess" value="sameDomain" /> <param name="salign" value="lt" /> <embed name="banner" FlashVars="flashVars='+G+'" width="'+B+'" height="'+A+'" src="banner/banner'+C+'.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" align="left" play="true" loop="true" scale="noscale" wmode="transparent" devicefont="false" menu="true" allowFullScreen="false" allowScriptAccess="sameDomain" salign="lt" type="application/x-shockwave-flash" > </embed> </object>');document.write("</div>")}}}}}function imgShow(C,B,A,E,F){var D=$.ajax({url:vp+"img?mode=jsMobile&strImgUrls="+F,async:false}).responseText;document.write(D)};