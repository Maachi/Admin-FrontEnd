;(function($, scope){
	'use strict';

	scope.Layout = function(){

		var columns = $('#left-menu, #right-menu'),
			applicationContainer = $('#application-container');


		function draw(){
			var applicationWidth = applicationContainer.outerWidth(true),
				windowWidth = $(window).width(),
				columnWidth = (windowWidth - applicationWidth)/2;
			columns.css({
				'top' : applicationContainer.offset().top,
				'width' : columnWidth,
				'height': '100%'
			});
		}

		/** @constructor */
		(function(){
			draw();
		})();

		return {

		};
	}();

}(jQuery, window));