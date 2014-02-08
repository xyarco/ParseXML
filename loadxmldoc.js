function loadXMLDoc(url){
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET", url, false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;
	return xmlDoc;
}