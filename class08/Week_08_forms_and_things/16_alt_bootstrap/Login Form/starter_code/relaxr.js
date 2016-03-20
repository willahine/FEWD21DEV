$(document).ready(function(){
    $('#relaxrExistingUser a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
});
 console.log ( 'menu toggle' );
$( ".navbar-right span" ).click(function(e) {

	e.preventDefault();
	$( ".nav" ).slideToggle( "slow");

	if($("body").hasClass('nav-active')) {
		
		$( ".navbar-right span" ).html('&equiv;');
	
		$("body").removeClass('nav-active');
	
	} else {
	
		$("body").addClass('nav-active');
	
		$( ".navbar-right span" ).html('&times;');
	
	}

	});