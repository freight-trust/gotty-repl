'use strict';

var Color = require('color');

// App to change color schemes daily
(function ColorSchemesApp(){
	var PopularColors = new Array(
		'#ffc0cb',
		'#008080',
		'ff0000',
		'#ffd700',
		'#00ffff',
		'#40e0d0',
		'#ff7373',
		'#0000ff',
		'#ffa500',
		'#b0e0e6',
		'#7fffd4',
		'#c6e2ff',
		'#faebd7',
		'#800080',
		'#cccccc',
		'#fa8072',
		'#ffb6c1',
		'#333333',
		'#800000',
		'#00ff00',
		'#003366',
		'#c0c0c0',
		'#66cdaa',
		'#ff6666',
		'#666666',
		'#c39797',
		'#00ced1',
		'#ffdab9',
		'#ff00ff',
		'#008000',
		'#FE6A6B',
		'#088da5',
		'#c0d6e4',
		'#660066',
		'#0e2f44',
		'#808080',
		'#8b0000',
		'#ff7f50',
		'#990000',
		'#daa520',
		'#00ff7f',
		'#66cccc',
		'#8a2be2',
		'#81d8d0',
		'#3399ff',
		'#a0db8e',
		'#0bd800',
		'#ff4040',
		'#794044',
		'#cc0000',
		'#000080',
		'#3b5998',
		'#ccff00',
		'#999999',
		'#191970',
		'#31698a',
		'#6897bb',
		'#0099cc',
		'#ff4444',
		'#ff1493',
		'#6dc066',
	);

	function rand_from_seed(x, iterations){
	  iterations = iterations || 100;
	  for(var i = 0; i < iterations; i++)
	    x = (x ^ (x << 1) ^ (x >> 1)) % 10000;
	  return x;
	}

	function ColorOfTheDay() {
		var ms = 1000*60*60*24;
		var seed = Math.floor(new Date().getTime()/ms);
		var noOftheDay = rand_from_seed(seed);
		return PopularColors[noOftheDay%PopularColors.length];
	}

	function setupColorThemes() {
		var accent_color = ColorOfTheDay();
		if (accent_color!==undefined) {
			var colorObj = Color(accent_color);
			var accent_color_light = colorObj.alpha(0.5).lighten(0.5);
			var accent_color_dark = colorObj.alpha(0.9).darken(0.5);
			var accent_color_rev = colorObj.negate();
			var accent_color_rev_dark = accent_color_rev.alpha(0.9).darken(0.5);
			//console.log('color: ',colorObj);
			document.documentElement.style.setProperty('--accent-color', accent_color);
			document.documentElement.style.setProperty('--rev-accent-color', accent_color_rev.hex());
			document.documentElement.style.setProperty('--accent-color-light', accent_color_light.hex());
			document.documentElement.style.setProperty('--accent-color-dark', accent_color_dark.hex());
			document.documentElement.style.setProperty('--rev-accent-color-dark', accent_color_rev_dark.hex());
		}
	}

	setupColorThemes();

})();











