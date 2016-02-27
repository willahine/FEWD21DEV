$( document ).ready(function() {
console.log( "ready!" );

    $('.readmore').click(function(){
        event.preventDefault();
        $('#show-me').slideDown();
        $('.readmore').hide();
        $('.readless').show();
    });

    $('.readless').click(function(){
        event.preventDefault();
        $('#show-me').slideUp();
        $('.readless').hide();
        $('.readmore').show();
    });

    $('.readless').click(function(){
        event.preventDefault();
       $('#js-is-frustrating').slideUp();
        $('.readless').hide();
        $('.readmore').show();
    });

     $('.readmore').click(function(){
        event.preventDefault();
        $('#js-is-frustrating').slideDown();
        $('.readmore').hide();
        $('.readless').show();
    });

     jQuery('.learnmore').click(function(){
        event.preventDefault();
        $('#learnmoretext').slideDown();
        $('.learnmore').hide();
    });

});