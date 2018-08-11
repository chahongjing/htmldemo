function Carousel(opt) {
	var me = this;
	me.liButton =  $(opt.liButton);
	me.leftButton = $(opt.leftButton);
	me.rightButton = $(opt.rightButton);
	me.container = $(opt.container);
	me.length = me.liButton.length;
	me.currentSelector = opt.currentClass;
	me.interval = opt ? opt.interval || 3000 : 3000;
	me.callBack = opt.callBack;
	
	if (typeof this.autoPlay != "function") {
		Carousel.prototype.autoPlay = function() {
			me.leftButton.click(me.clickLeft);
			me.rightButton.click(me.clickRight);
			me.liButton.click(function () { me.clickX($(this).index()); });
			sh = setInterval(me.clickRight, me.interval);
			me.container.hover(function() {
				clearInterval(sh);
			}, function() {
				sh = setInterval(me.clickRight, me.interval);
			});
		}
	}
	
	if (typeof this.clickLeft != "function") {
		Carousel.prototype.clickLeft = function() {
			var index = me.liButton.filter('.' + me.currentSelector).index();
			index = (index - 1 + me.length) % me.length;
			me.clickX(index);
		}
	}
	if (typeof this.clickRight != "function") {
		Carousel.prototype.clickRight = function() {
			var index = me.liButton.filter('.' + me.currentSelector).index();
			index = (index + 1) % me.length;
			me.clickX(index);
		}
	}
	if (typeof this.clickX != "function") {
		Carousel.prototype.clickX = function(index) {
			var currentIndex = me.liButton.filter('.' + me.currentSelector).index();
			if(currentIndex == index){
				return;
			}
			// 做业务操作
			me.callBack(index);
			me.liButton.eq(index).addClass(me.currentSelector).siblings().removeClass(me.currentSelector);
		}
	}
}