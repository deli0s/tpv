var web=window.location.href;
if (web.indexOf("pordede")>-1){
	$.getScript('https://rawgit.com/deli0s/js/master/pordede.js', function() { });
}else if (web.indexOf("wopelis")>-1){
	$.getScript('https://rawgit.com/deli0s/js/master/wopelis.js', function() { });
}else if (web.indexOf("youtube")>-1){
	$.getScript('https://rawgit.com/deli0s/js/master/yt.js', function() { });
}else {}
