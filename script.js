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