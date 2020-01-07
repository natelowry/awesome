(function( $ ) {
		'use strict';
		 var awesomes = ["neat", "cool", "wicked", "incredible", "excellent",
		 "crack", "exceptional", "fantastic", "fabulous", "fine", "awesome",
		 "marvelous", "super", "terrific", "tremendous", "wonderful",
		 "brilliant", "superb", "keen", "laudable", "worthy", "rad", "sweet",
		 "fresh", "dope", "fly", "nifty", "first-rate", "impressive", "legit",
		 "lit", "fire"];
 
    $.fn.awesome = function() { 
        return this.text(awesomes[parseInt(Math.random() * awesomes.length)]);         
    }; 
}( jQuery ));
