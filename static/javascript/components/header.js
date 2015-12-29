;(function($, scope){
	'use strict';

	scope.Header = function(){

		var profilePopover = $('#menu-profile-popover'),
			actionProfileButton = $('#view-profile-options');


		function hideMenu(event) {
			if (!profilePopover.is(event.target) 
				&& profilePopover.has(event.target).length === 0) {
				profilePopover.hide();
				$(document).off('mouseup', hideMenu);
			}
		}


		function actionProfileButtonClicked(event){
			event.preventDefault();
			if (!profilePopover.is(':visible')){
				profilePopover.css({
					'display' : 'block',
					'top' : actionProfileButton.offset().top + 10,
					'left' : actionProfileButton.offset().left - (profilePopover.width()/2)
				});
				$(document).on('mouseup', hideMenu);
			}
		}


		function addEvents(){
			actionProfileButton.on('click', actionProfileButtonClicked);
		}

		/** @constructor */
		(function(){
			addEvents();
		})();

		return {

		};
	}();

}(jQuery, window));