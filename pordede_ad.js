function linkAds(e){
	return (e.indexOf("wabxsybclllz")>-1 || e.indexOf("woombaa")>-1 || e.indexOf("jettags")>-1 || e.indexOf("traffic")>-1 || e.indexOf("getmyads")>-1 || e.indexOf("mediawhirl")>-1 || e.indexOf("liveadexchanger")>-1 || e.indexOf("doubleclick")>-1);
}

function edit(){
	deleteClickAds();
    document.body.style.margin="0px";
    deleteById("notifid");
    deleteById("advblock");
    deleteById("play_content");
    deleteById("lean_overlay");
    deleteById("trigger_id");
    //
    var x=document.getElementsByTagName("script");
    var size=x.length;
    for (var i=0; i <size; i++){
        var child2=x[i];
		if (existeix(child2)){
			if (child2.src.indexOf("liveadexchanger") || child2.src.indexOf("doubleclick") || child2.src.indexOf("ads")){
				var pare2=child2.parentNode;
				pare2.removeChild(child2);
				i--;
			}
		}
    }
    //
	var logIn_page_=document.getElementById("login-form");
	if (!existeix(logIn_page_)){
		var x2=document.getElementsByTagName("iframe");
		var size2=x2.length;
		for (var i2=0; i2 <size2; i2++){
			var child2_2=x2[x2.length-1];
			var pare2_2=child2_2.parentNode;
			pare2_2.removeChild(child2_2);
		}
    }
    //
    if ((window.location.href.indexOf("pordede.com/peli/") > -1) || (window.location.href.indexOf("pordede.com/serie/") > -1)){
        deleteByClass("ad boxed",0);
    	//
    	var llink=document.getElementsByClassName("info moreinfoLink")[0];
		if (existeix(llink)){
			var link_cast0=llink.getElementsByTagName("a");
			if (existeix(link_cast0)){
				var link_cast=link_cast0[0].href;
				if (!link_cast.endsWith("tt_ql_1")){
					document.getElementsByClassName("info moreinfoLink")[0].getElementsByTagName("a")[0].href=link_cast+"fullcredits?ref_=tt_ql_1";
					var enlace=window.location.href;
					if (existeix(enlace)){
						var nom_serie=enlace.replace("serie","peli");
						var nom=nom_serie.replace("http://www.pordede.com/peli/","");
						addF2(nom,llink);
					}
				}
			}
		}
        //
        document.getElementsByClassName("main")[0].onclick=function(){
            var checkFlag=function(){
                if (!document.getElementsByClassName("ad boxed")[0]){
                   window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
                }else{
                    deleteByClass("ad boxed",0);
                }
            };
            checkFlag();
        };
    }//end if peli/serie
    //
    for (var i_menu=0;i_menu<2;i_menu++){
    	deleteByClass("defaultLink listasLink onlyLogin",1);
    }
    if ((window.location.href.endsWith(".com/")) || (window.location.href.endsWith("index")) || (window.location.href.indexOf("index.php") > -1)){
        var today=document.getElementsByClassName("fc-today")[0];
        if (existeix(today)){
            today.style.color="beige";
            today.style.background="#4CAF50";
        }
    }
}//end edit
function addF2(nom,llink){
    var a_FA=document.createElement("a");
	a_FA.style.position="relative";
	a_FA.style.left="-128px";
	a_FA.style.top="24px";
	a_FA.textContent="FilmAffinity";
	a_FA.setAttribute('target','_blank');
	a_FA.style.cursor="pointer";
	a_FA.setAttribute('href',"http://www.filmaffinity.com/es/search.php?stext="+nom.replace(/-/g,"+")+"&stype=title");
	llink.appendChild(a_FA);
	var img_FA=document.createElement("img");
	img_FA.src="http://www.filmaffinity.com/favicon.png";
	img_FA.style.width="23px";
	a_FA.insertBefore(img_FA,a_FA.childNodes[0]);
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
function existeix(nom){
	return (nom!==undefined && nom!==null);
}
function deleteMe(child){
    if (existeix(child)){
        var pareC=child.parentNode;
        pareC.removeChild(child);
    }
}
function deleteById(nom){
	var childAdv=document.getElementById(nom);
	if (childAdv!==null && childAdv!==undefined){
	var pareAdv=childAdv.parentNode;
	pareAdv.removeChild(childAdv);
	}
}
function deleteByClass(nom,num){
	var childClass=document.getElementsByClassName(nom)[num];
    if (childClass!==null && childClass!==undefined){
        var pareClass=childClass.parentNode;
        pareClass.removeChild(childClass);
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

jQuery(window).ready(function() {
	if (getCookie('adb')) {
		setCookie('adb', false, 7);
	}
});
edit();
function reload0(){edit();window.setTimeout(edit,1000);window.setTimeout(edit,2500);}
document.body.onclick=reload0;
document.body.addEventListener("wheel",reload0);
