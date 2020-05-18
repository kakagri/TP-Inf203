function send () {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open("GET", "chat.php?phrase="+document.getElementById("textedit").value);
	ourRequest.send();
}
function update_chat () {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open("GET", "chatlog.txt");
	ourRequest.onload = function() {
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
	ourRequest.send();
	setTimeout(update_chat, 500);
}

setTimeout(update_chat, 500);
