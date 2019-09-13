$(document).ready(function(){
	console.log("the page is ready!");

	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	var hideAll = function() {
		$('.research-item').addClass('hide');
	}

	$('btn-car').click(function(){
		hideAll();
		$('.car').removeClass('hide');
	});

	$('btn-kinetic').click(function(){
		hideAll();
		$('.kinect').removeClass('hide');
	});

});