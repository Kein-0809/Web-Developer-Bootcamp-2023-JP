const randomFunc = () => {
	return Math.floor(Math.random() * 256);
};

const hello = () => {
	console.log("Hello!");
};

const generateColor = () => {
	let red = randomFunc();
	let green = randomFunc();
	let blue = randomFunc();
	let color = "rgb(" + red + "," + green + "," + blue + ")";
	document.body.style.backgroundColor = color;
	h1Element.innerText = "Color: RGB(" + red + ", " + green + ", " + blue + ")";
};

const h1Element = document.querySelector("h1");

const buttonElement = document.querySelector("#button");

buttonElement.addEventListener("click", generateColor);
