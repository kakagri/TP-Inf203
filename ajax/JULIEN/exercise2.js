"use strict";

function send () {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "chat.php?phrase="+document.getElementById("textedit").value);
	xhr.send();
}

function update_chat () {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "chatlog.txt");
	xhr.onload = function() {
		let textarea = document.getElementById("textarea");
		let messages = this.responseText.split("\n");
		messages.reverse();

		textarea.innerHTML = "";
		for (var i=1;i<Math.min(messages.length, 11);i++) {
			var p = document.createElement("p");
			p.innerHTML = messages[i];
			textarea.appendChild(p);
		}
	};
	xhr.send();
	setTimeout(update_chat, 1000);
}

setTimeout(update_chat, 1000);
