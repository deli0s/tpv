function edit(){
	if (window.location.href.indexOf("subscriptions") > -1){
		var videos=document.getElementsByClassName("yt-shelf-grid-item");
		if (existeix(videos)){
			var size_videos=videos.length;
			for (var i_video=0; i_video<size_videos; i_video++){
				var video=videos[i_video];
				if (existeix(video)){
					var watched=video.getElementsByClassName("resume-playback-progress-bar")[0];
					if (existeix(watched)){
						deleteByClass("yt-shelf-grid-item",i_video);
						i_video--;
					}else{
						var late_h3=video.getElementsByTagName("h3")[0];
						var late=(late_h3.innerHTML.indexOf("LATE MOTIV")>-1);
						var late_david=(late_h3.innerHTML.indexOf("David Broncano")>-1);
						var late_berto=(late_h3.innerHTML.indexOf("Berto Romero")>-1);
						if (late){
							if (!late_david && !late_berto){
								deleteByClass("yt-shelf-grid-item",i_video);
								i_video--;
							}
						}
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
document.getElementsByTagName("body")[0].onclick=reload;
document.getElementsByTagName("body")[0].addEventListener("wheel",reload);
