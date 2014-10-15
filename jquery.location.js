/**
 * location.JS v1.0
 * @author Fredrik Stenberg, frsd14@student.bth.se
 * @license location.JS is licensed under  the MIT License, http://choosealicense.com/licenses/mit  
 *
 * @summery This jQuery plugin return your location
 * @param option element  to present location
 * @return location(latitude,longitude)
 */
(function($) {
	$.fn.location = function(options) {

		var options = $.extend(options);

		return this.each(function() {
			//Create a variable o that holds the information in options
			var o =options;
	
			var x = document.getElementById(o.divlocation);

			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
			} 
			else { 
				x.innerHTML = "Geolocation is not supported by this browser.";
			}

			function showPosition(position) {
				x.innerHTML="Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;	
			}
		});
	};
	//Call closelocation to remove information from element 
	$.fn.closelocation = function(options) {
			var defaults = {
			divlocation: "mylocation",
      };
      
		var options = $.extend(defaults, options);

		return this.each(function() {
			
			var o =options;
	
			var x = document.getElementById(o.divlocation);
			x.innerHTML=" ";
			
		});
	};
}) (jQuery);
