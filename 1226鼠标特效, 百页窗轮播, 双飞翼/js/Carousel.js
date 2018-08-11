function Carousel(opt) {
	this.liButton =  $(opt.liButton);
	this.leftButton = $(opt.leftButton);
	this.rightButton = $(opt.rightButton);
	this.container = $(opt.container);
	this.length = this.liButton.length;
	this.currentSelector = opt.currentClass;
	this.interval = opt ? opt.interval || 3000 : 3000;
	this.callBack = opt.callBack;
	this.sh = null;
	
	if (typeof this.autoPlay != "function") {
		Carousel.prototype.autoPlay = function() {
			var self = this;
			this.leftButton.click(function(){ self.clickLeft(); });
			this.rightButton.click(function(){ self.clickRight(); });
			this.liButton.click(function () { self.clickX($(this).index()); });
		    this.sh = setInterval(function(){ self.clickRight(); }, this.interval);
			this.container.hover(function() {
				clearInterval(self.sh);
			}, function() {
				self.sh = setInterval(function() { self.clickRight(); }, self.interval);
			});
		}
	}
	
	if (typeof this.clickLeft != "function") {
		Carousel.prototype.clickLeft = function() {
			var index = this.liButton.filter('.' + this.currentSelector).index();
			index = (index - 1 + this.length) % this.length;
			this.clickX(index);
		}
	}
	if (typeof this.clickRight != "function") {
		Carousel.prototype.clickRight = function() {
			var index = this.liButton.filter('.' + this.currentSelector).index();
			index = (index + 1) % this.length;
			this.clickX(index);
		}
	}
	if (typeof this.clickX != "function") {
		Carousel.prototype.clickX = function(index) {
			var currentIndex = this.liButton.filter('.' + this.currentSelector).index();
			if(currentIndex == index){
				return;
			}
			// 做业务操作
			this.callBack(index);
			this.liButton.eq(index).addClass(this.currentSelector).siblings().removeClass(this.currentSelector);
		}
	}
}