function edit(){
	if (window.location.href.indexOf("subscriptions") > -1){
		var videos=document.getElementsByClassName("yt-shelf-grid-item");
		if (existeix(videos)){
			var size_videos=videos.length;
			for (var i_video=0; i_video<size_videos; i_video++){
				var video=videos[i_video];
				if (existeix(video)){
					var watched=video.getElementsByClassName("resume-playback-progress-bar")[0];
					if (existeix(watched) || t_(video,"Late Motiv","Broncano") || t_(video,"Late Motiv","Romero") || t_(video,"Late Motiv","ignatius") || t_(video,"TERRAT","NADIE SABE NADA") || t_(video,"manga","Titan") || t_(video,"Oh! My LOL","moderna ") || t_(video,"Oh! My LOL","Moderna ") || t_(video,"Jimmy Fallon","Hashtags") || t_(video,"WIRED","Answer the Web")){
						deleteByClass("yt-shelf-grid-item",i_video);
						i_video--;
					}
				//console.log(i_video);
				}
			}
		}
	}
}

function t_(video,title_str,h3_str){//title
	var title_=video.getElementsByTagName("a")[2];
	var h3_=video.getElementsByTagName("h3")[0];
	var title_2=(title_.innerHTML.indexOf(title_str)>-1);
	var h3_2=(h3_.innerHTML.indexOf(h3_str)>-1);
	return (title_2 && !h3_2);
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
