"use strict";

var slides = [];
var play = true;
var current_slide = -1;

var timeouts = [];

window.onload = load_slideshow();

function load_slideshow () {
	var xhr = new XMLHttpRequest();
	var resp;
	xhr.open("GET", "slides.json");
	xhr.onload = function () {
		current_slide = -1;
		resp = this.responseText;
		slides = JSON.parse(resp).slides;
	};
	xhr.send();
}

function play_slideshow () {
	play = true;
	jump_to_slide(0);
}

function update_timeouts () {
	let i;
	for(i in timeouts) {
		clearTimeout(timeouts[i]);
		timeouts[i] = undefined;
	}
	if(play) {
		for(i=current_slide+1;i<slides.length;i++)
			timeouts[i] = setTimeout(next_slide, 1000*(slides[i].time-slides[current_slide].time));
	}
}

function set_status_slideshow(new_play) {
	play = new_play;
	update_timeouts();
}

function toggle_slideshow () {
	set_status_slideshow(!play);
}

function jump_to_slide(n) {
	if(n >= 0 && n < slides.length) {
		current_slide = n;
	}
	update_timeouts();
	display_slide();
	
}

function next_slide () {
	jump_to_slide(current_slide+1);
}

function previous_slide () {
	jump_to_slide(current_slide-1);
}

function display_slide () {

	let slide = slides[current_slide];

	let main = document.getElementById("MAIN");
	main.innerHTML =  "<iframe src=\"" + slide.url + "\"></iframe>";
	//main.innerHTML =  slide.url;
}

function previous_slideshow () {
	play = false;
	previous_slide();
}

function next_slideshow () {
	play = false;
	next_slide();
}
