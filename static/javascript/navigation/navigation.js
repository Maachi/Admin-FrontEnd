;(function($, scope){
	'use strict';

	scope.Navigation = function(){

		var selector = 'a[href*=\'.html\']',
			links = $(selector),
			appContainer = $('.app'),
			mainContainer = $('#application-container');

		function linkClicked(event){
			event.preventDefault();
			loadContentInContainer(this.href);
		}

		function recalculateHeightApp(){
			appContainer.css({
				'height' : appContainer.height()
			});
		}

		function loadContentInContainer(url){
			$.ajax({
				'url': url,
				'method': "GET",
				'data': { 
					'ajax' : true 
				}
			}).done(function(response) {
				if(response){
					mainContainer.empty();
					mainContainer.html(response);
					setTimeout(function(){
						mainContainer.find(selector).on('click', linkClicked);
					}, 200);
					history.pushState(null, null, url);
				}
			});
		}


		function onPopState(event){
			//console.log('popstate...', location.href);
		}


		function addEvents(){
			links.on('click', linkClicked)
			$(window).on('popstate', onPopState);
		}

		/** @constructor */
		(function(){
			addEvents();
		})();

		return {

		};
	}();

}(jQuery, window));