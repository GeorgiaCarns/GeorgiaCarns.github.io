$(document).ready(function(){
	console.log("the page is ready!");

	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

	var hideAll = function() {
		$('.research-item').addClass('hide');
	}

	$('.btn-eyes').click(function(){
		hideAll();
		$('.eyes').removeClass('hide');
	});

	$('.btn-mouth').click(function(){
		hideAll();
		$('.mouth').removeClass('hide');
	});

	$('.btn-ears').click(function(){
		hideAll();
		$('.ears').removeClass('hide');
	});

	$('.btn-skin').click(function(){
		hideAll();
		$('.skin').removeClass('hide');
	});
});