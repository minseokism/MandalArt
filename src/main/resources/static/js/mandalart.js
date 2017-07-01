$(document).ready(function(){
	var leng = $('.hi').text().length;
	if (leng >= 20 && leng < 30) {
		$('.hi').css("font-size", 10);
	} else if (leng >= 30 && leng < 40) {
		$('.hi').css("font-size", 8);
	} else if (leng >= 40) {
		$('.hi').css("font-size", 6);
	}
});

