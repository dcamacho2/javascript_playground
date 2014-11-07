var init = function(){	

	// Canvas
	var canvas = document.getElementById("c");
	var ctx = canvas.getContext("2d");
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;




	// Creates 5 circles in random places
	for (var i = 0; i < 5; i++){
		var xPos = Math.floor(1 + Math.random() * canvas.width);
		var yPos = Math.floor(1 + Math.random() * canvas.height);
		var circle = new Circle({
			radius: 50,
			fillStyle: '#e67e22',
			lineWidth: 4,
			x: xPos,
			y: yPos,

		});
		circle.render(ctx);
	}

	for (var j = 0; j < 10; j++){
		var xPos = Math.floor(1 + Math.random() * canvas.width);
		var yPos = Math.floor(1 + Math.random() * canvas.height);
		var rectangle = new Rectangle ({
			xSide: 100,
			ySide: 100,
			x: xPos,
			y: yPos,
			fillStyle: '#d35400',

		});
		rectangle.render(ctx);
	}

	for (var k  = 0; k < 3; k++){
		var xPos = Math.floor(1 + Math.random() * canvas.width);
		var yPos = Math.floor(1 + Math.random() * canvas.height);
		var texts = new Texts({
			letters: 'Dario',
			fillStyle: '#3498db',
			fonts: '100 HelveticaNeue-Light',
			x: xPos,
			y: yPos,

		});
		texts.render(ctx);
	}

	// var img = new IMG({
	// 	x: (Math.floor(1 + Math.random() * canvas.width)),
	// 	y: (Math.floor(1 + Math.random() * canvas.height)),
	// });
	var img = new IMG({
		x: 0,
		y: 0,
	});
	img.render(ctx);
}

window.onload = init;