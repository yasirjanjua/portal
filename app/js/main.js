
$(document).ready(function(){
	$(".bottom-btn").click(function(){
	    $("#box-toggle").toggle();
	});

    $('#signup-btn').click(function(){
    	$('.form-signin-heading').html('your are registered!');
        $('.alert').show();
        $('.form-control').hide();
        $('#signup-btn').hide();
        $('p').hide();
    }) 
});