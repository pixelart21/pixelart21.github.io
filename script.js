var penColor ='black';

function setPenColor(pen) {
  penColor = pen;
}

function setPixelColour(pixel) {
  pixel.style.backgroundColor = penColor;
}
function clearAll() {
	document.querySelectorAll('.pixel').forEach((pixel) => {
		// What should we do?
		pixel.style.backgroundColor = 'white';
	});
}