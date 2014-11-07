	var Rectangle=function(options){
		var self = this;
		this.xSide = options.xSide || 80;
		this.ySide = options.ySide || 80;
		this.x = options.x || 500;
		this.y = options.y || 500;
		this.fillStyle = options.fillStyle || '#f39c12';

		this.render = function(ctx){
			ctx.beginPath();
			ctx.fillStyle = self.fillStyle;
			ctx.fillRect(self.x, self.y, self.xSide, self.ySide);
			ctx.fill();
		}
	}

	var Circle=function(options){
		var self = this;
		this.radius = options.radius || 0;
		this.x = options.x || 500;
		this.y = options.y || 500;
		this.fillStyle = options.fillStyle || '#c0392b';

		this.render=function(ctx){
			ctx.beginPath();
			ctx.arc(self.x, self.y, self.radius, 0, Math.PI * 2);
			ctx.lineWidth = 5;
			ctx.fillStyle = self.fillStyle;
			ctx.fill();
		}

	}

	var Texts=function(options){
		var self = this;
		this.letters = options.letters || 'hi!';
		this.fillStyle = options.fillStyle || '#3498db',
		this.font = options.font || '30px Helvatica'; 
		this.x = options.x || 500;
		this.y = options.y || 500;

		this.render = function(ctx){
			ctx.beginPath();
			ctx.font = self.font;
			ctx.fillText(self.letters, self.x, self.y);
			ctx.fill();
		}
	} 

	var IMG=function(options){
		var self = this;
		var img=document.getElementById("adcade");
		img.width = 408;
		img.height = 68;
		this.x = options.x;
		this.y = options.y;

		console.log(this.x);
		console.log(this.y);
		console.log(img);

		this.render = function(ctx){
			ctx.drawImage(img, self.x, self.y);
		}

	}



