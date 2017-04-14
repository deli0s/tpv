var thepiratebay="https://thepiratebay.cr/search/";
function linkAds(e){
	return (e.indexOf("wabxsybclllz")>-1 || e.indexOf("woombaa")>-1 || e.indexOf("jettags")>-1 || e.indexOf("traffic")>-1 || e.indexOf("getmyads")>-1 || e.indexOf("mediawhirl")>-1 || e.indexOf("liveadexchanger")>-1|| e.indexOf("doubleclick")>-1 || e.indexOf("unique2lazy.com")>-1);
}

function edit(){
	deleteClickAds();
	deleteScriptAds();
	getLinks();
	reSize();
	addLinks2();
	var button_=document.getElementsByTagName("button")[0];
	if (existeix(button_)){
		if (button_.innerHTML==="Acepto y quiero entrar"){
			button_.click();
		}
	}
	//CSS
	var sheet = window.document.styleSheets[0];
	sheet.insertRule('button:hover,input[type=submit]:hover,.dropdownContainer.blue:hover{background:#0a5bc2;}', sheet.cssRules.length);
	sheet.insertRule('@media (min-width: 580px) {div.link{ margin:0 5% 0 5%;}div.link{background-color:#e8e8e8;clear:both;width:80%;padding:10px;float:left;border:solid 1px #dcdcdc;max-width:1050px;min-width:365px}', sheet.cssRules.length);
	//
	if (window.location.href.indexOf("venlaces") > -1){
		deleteScreener();
		//Subir enlaces
		var upload_=document.getElementsByTagName("form")[0];
		if (existeix(upload_)){
			upload_.style.float="right";
		}
		//title
		var title_=document.getElementsByTagName("h1")[0];
		if (existeix(title_)){
			document.title=title_.innerHTML.replace("Viendo enlaces de: ","");
		}
		//no redir
		var online_=document.getElementsByTagName("h1")[2];
		if (existeix(online_)){
			if (online_.innerHTML.indexOf("Online")>-1){
				online_.style.marginTop="-50px";
			}
		}
		var title2_=document.getElementsByTagName("h1")[1];
		if (existeix(title2_)){
			if (title2_.innerHTML.indexOf("visita")>-1){
				deleteMe(title2_);
			}
		}
		
	}
}//end edit

function redir(enlace, id, t){//no redir
	window.open(enlace, '_blank');
}
function addLinks2(){
	if (window.location.href.indexOf("peli.php")>-1 || window.location.href.indexOf("serie.php")>-1){
		if (document.getElementsByClassName("linkly_wobbly").length===0){
			var h1_title=document.getElementsByTagName("h1")[0];
			if (existeix(h1_title)){
				var h1_inner=h1_title.innerHTML;//nom (title)
				if (h1_inner.indexOf("<br>")>-1){
					h1_inner=h1_inner.replace("<br>","");
				}
				var h2_go_to=document.getElementsByTagName("h2")[0];
				if (existeix(h2_go_to)){
					addIMDB(h1_inner,h2_go_to,false);
					addFilmaffinity(h1_inner,h2_go_to,false);
				}
			}
		}
	}
}
function reSize(){
	if (window.location.href.indexOf("acc.php")>-1){//user
		var side=document.getElementsByClassName("sidebar")[0];
		if (existeix(side)){
			side.style.width="9.666%";
		}
		var main=document.getElementsByClassName("main")[0];
		if (existeix(main)){
			main.style.width="84.333%";
		}
		var list0=document.getElementsByClassName("listContainer listCovers inline")[0];
		if (existeix(list0)){
			list0.style.minHeight="1000px";
			list0.style.width="48.958%";
			list0.style.float="left";
			list0.style.marginRight="7px";
		}
		var list1=document.getElementsByClassName("listContainer listCovers inline")[1];
		if (existeix(list1)){
			list1.style.minHeight="1000px";
			list1.style.width="48.958%";
			list1.style.marginTop="-20px";
		}
		var subsectionBig=document.getElementsByClassName("subsection subsectionBig")[0];
		if (existeix(subsectionBig)){
			subsectionBig.style.width="101%";
		}
		var subtitle=document.getElementsByClassName("inline-subtitle")[1];
		if (existeix(subtitle)){
			subtitle.style.marginTop="-49px";
			subtitle.style.float="left";
		}
		var subtitle2=document.getElementsByClassName("inline-subtitle")[2];
		if (existeix(subtitle2)){
			subtitle2.style.marginTop="15px";
			subtitle2.style.borderTop="1px solid #999";
		}
		var hr=document.getElementsByTagName("hr")[0];
		if (existeix(hr)){
			deleteMe(hr);
		}
	}
}
function addLinks(link_name,child_peli){
	var a_link=document.createElement("a");
	a_link.innerHTML="🔗";
	a_link.setAttribute('href',link_name);
	a_link.setAttribute('target','_blank');
	a_link.style.right="138px";
	a_link.style.borderRadius="7px";
	a_link.style.fontSize="smaller";
	a_link.style.textDecoration="none";
	a_link.style.cursor="pointer";
	a_link.style.border="1px solid #ccc";
	a_link.style.color="#000";
	a_link.style.background="#fff";
	a_link.style.display="inline-block";
	a_link.style.padding="4px 0px 2px 2px";
	a_link.style.width="18px";
	a_link.style.top="18px";
	a_link.style.position="absolute";
	a_link.style.zIndex="1";
	child_peli.appendChild(a_link);
}
function addPirate(nom,child_peli){
	var a_Pirate=document.createElement("a");
	var img_P=document.createElement("img");
	img_P.src="https://rawgit.com/deli0s/js/master/tpb.png";
	img_P.style.width="19px";
	img_P.style.textDecoration="none";
	a_Pirate.style.position="absolute";
	a_Pirate.style.textDecoration="none";
	a_Pirate.style.padding="0";
	a_Pirate.style.zIndex="1";
	a_Pirate.style.top="90px";
	a_Pirate.style.display="inline-block";
	a_Pirate.style.right="140px";
	a_Pirate.setAttribute('target','_blank');
	a_Pirate.appendChild(img_P);
	a_Pirate.style.cursor="pointer";
	a_Pirate.setAttribute('href',thepiratebay+nom.replace(/-/g,"%20"));
	child_peli.appendChild(a_Pirate);
}
function addFilmaffinity(nom,child_peli,absolute){
	var a_FA=document.createElement("a");
	var img_FA=document.createElement("img");
	img_FA.src="http://www.filmaffinity.com/favicon.png";
	img_FA.style.textDecoration="none";
	if (absolute){
		a_FA.style.position="absolute";
		img_FA.style.width="19px";
	}else{
		a_FA.style.marginLeft="18px";
		img_FA.style.width="24px";
	}
	a_FA.style.textDecoration="none";
	a_FA.style.padding="0";
	a_FA.style.zIndex="1";
	a_FA.style.top="65px";
	a_FA.style.display="inline-block";
	a_FA.style.right="140px";
	a_FA.setAttribute('target','_blank');
	a_FA.appendChild(img_FA);
	a_FA.style.cursor="pointer";
	a_FA.setAttribute('href',"http://www.filmaffinity.com/es/search.php?stext="+nom.replace(/-/g,"+")+"&stype=title");
	child_peli.appendChild(a_FA);
}
function addIMDB(nom,child_peli,absolute){
	var a_IMDB=document.createElement("a");
	var img_IMDB=document.createElement("img");
	img_IMDB.src="http://ia.media-imdb.com/images/G/01/imdb/images/logos/imdb_fb_logo-1730868325._CB522736557_.png";
	img_IMDB.style.textDecoration="none";
	a_IMDB.appendChild(img_IMDB);
	a_IMDB.setAttribute('class','linkly_wobbly');
	a_IMDB.setAttribute('target','_blank');
	if (absolute){
		a_IMDB.style.position="absolute";
		img_IMDB.style.width="19px";
	}else{
		a_IMDB.style.marginLeft="9px";
		img_IMDB.style.width="24px";
	}
	a_IMDB.style.textDecoration="none";
	a_IMDB.style.padding="0";
	a_IMDB.style.zIndex="1";
	a_IMDB.style.top="40px";
	a_IMDB.style.display="inline-block";
	a_IMDB.style.cursor="pointer";
	a_IMDB.style.right="140px";
	a_IMDB.setAttribute('href',"http://www.imdb.com/find?q="+nom.replace(/-/g,"+")+"&s=tt&exact=true&ref_=fn_tt_ex");
	/*var omdb="http://www.omdbapi.com/?t="+nom.replace(/-/g,"+");
	$.get(omdb, function( data ){
		var sub_imdb_id=String(String(data).match(/imdbID.{22}/));
		var imdb_id=sub_imdb_id.substr(8,sub_imdb_id.length-8);
		a_IMDB.setAttribute('href',"http://www.imdb.com/title/"+imdb_id+"/fullcredits?ref_=tt_ql_1");
	});*/
	child_peli.appendChild(a_IMDB);
}
function getLinks(){
	if (window.location.href.indexOf("acc.php")>-1){//user
    	var pelis_=document.getElementsByClassName("listContainer listCovers inline")[1];
		if (existeix(pelis_)){
			var x_pelis=pelis_.getElementsByClassName("ddItemContainer modelContainer");
			var size_peli=x_pelis.length;
			if (document.getElementsByClassName("linkly_wobbly").length<size_peli){
				for (var i_peli=0; i_peli<size_peli; i_peli++){
					var child_peli=x_pelis[i_peli];
					if (existeix(child_peli)){
						var subenlace=child_peli.getElementsByClassName("extended")[0];
						if (existeix(subenlace)){
							var enlace=subenlace.href;
							var old_L=enlace.length;
							var index_L=enlace.indexOf("id=");
							var id_=enlace.substr(index_L+3,old_L-index_L-3);
							var nom=subenlace.getElementsByClassName("title")[0].innerHTML;
							var link_name='/venlaces.php?npl='+id_;
							addLinks(link_name,child_peli);
							reAge(enlace,child_peli);
							goodLinks(link_name,child_peli);
							addIMDB(nom,child_peli,true);
							addFilmaffinity(nom,child_peli,true);
							//addPirate(nom,child_peli);
						}
					}
				}
				reSort();
			}
    	}
		var series_=document.getElementsByClassName("listContainer listCovers inline")[0];
		if (existeix(series_)){
			var x_series=series_.getElementsByClassName("ddItemContainer modelContainer");
			var size_series=x_series.length;
			if (document.getElementsByClassName("linkly_wobbly").length-size_peli<size_series){
				for (var i_serie=0; i_serie<size_series; i_serie++){
					var child_serie=x_series[i_serie];
					if (existeix(child_serie)){
						var subenlace=child_serie.getElementsByClassName("extended")[0];
						if (existeix(subenlace)){
							var nom=subenlace.getElementsByClassName("title")[0].innerHTML;
							addIMDB(nom,child_serie,true);
							addFilmaffinity(nom,child_serie,true);
						}
					}
				}
			}
    	}
    }
}
function reAge(enlace,child_peli){
	var old_L=enlace.length;
	var index_L=enlace.indexOf("id=");
	var id_2=enlace.substr(index_L+3,old_L-index_L-3);
	var kookie_y=id_2+"_year";
	var kookie_year=getCookie(kookie_y);
	if (kookie_year){
		var child_year=child_peli.getElementsByClassName("year")[0];
		if (existeix(child_year)){
			child_year.innerHTML=kookie_year;
		}
	}else{
		$.get(enlace, function(data){
			var year=null;
			var matched=String(data.match(/año(.|\n){0,30}info(.|\n){0,3}[0-9]{4}/i));
			if (existeix(matched)){
				var nan=Number(matched.match(/[0-9]{4}/));
				if (nan===0 || isNaN(nan)){
					year=3000;
				}else{
					year=nan;
				}
			}
			var child_year=child_peli.getElementsByClassName("year")[0];
			if (existeix(child_year)){
				if (existeix(year)){
					child_year.innerHTML=year;
					setCookie(kookie_y,year,2);//2 days
				}
			}
		});
	}
}
function goodLinks(link_name,child_peli){
	var year=null;
	var kookie_y=id_2+"_year";
	var kookie_year=getCookie(kookie_y);
	if (kookie_year){
		year=kookie_year;
	}else{
		var child_year=child_peli.getElementsByClassName("year")[0];
		if (existeix(child_year)){
			year=child_year.innerHTML;
		}
	}
	if (existeix(year)){
		var today = new Date();
		var today_year = today.getFullYear();
		if (year<=today_year){
			var id_2=link_name.replace("/venlaces.php?npl=","");
			var kookie_o=id_2+"_opacity";
			var kookie_opacity=getCookie(kookie_o);
			if (kookie_opacity){
				child_peli.style.opacity=kookie_opacity;
			}else{
				$.get(link_name, function(data){
					if (data.search(/hosts(.|\n){0,100}(Rip|Hd|720|1080)/i)===-1){
						child_peli.style.opacity="0.5";
						setCookie(kookie_o,0.5,7/24);//7 h
					}else{
						child_peli.style.opacity="1";
						setCookie(kookie_o,1,2);//2 days
					}
				});
			}
		}else{
			child_peli.style.opacity="0.5";
		}
		child_peli.className+=" opacity";
	}
	addSpinCircle(document.getElementsByClassName("inline-subtitle")[1]);
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
function deleteClickAds(){
	window.onmouseover=function(e) {
		var h=e.target;
		var trobador=false;
		while (existeix(h) && !trobador && h!==document.body){
			trobador=(existeix(h.href) && linkAds(h.href));
			if (!trobador)
				h=h.parentNode;
		}
		if (trobador){
			deleteMe(h);
		}
	};
}
function creaFolder(f,ttl,sub,f_txt,ls_lk){
    if (document.getElementsByClassName(f).length<=0){
    	var folder=document.createElement("div");
        folder.className=f;
    	folder.style.border="1px solid #ccc";
    	folder.style.backgroundColor="#eee";
    	folder.style.marginTop="5px";
    	folder.style.width="87%";
    	var folder_title=document.createElement("div");
        folder_title.id=ttl;
    	folder_title.style.padding="10px";
    	folder_title.style.cursor="pointer";
        folder.appendChild(folder_title);
    	var i_folder=document.createElement("img");
		i_folder.src="https://rawgit.com/deli0s/js/master/folder.png";
        folder_title.appendChild(i_folder);
        var txt_Folder = document.createTextNode(f_txt);
        folder_title.appendChild(txt_Folder);
        var subFolder=document.createElement("div");
        subFolder.id=sub;
        subFolder.style.display="none";
    	subFolder.style.borderTop="1px dotted #ccc";
    	subFolder.style.paddingTop="10px";
    	subFolder.style.paddingBottom="10px";
    	subFolder.style.paddingRight="10px";
        folder.appendChild(subFolder);
    	if (existeix(ls_lk)){
    	    ls_lk.appendChild(folder);
        	document.getElementById(ttl).onclick=function(){
        	    if (document.getElementById(sub).style.display==="block"){
                	document.getElementById(sub).style.display="none";
                }else{
                	document.getElementById(sub).style.display="block";
                }
        	};//function hide
    	}
    }
}
function deleteScreener(){
    creaFolder("folder","folder_title","folder_scr"," Screener (0)",document.getElementsByTagName("h1")[2]);
    creaFolder("folder_lat","folder_title_lat","folder_lat"," LAT (0)",document.getElementsByTagName("h1")[2]);
    creaFolder("folder_down","folder_title_down","folder_down"," Downloads (0)",document.getElementsByTagName("h1")[3]);
    
	var hh1=document.getElementsByTagName("h1")[1];
	if (existeix(hh1)){
            hh1.style.marginTop="-50px";
	}
	
    var scr_hide=0,scr_non=0;
    var lat=0;
    var down=0;
    
    var x_link2=document.getElementsByClassName("enlaces");
    var size_link2=x_link2.length;
    for (var i_link2=0; i_link2<size_link2; i_link2++){
        var child_link2=x_link2[i_link2];
        if (existeix(child_link2)){
			if (child_link2.getElementsByTagName('span').length===4){//Not downloads (length===5) 
				if (child_link2.getElementsByTagName("img")[1].src.indexOf("arg")>-1){
					if ((scr_hide+scr_non)<size_link2){
						var cln_lat = child_link2.cloneNode(true);
						cln_lat.className="link";
						document.getElementById("folder_lat").appendChild(cln_lat);
						lat++;
					}
					deleteMe(child_link2);
					i_link2--;
				}else{
					var quality=child_link2.getElementsByTagName('span')[0].innerHTML;
					if (quality.indexOf("Screener")===-1){
						scr_non++;
						var report_=child_link2.getElementsByTagName('span')[5];
						if (existeix(report_)){
							var report=Number(report_.innerHTML);
							if (report>=2){
								var pare_link2=child_link2;
								pare_link2.innerHTML="<a style=' color: maroon; font-weight: bolder;' title='"+report+"'> Esborrat </a>";
								i_link2--;
							}
						}
					}else{
						if ((scr_hide+scr_non)<size_link2){
							var cln = child_link2.cloneNode(true);
							cln.className="link";
							document.getElementById("folder_scr").appendChild(cln);
							scr_hide++;
						}
						deleteMe(child_link2);
						i_link2--;
					}
				}
			}else{
				var cln_down = child_link2.cloneNode(true);
				cln_down.className="link";
				document.getElementById("folder_down").appendChild(cln_down);
				down++;
				deleteMe(child_link2);
				i_link2--;
			}
        }
    }
    if (scr_hide>0){//num hide
        document.getElementById("folder_title").innerHTML=document.getElementById("folder_title").innerHTML.replace("(0)","("+scr_hide+")");
    }
    if (lat>0){
        document.getElementById("folder_title_lat").innerHTML=document.getElementById("folder_title_lat").innerHTML.replace("(0)","("+lat+")");
    }
    if (down>0){
        document.getElementById("folder_title_down").innerHTML=document.getElementById("folder_title_down").innerHTML.replace("(0)","("+down+")");
    }
}
function deleteById(nom){
	var childAdv=document.getElementById(nom);
	if (existeix(childAdv)){
		var pareAdv=childAdv.parentNode;
		pareAdv.removeChild(childAdv);
	}
}
function deleteMe(child){
    if (existeix(child)){
        var pareC=child.parentNode;
        pareC.removeChild(child);
    }
}
function deleteByClass(nom,num){
	var childClass=document.getElementsByClassName(nom)[num];
    if (existeix(childClass)){
        var pareClass=childClass.parentNode;
        pareClass.removeChild(childClass);
    }
}
function existeix(nom){
	return (nom!==undefined && nom!==null);
}
/**
 * @author Paul Lewis
 *
 *  Quicksort
 */
function swap(array, indexA, indexB){
	var temp = array.getElementsByClassName("ddItemContainer modelContainer")[indexA].cloneNode(true);
	array.insertBefore(temp,array.getElementsByClassName("ddItemContainer modelContainer")[indexA]);
	if (indexA<indexB){
		array.insertBefore(array.getElementsByClassName("ddItemContainer modelContainer")[indexA+1],array.getElementsByClassName("ddItemContainer modelContainer")[indexB+1]);
		array.insertBefore(array.getElementsByClassName("ddItemContainer modelContainer")[indexB+1],temp);
	}else if (indexA>indexB){
		array.insertBefore(array.getElementsByClassName("ddItemContainer modelContainer")[indexA+1],array.getElementsByClassName("ddItemContainer modelContainer")[indexB]);
		array.insertBefore(array.getElementsByClassName("ddItemContainer modelContainer")[indexB+1],temp);
	}
	deleteMe(temp);
}
function partition(array, pivot, left, right){
	var storeIndex = left,
			pivotYear = array.getElementsByClassName("ddItemContainer modelContainer")[pivot].getElementsByClassName("year")[0].innerHTML;
	swap(array, pivot, right);
	for (var v = left; v < right; v++){
		var year=array.getElementsByClassName("ddItemContainer modelContainer")[v].getElementsByClassName("year")[0].innerHTML;
		if (year < pivotYear){
			swap(array, v, storeIndex);
			storeIndex++;
		}
	}
	swap(array, right, storeIndex);
	return storeIndex;
}
function sort_year(array, left, right){
	var pivot = null,newPivot = null;
	if (typeof left !== 'number'){
		left = 0;
	}
	if (typeof right !== 'number'){
		right = array.length - 1;
	}
	if (left < right){
		pivot		= left + Math.ceil((right - left) * 0.5);
		newPivot	= partition(array, pivot, left, right);
		sort_year(array, left, newPivot - 1);
		sort_year(array, newPivot + 1, right);
	}
}
function reSort(){
	var pelis_=document.getElementsByClassName("listContainer listCovers inline")[1];
	if (existeix(pelis_)){
		var x_pelis=pelis_.getElementsByClassName("ddItemContainer modelContainer");
		if (existeix(x_pelis)){
			var size_peli=x_pelis.length;
			if (document.getElementsByClassName("opacity").length===size_peli){
				var i_opacity=0;
				for (var i_peli=0; i_peli<size_peli; i_peli++){
					var child_peli=x_pelis[i_peli];
					if (existeix(child_peli)){
						if (child_peli.style.opacity==1){
							swap(pelis_,i_opacity,i_peli);
							i_opacity++;
						}
					}
				}
				sort_year(pelis_,0,i_opacity-1);
				setTimeout(function(){ sort_year(pelis_,i_opacity,size_peli-1); }, 500);
				setTimeout(function(){ deleteById("loding_circle"); }, 1000);
			}
		}
	}
}
function addSpinCircle(child){
	if (existeix(child)){
		if (!existeix(document.getElementById("loding_circle"))){
			var c=document.createElement("canvas");
			c.innerHTML="Your browser does not support the HTML5 canvas tag.";
			c.setAttribute('id','loding_circle');
			c.width="50";
			c.height="50";
			c.style.animation="spin 1.5s linear infinite";
			c.style.position="absolute";
			c.style.zIndex="99";
			c.style.marginLeft="200px";
			var ctx = c.getContext("2d");
			ctx.beginPath();
			ctx.arc(c.width / 2, c.height / 2, 20, 0, 1.25 * Math.PI);
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#0078d7';
			ctx.stroke();
			child.appendChild(c);
		}
	}
}
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	}
	return "";
}
$( document ).ajaxComplete(function( event, request, settings ){
	reSort();
});
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
