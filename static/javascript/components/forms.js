;(function($, scope){
	'use strict';

	scope.Forms = function(){

		var mainContainer = $('#application-container'),
			signaturesControls = [];

		function addEvents(){
			var form = $('form');
			if (!form.data('noajax')){
				$('form').on('submit', formSubmitAction);
				addSignatureEvents();
			}
		}


		function formSubmitAction(event){
			event.preventDefault();
			$.ajax({
				'type': $(this).attr('method'),
				'url': $(this).attr('action'),
				'data': $(this).serialize(),
				'contentType': "application/x-www-form-urlencoded",
				'success': function(response, textStatus, jqXHR) {
					mainContainer.html(response);
					scope.Navigation.reload();
				},
				'error': function(jqXHR, textStatus, errorThrown) {
					console.log(errorThrown);
				}
			});
			return false;
		}


		function processCanvas(canvas){
			var ratio =  Math.max(window.devicePixelRatio || 1, 1);
			canvas.width = canvas.offsetWidth * ratio;
			canvas.height = canvas.offsetHeight * ratio;
			canvas.getContext("2d").scale(ratio, ratio);
		}


		function addSignatureEvents(parent){
			if(!parent){
				parent = $(document.body)
			}
			parent.find('.field.signature canvas').each(function(){
				processCanvas(this);
				signaturesControls.push(new SignaturePad(this));
			});

		}


		function draw(){
		}

		function load(){
			mainContainer.find('form').on('submit', formSubmitAction);
			addSignatureEvents(mainContainer);
		}

		/** @constructor */
		(function(){
			draw();
			addEvents();
		})();

		return {
			'reload' : load

		};
	}();

}(jQuery, window));