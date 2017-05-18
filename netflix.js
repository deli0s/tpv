function log(up){
	var _up=up.split(':');
	var u=_up[0];
	var p=_up[1];
	document.getElementsByTagName("input")[0].value=u;
	document.getElementsByTagName("input")[1].value=p;
	document.getElementsByTagName("form")[0].submit();
}
function log_in(){
	kookie=getCookie("kookie");
	if (notNull(kookie)){
		var u_p=kookie.split(',');
		if (existeix(document.getElementsByTagName("input")[0].value) && existeix(document.getElementsByTagName("input")[1].value)){
			list2=list.replace(u_p[0]+",","");
			setCookie("kookie",list2,1/(24*64));//1min
			log(u_p[0]);
		}
	}
}
function log2(list){
	setCookie("kookie",list,1/(24*64));//1min
	log_in();
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
function notNull(nom){
	if (!existeix(nom)) return false;
	return (nom!=="");
}
function existeix(nom){
	return (nom!==undefined && nom!==null);
}
log_in();
