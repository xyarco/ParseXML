function generateHTML(xmlDoc){
	ELEMENT_NODE = 1;
	root = xmlDoc.DocumentElement;
	html_text = "<html><head><title>XML Parse Result</title></head><body>";
	html_text += "<table border='2'>";
	books = xmlDoc.getElementsByTagName("book");
	bookNodeList = books[0].childNodes;
	html_text += "<tbody>";
	html_text += "<tr>";

	for(i = 0; i < bookNodeList.length; i++){
		if(bookNodeList[i].nodeType == ELEMENT_NODE){
			header = bookNodeList[i].nodeName;
			html_text += "<th>" + header + "</th>";
		}
	}

	html_text += "</tr>";

	for(i = 0; i < books.length; i++){
		bookNodeList = books[i].childNodes;
		html_text += "<tr>";
		for(j = 0; j < bookNodeList.length; j++){
			if(bookNodeList[j].nodeType == ELEMENT_NODE){

				if(bookNodeList[j].nodeName == "image"){
					html_text += "<td><img src='img/" 
						+ bookNodeList[j].firstChild.nodeValue
						+ "'></td>";
				}else{
					html_text += "<td>" + bookNodeList[j].firstChild.nodeValue;
				}
			}
		}
		html_text += "</tr>";
	}

	html_text += "</tbody></table></body></html>";

	return html_text;
}