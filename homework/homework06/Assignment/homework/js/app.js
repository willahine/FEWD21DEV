//Define your variables (cities)//
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
//check your console//
$(document).ready(function() {
  //when nothing is selected do not change the photo (starting point) //
  //the value or length of city var is double (create your incrementing index)//
    //Everything is set to 0 at the get go, when a city-type is clicked that value will be stored //
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
  //display city types in dropdown form//
  $('form').on('change', '#city-type',function(){  
    var city = $('#city-type').val();
    if(city == 'NYC') { //NYC is selected change  photo to NYC class //
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {//SF is selected change  photo to sf class //
      $('body').attr('class','sf');
    }
    else if (city == 'LA') { //LA is selected change  photo to la class //
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {//ATX is selected change  photo to Austin class //
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {//SYD is selected change  photo to Sydney class //
      $('body').attr('class','sydney');
    }
  });
});