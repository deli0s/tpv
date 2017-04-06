function log(_array){
	var u_p=_array.split(',');
	var size=u_p.length;
	var i=0;
	while (i<size && existeix(document.getElementsByTagName("input")[0].value) && existeix(document.getElementsByTagName("input")[1].value)){
		var _up=u_p[i].split(':');
		var u=_up[0];
		var p=_up[1];
		document.getElementsByTagName("input")[0].value=u;
		document.getElementsByTagName("input")[1].value=p;
		document.getElementsByTagName("form")[0].submit();
		i++;
	}
}
function existeix(nom){
	return (nom!==undefined && nom!==null);
}
