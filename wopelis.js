var thepiratebay="https://thepiratebay.cr/search/";
function linkAds(e){
	return (e.indexOf("wabxsybclllz")>-1 || e.indexOf("woombaa")>-1 || e.indexOf("jettags")>-1 || e.indexOf("traffic")>-1 || e.indexOf("getmyads")>-1 || e.indexOf("mediawhirl")>-1 || e.indexOf("liveadexchanger")>-1|| e.indexOf("doubleclick")>-1 || e.indexOf("unique2lazy.com")>-1);
}

function edit(){
	//
	deleteClickAds();
	deleteScriptAds();
	getLinks();
	//CSS
	var sheet = window.document.styleSheets[0];
	sheet.insertRule('button:hover,input[type=submit]:hover,.dropdownContainer.blue:hover{background:#0a5bc2;}', sheet.cssRules.length);
	sheet.insertRule('@media (min-width: 580px) {div.link{ margin:0 5% 0 5%;}div.link{background-color:#e8e8e8;clear:both;width:80%;padding:10px;float:left;border:solid 1px #dcdcdc;max-width:1050px;min-width:365px}', sheet.cssRules.length);
	//
	if (window.location.href.indexOf("venlaces") > -1){
		deleteScreener();
		deleteUrlTester();
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

//no redir
function redir(enlace, id, t){
	window.open(enlace, '_blank');
}
function addLinks(link_name,child_peli){
	var a_link=document.createElement("a");
	a_link.innerHTML="🔗";
	a_link.setAttribute('href',link_name);
	a_link.setAttribute('class','linkly_wobbly');
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
function addFilmaffinity(nom,child_peli){
	var a_FA=document.createElement("a");
	var img_FA=document.createElement("img");
	img_FA.src="http://www.filmaffinity.com/favicon.png";
	img_FA.style.width="19px";
	img_FA.style.textDecoration="none";
	a_FA.style.position="absolute";
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
function addIMDB(nom,child_peli){
	var a_IMDB=document.createElement("a");
	var img_IMDB=document.createElement("img");
	img_IMDB.src="http://ia.media-imdb.com/images/G/01/imdb/images/logos/imdb_fb_logo-1730868325._CB522736557_.png";
	img_IMDB.style.width="19px";
	img_IMDB.style.textDecoration="none";
	a_IMDB.appendChild(img_IMDB);
	a_IMDB.setAttribute('target','_blank');
	a_IMDB.style.position="absolute";
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
			var x_peli=pelis_.getElementsByClassName("ddItemContainer modelContainer");
			var size_peli=x_peli.length;
			if (document.getElementsByClassName("linkly_wobbly").length<size_peli){
				for (var i_peli=0; i_peli<size_peli; i_peli++){
					var child_peli=x_peli[i_peli];
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
							addIMDB(nom,child_peli);
							//addIMDB(enlace,child_peli);
							addFilmaffinity(nom,child_peli);
							//addPirate(nom,child_peli);
							goodLinks(link_name,child_peli);
						}
					}
				}
			}
    	}
    }
}
function goodLinks(link_name,child_peli){
$.get(link_name, function(data){
//start html link
/*
var result=data.match(/video.{0,200}(Rip|Hd).{0,200}headphones/i);
if (/(youtube|LAT)/.test(result)){
*/
if (data.search(/hosts(.|\n){0,100}(Rip|Hd|720|1080)/i)===-1){
	child_peli.style.opacity="0.5";
}/*
if (data.search(/video.{0,200}(Rip|Hd).{0,200}headphones/i)===-1){
	child_peli.style.opacity="0.5";
}*/
//end html link
});}

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
function deleteUrlTester(){
	var urlTester=document.getElementsByTagName("a")[6];
	if (existeix(urlTester)){
		if (urlTester.innerHTML.indexOf("urltester")>-1){
			deleteMe(urlTester.parentNode);
		}
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
