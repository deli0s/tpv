function log(_array){
	var u_p=_array.split(',');
	var size=u_p.length;
	var i=0;
	var email=document.getElementsByTagName("input")[0].value;
	var pass=document.getElementsByTagName("input")[1].value;
	while (i<size && existeix(email) && existeix(pass)){
		var _up=u_p[i].split(':');
		var u=_up[0];
		var p=_up[1];
		email=u;
		pass=p;
		document.getElementsByTagName("form")[0].submit();
		i++;
	}
}
function existeix(nom){
	return (nom!==undefined && nom!==null);
}
