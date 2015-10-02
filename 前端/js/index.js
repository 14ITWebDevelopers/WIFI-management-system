$(document).ready(function() {
	$(".left_display").css('display', 'none');
	var display = $(".display");
	var leftDisplay = $(".left_display");
	var boxOneA = $(".box_one>a");
	var boxTwoA = $(".box_two>a");
	boxOneA.click(function() {
		// 背景蓝色切换
		$(this).toggleClass('boxOneHover');
		if(boxTwoA.hasClass('boxTwoHover'))
			boxTwoA.removeClass('boxTwoHover');
		// 判断下方div是否隐藏
		if(! leftDisplay.is(':hidden')){
			leftDisplay.hide();
			$(".hide_details").toggleClass('hideTempAnother');
		}
		display.animate({width: 'toggle'});
	});
	boxTwoA.click(function() {
		$(this).toggleClass('boxTwoHover');
		if(boxOneA.hasClass('boxOneHover'))
			boxOneA.removeClass('boxOneHover');
		if(!display.is(':hidden'))
			display.hide();

		$(".hide_details").toggleClass('hideTempAnother');
		// $(".road_display>div:eq(1)").toggleClass('hideTemp');
		leftDisplay.animate({width: 'toggle'});
	});

	var leftLi = $(".left_display ul li");
	var rigthDiv = $(".hide_details");
	var len = leftLi.length;

	for(var i=0; i<len; i++){
		leftLi[i].index = i;
		leftLi[i].onclick = function(){
			for(var n=0; n<len; n++){
				leftLi[n].className = "";
				rigthDiv[n].className = "hide_details" + " " + "hideTemp";
			};
			this.className = "showTemp";
			rigthDiv[this.index].className = " " + "hide_details";
		}
	};
	
});