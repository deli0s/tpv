function edit(){
	if (window.location.href.indexOf("subscriptions") > -1){
		var videos=document.getElementsByClassName("yt-shelf-grid-item");
		if (existeix(videos)){
			var size_videos=videos.length;
			for (var i_video=0; i_video<size_videos; i_video++){
				var video=videos[i_video];
				if (existeix(video)){
					var watched=video.getElementsByClassName("resume-playback-progress-bar")[0];
					var title_=video.getElementsByTagName("a")[2];
					var h3_=video.getElementsByTagName("h3")[0];
					var late=(title_.innerHTML.indexOf("Late Motiv")>-1);
					var late_david=(h3_.innerHTML.indexOf("Broncano")>-1);
					var late_berto=(h3_.innerHTML.indexOf("Romero")>-1);
					var late_ign=(h3_.innerHTML.indexOf("ignatius")>-1);
					var terrat=(title_.innerHTML.indexOf("TERRAT")>-1);
					var NSN=(h3_.innerHTML.indexOf("NADIE SABE NADA")>-1);
					var manga=(title_.innerHTML.indexOf("manga")>-1);
					var Titan=(h3_.innerHTML.indexOf("Titan")>-1);
					if (existeix(watched) || (late && !late_david && !late_berto && !late_ign) || (terrat && !NSN) || (manga && !Titan)){
						deleteByClass("yt-shelf-grid-item",i_video);
						i_video--;
					}
				//console.log(i_video);
				}
			}
		}
	}
}

function existeix(nom){
	return (nom!==undefined && nom!==null);
}

function deleteByClass(nom,num){
	var childClass=document.getElementsByClassName(nom)[num];
    if (existeix(childClass)){
        var pareClass=childClass.parentNode;
        pareClass.removeChild(childClass);
    }
}

edit();
function reload(){
	try {
        edit();
    }catch(err) {
        console.log("error");
    }
}
document.body.onclick=reload;
document.body.addEventListener("wheel",reload);
