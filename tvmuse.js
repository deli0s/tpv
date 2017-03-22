var thepiratebay="https://thepiratebay.cr/search/";
function edit(){
	var sched_1=document.getElementById("sched_1");
	if (existeix(sched_1)){
		var dds=sched_1.getElementsByTagName("dd");
		var size_dd=dds.length;
		for (var i_dd=0; i_dd<size_dd; i_dd++){
			var dd=dds[i_dd];
			if (dd.getElementsByTagName("a").length===2){
				var link0=dd.getElementsByTagName("a")[0].href;
				var link1=dd.getElementsByTagName("a")[1].href;
				link1=link1.replace(link0,"");
				link0=link0.replace("http://www.tvmuse.com/tv-shows/","");
				link0=link0.substring(0,link0.indexOf("_"));
				link0=link0.replace("-s-","s-");
				var s_e_=link1.replace("season_","");
				s_=s_e_.substring(0,s_e_.indexOf("/"));
				var e_=s_e_.substring(s_e_.indexOf("_")+1,s_e_.replace("/","").indexOf("/")+1);
				if (Number(s_)<10) s_="0"+s_;
				if (Number(e_)<10) e_="0"+e_;
				addPirate(link0+"%20s"+s_+"e"+e_,dd.getElementsByTagName("a")[0]);
			}
		}
	}
}
function addPirate(nom,child){
	var a_Pirate=document.createElement("a");
	var img_P=document.createElement("img");
	img_P.src="https://rawgit.com/deli0s/js/master/tpb.png";
	img_P.style.width="19px";
	img_P.style.textDecoration="none";
	a_Pirate.style.textDecoration="none";
	a_Pirate.style.padding="0";
	a_Pirate.style.zIndex="1";
	a_Pirate.style.display="inline-block";
	a_Pirate.setAttribute('target','_blank');
	a_Pirate.appendChild(img_P);
	a_Pirate.style.cursor="pointer";
	a_Pirate.setAttribute('href',thepiratebay+nom.replace(/-/g,"%20"));
	child.appendChild(a_Pirate);
}
function existeix(nom){
	return (nom!==undefined && nom!==null);
}
edit();
function reload(){
	try {
        edit();
    }catch(err) {
        // error
    }
}
document.body.onclick=reload;
document.body.addEventListener("wheel",reload);
