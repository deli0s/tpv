function existeix(nom){
	return (nom!==undefined && nom!==null);
}
function deleteById(nom){
	var childAdv=document.getElementById(nom);
	if (existeix(childAdv)){
		var pareAdv=childAdv.parentNode;
		pareAdv.removeChild(childAdv);
	}
}
function deleteIframe(){
	var x2=document.getElementsByTagName("iframe");
	var size2=x2.length;
	for (var i2=0; i2 <size2; i2++){
		var child2_2=x2[x2.length-1];
		var pare2_2=child2_2.parentNode;
		pare2_2.removeChild(child2_2);
	}
}
if (existeix(document.body)){
	deleteIframe();
	document.body.onclick=deleteIframe;
	document.body.addEventListener("wheel",deleteIframe);
}