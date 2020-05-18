function loadDoc () {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open("GET", "text.txt");
	ourRequest.onload = function() {
		document.getElementById("textarea").innerHTML = this.responseText;
	}
	ourRequest.send();
}
function loadDoc2 () {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open("GET", "text.txt");
	ourRequest.onload = function() {
		let textarea = document.getElementById("textarea2");
		let par = this.responseText.split("<br/>");
		let couleurs = ["red", "green", "blue", "black"];
		for (var i=0;i<par.length;i++) {
			var p = document.createElement("p");
			p.innerHTML = par[i%4];
			p.style.color = couleurs[i%4];
			textarea.appendChild(p);
		}
	}
	ourRequest.send();
}
