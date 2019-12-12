
function printChecked(){
var formElems = document.getElementById("checkbox_form");
for(var i = 0; i<formElems.elements.size(); i++){
	var elem = formElems.elements[i]
	if(elem.checked){
		document.getElementById("Interests_form").innerHTML+= elem
		debug("yee")
	}
}
}

