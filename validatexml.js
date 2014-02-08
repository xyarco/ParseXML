function validateXML(xmlDoc){
	if(window.ActiveXObject){
		if(xmlDoc.parseError.errorCode != 0){
			return false;
		}
	}else if(document.implementation.createDocument){
		if(xmlDoc.getElementByTagName("parsererror").length > 0){
			return false;
		}
	}else{
		alert("Your browser can't handle XML file.")
	}
	return true;
}