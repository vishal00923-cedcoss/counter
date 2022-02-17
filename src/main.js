var val = 0;

document.getElementById("counter").innerText = val;

function subVal() {
	if (val != "0") {
		val -= 1;
	}
	display();
}

function addVal() {
	val += 1;
	display();
}

function display() {
	document.getElementById("counter").innerText = val;
}

// console.log(val);
