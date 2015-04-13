function Starfield(min, max) {

	// Define # of stars
	this.min = min;
	this.max = max;
	this.stars = Math.floor(Math.random() * (max - min) + min );

	// Get starfield dimensions
	this.canvas = document.getElementById("starfield");
	this.canvasHeight = this.canvas.offsetHeight;
	this.canvasWidth = this.canvas.offsetWidth;

	// Create Stars
	for ( var i = 0; i < this.stars ; i++ ) {

		// Choose random star type
		var starTypes = new Array();
		starTypes[0] = "star-size-1";
		starTypes[1] = "star-size-2";
		starTypes[2] = "star-size-3";
		starTypes[3] = "star-size-4";
		var randStarType = Math.floor(Math.random() * 4); // Generate random key 0-4

		// Generate random placement
		var coordinateX = Math.floor(Math.random() * this.canvasWidth);
		var coordinateY = Math.floor(Math.random() * this.canvasHeight);

		// Generate random twinkle
		var animationFrequency = Math.random() * (10 - 2) + 2;
		var animationDelay = Math.floor(Math.random() * 2);

		// Populate Starfield
		this.canvas.innerHTML += '<div style="margin-left:' + coordinateX + 'px; margin-top:' + coordinateY + 'px; -webkit-animation: twinkle ' + animationFrequency  + "s " + animationDelay  + 's infinite; -moz-animation: twinkle ' + animationFrequency  + "s " + animationDelay  + 's infinite; animation: twinkle ' + animationFrequency  + "s " + animationDelay  + 's infinite; " class="' + starTypes[randStarType] + '"></div>' ;
	}
}

// Create the starfield
var starfield = new Starfield(250, 375);
