
$(document).ready(function() {
	$(".left_display").css('display', 'none');
	var display = $(".display");
	var leftDisplay = $(".left_display");
	var boxOneA = $(".box_one>a");
	var boxTwoA = $(".box_two>a");
	boxOneA.click(function() {
		// 背景蓝色切换
		$(this).toggleClass('boxOneHover');
		if (boxTwoA.hasClass('boxTwoHover'))
			boxTwoA.removeClass('boxTwoHover');
		// 判断下方div是否隐藏
		if (!leftDisplay.is(':hidden')) {
			leftDisplay.hide();
			$(".hide_details").toggleClass('hideTempAnother');
		}
		display.animate({
			width: 'toggle'
		});
	});
	boxTwoA.click(function() {
		$(this).toggleClass('boxTwoHover');
		if (boxOneA.hasClass('boxOneHover'))
			boxOneA.removeClass('boxOneHover');
		if (!display.is(':hidden'))
			display.hide();

		$(".hide_details").toggleClass('hideTempAnother');
		// $(".road_display>div:eq(1)").toggleClass('hideTemp');
		leftDisplay.animate({
			width: 'toggle'
		});
	});

	var leftLi = $(".left_display ul li");
	var rigthDiv = $(".hide_details");
	var len = leftLi.length;

	for (var i = 0; i < len; i++) {
		leftLi[i].index = i;
		leftLi[i].onclick = function() {
			for (var n = 0; n < len; n++) {
				leftLi[n].className = "";
				rigthDiv[n].className = "hide_details" + " " + "hideTemp";
			};
			this.className = "showTemp";
			rigthDiv[this.index].className = " " + "hide_details";
		}
	};
	$(".subtitle_1").click(function() {
		$(this).next().stop(true, false).slideToggle();
	});
	$(".subtitle_1+ul>li>img").click(function(e) {
		$(".dis").stop(true, false).slideToggle();
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	})
	document.onclick = function() {
		$(".dis").stop(true, false).slideUp();
	}
	$(".dis").click(function(e) {
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true; 
		}
	})

	$(".box_three").click(function() {
		$(".search_line").stop(true, false).animate({width:'toggle'});
		$(".line_button>div>p").next().hide();
		$(".line_button>div>p,.car_button>div>p").click(function(e) {
		$(this).next().stop(true, false).slideToggle();
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	})
	document.onclick = function() {
		$(".line_button>div>p,.car_button>div>p").next().stop(true, false).slideUp();
	}
	$(".line_button>div>p,.car_button>div>p").next().click(function(e) {
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true; 
		}
	})
	});
	$(".search_line>ul>li").click(function() {
		$(".search_car").stop(true, false).animate({width:'toggle'});
		$(".car_button>div>p").next().css("display","none");
		$(".line_button>div>p,.car_button>div>p").click(function(e) {
		$(this).next().stop(true, false).slideToggle();
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	})
	document.onclick = function() {
		$(".line_button>div>p,.car_button>div>p").next().stop(true, false).slideUp();
	}
	$(".line_button>div>p,.car_button>div>p").next().click(function(e) {
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true; 
		}
	})
	});

});