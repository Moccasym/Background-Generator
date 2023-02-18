var _ = require('lodash');

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".randomnator");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomColor(){
	return("#" + Math.floor(Math.random()*16777215).toString(16));
}

function changeColors(){
	color1.value = randomColor();
	console.log(color1.value);
	color2.value = randomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

document.addEventListener("DOMContentLoaded", setGradient);

button.addEventListener("click", changeColors);