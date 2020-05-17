"use strict";

function play_slideshow () {
	var xhr = new XMLHttpRequest();
	var resp;
	xhr.open("GET", "slides.json");
	xhr.onload = function () {
		resp = this.responseText;
		let json = JSON.parse(resp);

		let slide;
		for(slide of json.slides) {
			setTimeout(display_slide, 1000*slide.time, slide.url);
		}
	};
	xhr.send();
}

function display_slide (url) {

	let main = document.getElementById("MAIN");
	main.innerHTML = "";

	main.innerHTML =  "<iframe src=\"" + url + "\"></iframe>"
}
