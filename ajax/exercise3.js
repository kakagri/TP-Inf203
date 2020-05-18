function play_slideshow () {
	var ourRequest = new XMLHttpRequest();
	var texteReponse;
	ourRequest.open("GET", "slides.json");
	ourRequest.onload = function () {
		texteReponse = this.responseText;
		var json = JSON.parse(texteReponse);
		var slide;
		for(slide of json.slides) {
			setTimeout(display_slide, 1000*slide.time, slide.url);
		}}
	ourRequest.send();
}
function display_slide (url) {
	var main = document.getElementById("MAIN");
	main.innerHTML = "";
	main.innerHTML =  "<iframe src=\"" + url + "\"></iframe>"
}
