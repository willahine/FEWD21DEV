$(document).ready(function() {
 console.log("hi"); 
  $('#submit-btn').click(function(){
    event.preventDefault();
   
    var city = $('#city-type').val();
    
    if(city == 'new york city' || city == 'nyc' || city == 'new york' || city == 'ny') {
      $('body').attr('class','nyc');
    }
   
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').attr('class','sf');
    }
    
    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }
  
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }
  
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }
  });
});