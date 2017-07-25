function edit(){
	if (window.location.href.indexOf("aporte") > -1){
		var visitar=document.getElementsByClassName("visit-buttons")[0];
		if (existeix(visitar)){
			var visitar_a=visitar.getElementsByTagName("a")[0];
			if (existeix(visitar_a)){
				window.location.replace(visitar_a.href);
			}
		}
	}
	var ul_title=document.getElementsByClassName("navbar-nav")[0];
	if (existeix(ul_title)){
		var li_title=ul_title.getElementsByTagName("li")[3];
		if (existeix(li_title)){
			var a_title=li_title.getElementsByTagName("a")[0];
			if (existeix(a_title)){
				a_title.href="/pelis/pending";
			}
		}
	}
	buttonDown();
}
function buttonDown(){
	if (!existeix(document.getElementById("down"))){
        var go_down=document.createElement("a");
        go_down.id="down";
        go_down.style.right="5px";
        go_down.style.top="5px";
        go_down.style.width="30px";
        go_down.style.height="30px";
        go_down.style.cursor="pointer";
        go_down.style.transform="rotate(180deg)";
        go_down.style.border="1px solid #ddd";
        go_down.style.borderRadius="2px";
        go_down.style.position="fixed";
        go_down.style.background="#fff url('https://raw.githubusercontent.com/deli0s/js/master/arrow.png') -1px -1px";
        go_down.style.zIndex="999";
        go_down.onclick=function(){
			var x_0=document.getElementsByClassName("fa fa-eye-slash seen");
			var trobat=false;
			var size_0=x_0.length-1;
			while(size_0>0 && !trobat){
				trobat=(x_0[size_0].currentStyle ? x_0[size_0].currentStyle.display : getComputedStyle(x_0[size_0], null).display)==="inline-block";
				size_0--;
			}
			var offst=0;
			var elem=x_0[size_0];
			while(elem!==null && elem!==undefined && !isNaN( elem.offsetTop ) ){
			  offst +=elem.offsetTop;
			  elem=elem.offsetParent;
			}
			if (offst<=0) offst=947;
			$("html,body").animate({scrollTop: offst},
				"slow");
		};
		var topbar=document.getElementById("topbar");
		if (existeix(topbar)){
			topbar.appendChild(go_down);
		}
    }
}
function existeix(nom){
	return (nom!==undefined && nom!==null);
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
function setCookie(cname, cvalue, exdays){
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i=0; i<ca.length; i++){
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	}
	return "";
}
edit();
function reload(){
	try {
        edit();
    }catch(err) {
        console.log(err);
    }
}
document.body.onclick=reload;
document.body.addEventListener("wheel",reload);
