$(document).ready(function() {
	$(".box_one>a").click(function() {
		$(".display").toggle("slow");
		$(".road_display").fadeOut("slow");
		$(".main,.footer,.right").show();
	});
	$(".box_two>a").click(function() {
		$(".road_display").toggle("slow");;
		$(".display").fadeOut("slow");
		$(".main,.footer,.right").toggle();
	});
});