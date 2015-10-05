$(document).ready(function() {
    // $(".left_display").css('display', 'none');
    //搜索div
    var display = $(".display");
    //路线div
    var leftDisplay = $(".left_display");
    var boxOneA = $(".box_one>a");
    var boxTwoA = $(".box_two>a");
    boxOneA.click(function() {
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
    });
    boxTwoA.click(function() {
        $(this).toggleClass('boxTwoHover');
        if (boxOneA.hasClass('boxOneHover'))
            boxOneA.removeClass('boxOneHover');
        if (!display.is(':hidden'))
            display.hide();
        //隐藏右侧div，即车辆
        getStart();
        leftDisplay.stop(true, false).animate({
            width: 'toggle'
        });
    });

    var leftLi = $(".left_display ul li");
    var rightDiv = $(".hide_details");
    var len = leftLi.length;

    leftLi.each(function(index, el) {
        $(this).click(function() {
        	getStart();
            $(this).addClass('showTemp');
            $(rightDiv[index]).removeClass('hideTemp');
        });
    });

    //使路线与车辆初始化
    function getStart() {
        for (var n = 0; n < len; n++) {
            $(leftLi[n]).removeClass('showTemp');
            $(rightDiv[n]).addClass('hideTemp');
        };
    };
    

    // 远程更新
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
	// 远程更新结束
	
	// 用户控制（总览）
	var boxThreeA = $(".box_three>a");
	var searchLine = $(".search_line");
	searchLine.css('display', 'none');
	// 线路管理侧边栏
	boxThreeA.click(function() {
		userStart();
		clearUserControl();
		$(this).toggleClass('boxThreeHover');
		searchLine.stop(true,false).animate({width:'toggle'});
	});

	var userLine = $(".search_line ul li");
	var userCar = $(".search_car");
	var userLen = userLine.length;

	userLine.each(function(index, el) {
		$(this).click(function(event) {
			userStart();
			$(this).addClass('showTemp');
			$(userCar[index]).removeClass('hideTemp');
		});		
	});
	function userStart(){
		for(var n=0; n<userLen; n++){
			$(userLine[n]).removeClass('showTemp');
			$(userCar[n]).addClass('hideTemp');
		}
	};

	// 线路、车辆编辑添加功能
	$(".user_click li").css('display', 'none');
	var userControl = [$(".line_edit"),$(".line_add"),$(".line_alladd"),
						$(".car_edit"),$(".car_add")];
	function clearUserControl(){
		for(var i=0; i<userControl.length; i++){
			userControl[i].hide();
		}
	};
	$(".line_edit_con").click(function() {
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
			for(var i=0; i<userLineLen; i++){
				if(i==index)continue;
				$(userCarFar[i]).addClass('hideTemp');
				$(userLineFar[i]).removeClass('showTemp');
			}
		});
	});
	// 用户控制－－－远程更新 侧边栏 end
});
