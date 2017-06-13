var thepiratebay="https://thepiratebay.cr/search/";
function edit(){
	sched_link("sched_0");
	sched_link("sched_1");
	sched_link("sched_2");
	deleteScriptAds();
	deleteMe(document.getElementsByTagName("iframe")[0]);
}
function sched_link(sched_){
	var sched=document.getElementById(sched_);
	if (existeix(sched)){
		var dds=sched.getElementsByTagName("dd");
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
	child.insertBefore(a_Pirate,child.lastChild);
	//child.appendChild(a_Pirate);
}
function existeix(nom){
	return (nom!==undefined && nom!==null);
}
function deleteMe(child){
    if (existeix(child)){
        var pareC=child.parentNode;
        pareC.removeChild(child);
    }
}
function deleteScriptAds(){
    var x_script=document.getElementsByTagName("script");
    var size_script=x_script.length;
    for (var i_script=0; i_script<size_script; i_script++){
        var child_script=x_script[i_script];
        if (existeix(child_script)){
			if (child_script.src.indexOf("wabxsybclllz")>-1 || child_script.src.indexOf("ads")>-1){
				deleteMe(child_script);
        		i_script--;
        	}
        }
    }
}
function dateType(){
    var months=document.getElementsByClassName("light");
    var months_size=months.length;
    for (var months_i=0; months_i<months_size; months_i++){
		var month_sub=months[months_i];
        if (existeix(month_sub)){
			var month_inner=month_sub.innerHTML;
			var month_split=month_inner.split(" ")[1].split("/");
			//months[months_i].innerHTML=month_inner.replace(month_split[0]+"/"+month_split[1],month_split[1]+"/"+month_split[0]);
			if (month_split.length===2){
				months[months_i].innerHTML=month_inner.replace(month_split[0]+"/","");
			}
		}
	}
	
	var hours=document.getElementsByClassName("block small");
    var hours_size=hours.length;
    for (var hours_i=0; hours_i<hours_size; hours_i++){
		var hour_sub=hours[hours_i];
        if (existeix(hour_sub)){
			var hour_inner=hour_sub.innerHTML;
			var pos=hour_inner.indexOf(" PM ");
			if (pos>-1){
				var hour_str=hour_inner.substr(0,pos);
				var hour_split=hour_str.split(":");
				hour_inner=hour_inner.replace(hour_split[0]+":"+hour_split[1],(Number(hour_split[0])+12)+":"+hour_split[1]);
			}
			hour_inner=hour_inner.replace(" PM "," ");
			hours[hours_i].innerHTML=hour_inner.replace(" AM "," ");
		}
	}
}
edit();
sinline_tvhide('2');
dateType();
function reload(){
	try {
        edit();
    }catch(err) {
        // error
    }
}
document.body.onclick=reload;
document.body.addEventListener("wheel",reload);
