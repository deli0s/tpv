function edit(){
	var videos=document.getElementsByClassName("yt-shelf-grid-item");
	if (existeix(videos)){
		var size_videos=videos.length;
		for (var i_video=0; i_video<size_videos; i_video++){
			var video=videos[i_video];
			var watched=video.getElementsByClassName("resume-playback-progress-bar")[0];
			if (existeix(watched)){
				deleteByClass(video,0);
				i_video--;
			}else{
				var late_h3=video.getElementsByTagName("h3")[0];
				var late=late_h3.innerHTML.indexOf("LATE MOTIV");
				var late_david=late_h3.innerHTML.indexOf("David Broncano");
				var late_berto=late_h3.innerHTML.indexOf("Berto Romero");
				if (late){
					if (!late_david && !late_berto){
						deleteByClass(video,0);
						i_video--;
					}
				}
			}
        console.log(i_video);
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
document.getElementById("bodyId").onclick=reload;