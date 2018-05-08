/*
* Soruto Cool Web View
* Ver 1
* This software is licensed under the MIT License.
*/
var cwv = new Object;
cwv.movePagebyHash = function(){
	var hashurl = location.hash.split("#")[1];
	var xhr = new XMLHttpRequest();
  xhr.open('GET', hashurl, true);
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      var page = xhr.responseText;
	  cwv.show(page);
    }
    if (xhr.readyState === 4 && xhr.status === 0){
      var page = xhr.responseText;
	  cwv.show(page);
    }
  };
  xhr.send(null);
};

cwv.show = function(page){
	var newdiv = document.createElement("div");
	newdiv.className = "newpage viewer";
	newdiv.innerHTML = page;
	document.body.appendChild(newdiv);
	if(document.getElementsByClassName("showpage")[0]){
		document.body.removeChild(document.getElementsByClassName("showpage")[0]); 
	}
	document.getElementsByClassName("newpage")[0].className = "showpage viewer";
}

window.onhashchange = function(){cwv.movePagebyHash();};