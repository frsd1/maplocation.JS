/**
 * maplocation.JS v1.0
 * @author Fredrik Stenberg, frsd14@student.bth.se
 * @license location.JS is licensed under  the MIT License, http://choosealicense.com/licenses/mit  
 *
 * @summery This jQuery plugin return your location
 * @param option element  to present location
 * @return location(latitude,longitude)
 */

(function($) {
  
    $.fn.maplocation = function(options) {
  		var defaults = {
			divlocation: "maplocation",
      		zoomlevel: 11,
			color: "red",
			sizex: 400,
			sizey: 300,
			latdef: 55.68682400,
    		londef: 12.57110600,
      };
            
      var options = $.extend(defaults, options);

      return this.each(function() {

   			var o =options;
       
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }


function showPosition(position) {


	if(o.myposition) {    
		var latlon = position.coords.latitude+","+position.coords.longitude;
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;

	}
	else {
		var lat = o.latdef;
		var lon = o.londef;
		var latlon = lat+","+lon;
	}
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom="+o.zoomlevel+"&size="+o.sizex+"x"+o.sizey+"&sensor=false&markers=color:"+o.color+"%7Clabel:Din position%7C"+lat+","+lon+"";
    document.getElementById(o.divlocation).innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

      });
    };
	$.fn.closelocation = function(options) {
			var defaults = {
			divlocation: "maplocation",
      };
      
		var options = $.extend(defaults, options);

		return this.each(function() {
			
			var o =options;
	
			var x = document.getElementById(o.divlocation);
			x.innerHTML=" ";
			
		});
	};
  }) (jQuery);
