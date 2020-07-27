function play(e) {
	if (e.keyCode == 65) {
		const key = document.getElementsByClassName("key");
		key[0].classList.add("playing");
	} else {
		return;
	}
	const key = document.getElementsByClassName("key");
	key[0].addEventListener("transitionend", removeTransition);
}

function removeTransition(evt) {
	//console.log(evt);
	if (evt.propertyName !== "transform") {
		return;
	}
	// console.log(this);
	this.classList.remove("playing");
}

window.addEventListener("keydown", play);
