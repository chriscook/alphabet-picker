/*
 * Alphabet Picker jQuery Plugin version 1.0.1
 * Chris Cook - chris@chris-cook.co.uk
 */

(function ($) {

	'use strict';

	$.fn.alphabetPicker = function (options) {

		$('body').append('<ul id="azp-container"><li>a</li><li>b</li><li>c</li><li>d</li><li>e</li><li>f</li><li>g</li><li>h</li><li>i</li><li>j</li><li>k</li><li>l</li><li>m</li><li class="azp-breaker">n</li><li>o</li><li>p</li><li>q</li><li>r</li><li>s</li><li>t</li><li>u</li><li>v</li><li>w</li><li>x</li><li>y</li><li>z</li></ul>');

		var settings = $.extend({
			destination : 'demo.html',
			hash : false,
			parameterName : 'letter',
			uppercase : false,
			topPosition : '20%',
			leftPosition : '30%'
		}, options),
			$alphabetTriggers = this,
			$alphabetPicker = $('#azp-container'),
			$letters = $alphabetPicker.children('li');

		if (settings.uppercase) {
			$letters.css('textTransform', 'uppercase');
		}

		$alphabetPicker.css('top', settings.topPosition).css('left', settings.leftPosition);

		$alphabetTriggers.click(function () {
			$alphabetPicker.fadeToggle('fast');
		});

		$alphabetPicker.on('click', 'li', function () {
			if (settings.hash) {
				location.href = settings.destination + '#' + $(this).html();
			} else {
				location.href = settings.destination + '?' + settings.parameterName + '=' + $(this).html();
			}
		});

		return this;

	};

})(jQuery);
