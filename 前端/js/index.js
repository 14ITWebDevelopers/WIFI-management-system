$(document).ready(function() {
	// 总览中的图表
	$("#pie-index>ul>li").mouseenter(function(event) {
		$(this).stop(true, false).animate({
			opacity: '1'
		});
	});
	$("#pie-index>ul>li").mouseleave(function() {
		$(this).stop(true, false).animate({
			opacity: '0.7'
		});
	});
	// 图例的显示隐藏
	$(".hide-legend").click(function() {
		$(".right ul").hide();
		$("#pie-index").hide();
	});
	$(".show-legend").click(function() {
		$(".right ul").show();
		$("#pie-index").show();
	});
	//搜索div
	var display = $(".display");
	//路线div
	var leftDisplay = $(".left_display");
	var boxOneA = $(".box_one>a");
	var boxTwoA = $(".box_two>a");
	boxOneA.click(function(e) {
		// 背景蓝色切换
		$(this).toggleClass('boxOneHover');
		if (boxTwoA.hasClass('boxTwoHover'))
			boxTwoA.removeClass('boxTwoHover');
		// 判断下方路线div是否隐藏
		if (!leftDisplay.is(':hidden')) {
			leftDisplay.hide();
			//隐藏右侧div，即车辆
			getStart();
		}
		display.stop(true, false).animate({
			width: 'toggle'
		});
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	});
	boxTwoA.click(function(e) {
		$(this).toggleClass('boxTwoHover');
		if (boxOneA.hasClass('boxOneHover'))
			boxOneA.removeClass('boxOneHover');
		if (!display.is(':hidden'))
			display.hide();
		getStart();
		leftDisplay.stop(true, false).animate({
			width: 'toggle'
		});
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	});
	document.onclick = function() {
		$(leftDisplay).stop(true, false).hide('slow');
		$(display).stop(true, false).hide('slow');
		$(boxTwoA).removeClass('boxTwoHover');
		$(boxOneA).removeClass('boxOneHover');

		// 用户控制
		userStart();
		clearUserControl();
		$(searchLine).hide('slow');
		$(boxThreeA).removeClass('boxThreeHover');

		// 用户控制－远程更新
		$(".dis").slideUp().removeClass('canDrag');
	};
	$(leftDisplay).click(function(e) {
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	});
	$(display).click(function(e) {
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	});

	var leftLi = $(".left_display ul li");
	var len = leftLi.length;

	leftLi.each(function(index, el) {
		$(this).click(function() {
			getStart();
			$(this).addClass('showTemp');
		});
	});

	//使路线与车辆初始化
	function getStart() {
		for (var n = 0; n < len; n++) {
			$(leftLi[n]).removeClass('showTemp');
		};
	};


	// 用户控制（总览）
	var boxThreeA = $(".box_three>a");
	var searchLine = $(".search_line");
	searchLine.css('display', 'none');
	// 线路管理侧边栏
	boxThreeA.click(function(e) {
		userStart();
		clearUserControl();
		$(this).toggleClass('boxThreeHover');
		searchLine.stop(true, false).animate({
			width: 'toggle'
		});
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	});

	var userLine = $(".search_line ul li i.icon-circle-arrow-right");
	var userCar = $(".search_car");
	var userLen = userLine.length;

	userLine.each(function(index, el) {
		$(this).click(function() {
			userStart();
			$(this).parents('li').addClass('showTemp');
			$(userCar[index]).removeClass('hideTemp');
		});
	});

	function userStart() {
		for (var n = 0; n < userLen; n++) {
			$(userLine[n]).parents('li').removeClass('showTemp');
			$(userCar[n]).addClass('hideTemp');
		}
	};

	$(searchLine).click(function(e) {
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	});
	$(userCar).click(function(e) {
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	});
	$(".user_click").click(function(e) {
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	});



	// 线路、车辆编辑添加功能
	$(".user_click li").css('display', 'none');
	var userControl = [$(".line_edit"), $(".line_add"), $(".line_alladd"),
		$(".car_edit"), $(".car_add")
	];

	function clearUserControl() {
		for (var i = 0; i < userControl.length; i++) {
			userControl[i].hide();
		}
	};
	$(".icon-pencil").click(function() {
		clearUserControl();
		$(".line_edit").show();
	});
	$(".line_add_con").click(function() {
		clearUserControl();
		$(".line_add").show();
	});
	$(".line_alladd_con").click(function() {
		clearUserControl();
		$(".line_alladd").show();
	});
	$(".car_edit_con").click(function() {
		clearUserControl();
		$(".car_edit").show();
	});
	$(".car_add_con").click(function() {
		clearUserControl();
		$(".car_add").show();
	});
	$(".user_click li>a:first-child").click(function() {
		$(this).parent('li').hide();
	});

	// 用户控制－－－远程更新 复选框的全选
	$(".checkAll").click(function() {
		$(this).parent().find('li input').prop('checked', true);
	});
	$(".checkNone").click(function() {
		$(this).parent().find('li input').removeAttr('checked');
	});
	// 用户控制－－－远程更新 复选框的全选end

	// 用户控制－－－远程更新 侧边栏
	var userLineFar = $(".search_line_far ul li");
	var userCarFar = $(".search_car_far");
	var userLineLen = userLineFar.length;

	userLineFar.each(function(index, el) {
		$(this).click(function() {
			$(this).addClass('showTemp');
			$(userCarFar[index]).removeClass('hideTemp');
			for (var i = 0; i < userLineLen; i++) {
				if (i == index) continue;
				$(userCarFar[i]).addClass('hideTemp');
				$(userLineFar[i]).removeClass('showTemp');
			}
		});
	});
	// 用户控制－－－远程更新 侧边栏 end

	// 用户控制——————远程更新

	$(".subtitle_1").click(function() {
		$(".dis").hide();
		$(this).next().stop(true, false).slideToggle();

	});
	$(".subtitle_1+ul>li>img,.adv_other_set>li>img").click(function(e) {
		$(".dis").hide().removeClass('canDrag');
		// 弹出框位置设置在当前显示窗口的中央处
		var disPosition = $(window).scrollTop()+ $(window).height()/2 - 180;
		$(this).siblings('div.dis').css('top', disPosition).stop(true, false)
			.slideToggle().addClass('canDrag');
		// 拖曳功能
		drag();
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	});
	$(".dis").click(function(e) {
		var ev = e || window.event;
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	});
	$(".dis>p").click(function() {
		$(this).parent().slideUp();
	});

	// --------------------------
	// 拖曳功能
	// --------------------------
	
	function drag() {
		var oTitle = $(".canDrag .dragPosition")[0];
		// 拖曳
		oTitle.onmousedown = fnDown;
	}

	function fnDown(event) {
		event = event || window.event;
		var oDrag = $(".canDrag")[0],
			// 光标按下时光标和面板之间的距离
			disX = event.clientX - oDrag.offsetLeft,
			disY = event.clientY - oDrag.offsetTop;
		// 移动
		document.onmousemove = function(event) {
				event = event || window.event;
				fnMove(event, disX, disY);
			}
			// 释放鼠标
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}

	function fnMove(e, posX, posY) {
		var oDrag = $(".canDrag")[0],
			l = e.clientX - posX,
			t = e.clientY - posY,
			winW = document.documentElement.scrollWidth || document.body.scrollWidth,
			winH = document.documentElement.scrollHeight || document.body.scrollHeight,
			maxW = winW - oDrag.offsetWidth - 10,
			maxH = winH - oDrag.offsetHeight;
		document.title = winW + ',' + winH;
		if (l < 0) {
			l = 0;
		} else if (l > maxW) {
			l = maxW;
		}
		if (t < $(window).scrollTop()) {
			t = $(window).scrollTop()+10;
		} else if (t > maxH) {
			t = maxH;
		}
		oDrag.style.left = l + 'px';
		oDrag.style.top = t + 'px';
	}


	// 远程更新结束
});