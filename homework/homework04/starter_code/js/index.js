$( document ).ready(function() {
console.log( "ready!" );

    $('.readmore').click(function(){
        event.preventDefault();
        $('#show-this-on-click').slideDown();
        $('.readmore').hide();
        $('.readless').show();
    });

    $('.readless').click(function(){
        event.preventDefault();
        $('#show-this-on-click').slideUp();
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