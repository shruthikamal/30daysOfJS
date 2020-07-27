const inputs = document.querySelectorAll(".controls input");
console.log(inputs);

function handleUpdate() {
	console.log(this.value);
	const suff = "px";
	if (this.name === "base") {
		document.documentElement.style.setProperty(`--${this.name}`, this.value);
	} else {
		document.documentElement.style.setProperty(
			`--${this.name}`,
			this.value + suff
		);
	}
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
//inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
