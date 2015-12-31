;(function($, scope){
	'use strict';

	scope.Layout = function(){

		var columns = $('#left-menu, #right-menu'),
			applicationContainer = $('#application-container');



		function onLayOutResize(){
			draw();
		}


		function addEvents(){
			$(window).on('resize', onLayOutResize);
		}


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
			setTimeout(function(){
				$(document.body).removeClass('loading');
			}, 200);
			draw();
			addEvents();
		})();

		return {

		};
	}();

}(jQuery, window));