//Sets up Date Input Box
$(document).ready(function(){
	var date_input=$('input[name="date"]'); 
	var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
	date_input.datepicker({
		format: 'mm/dd/yyyy',
		container: container,
		todayHighlight: true,
		autoclose: true,
	})
})

//Set up picture Buttons
$('.feelingPic').on('click', function(){
		
	if($(this).attr('class') == 'selectedFeeling'){
		$(this).attr('class', 'none');
		$(this).css('border', 'none');
	}	
	else{
		$(this).attr('class', 'selectedFeeling');
		$(this).css('border', 'lightgreen solid 2px');
	}
})

$('.smokingIcons button').on('click', function(){
	if($(this).attr('id') == 'selectedSmoking'){
		$('.smokingIcons button').attr('id', 'none');

		$('.smokingIcons button').css('border', 'none');		
	}
	else{
		$('.smokingIcons button').attr('id', 'none');
		$(this).attr('id', 'selectedSmoking');

		$('.smokingIcons button').css('border', 'none');
		$(this).css('border', 'lightgreen solid 2px');
	}
})
