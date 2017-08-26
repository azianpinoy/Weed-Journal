$(document).ready(function(){
	$("#hiddenNav").hide();
	
	$(function () {
		$(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
				$('#hiddenNav').fadeIn();
			} else {
				$('#hiddenNav').fadeOut();
			}
		});
	
	});
})

