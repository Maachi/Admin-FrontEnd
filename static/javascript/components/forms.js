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
				addPhoneFieldEvents($('#application-container'));
				addActionFieldMultiple();
				addEditableFieldsActions();
			}
		}


		function addEventsToClonedMultipleElement(cloned){
			cloned.find('.button.add-button').on('click', clickMultipleEventButton);
		}


		function clickMultipleEventButton(event){
			var element = $(this).parent().clone();
			event.preventDefault();
			addEventsToClonedMultipleElement(element);
			addPhoneFieldEvents(element);
			element.find('input').val('');
			$(this).parent().after(element);
		}


		function addActionFieldMultiple(){
			$('#application-container .button.add-button').on('click', clickMultipleEventButton);
		}


		function phoneEventFieldMultiple(e){

		}


		function addPhoneFieldEvents(parent){
			parent.find('input.phone-field').keydown(function (e) {
				var key = e.charCode || e.keyCode || 0,
					$phone = $(this);

				// Auto-format- do not expose the mask as the user begins to type
				if (key !== 8 && key !== 9) {
					if ($phone.val().length === 4) {
						$phone.val($phone.val() + ')');
					}
					if ($phone.val().length === 5) {
						$phone.val($phone.val() + ' ');
					}			
					if ($phone.val().length === 9) {
						$phone.val($phone.val() + '-');
					}
				}

				// Allow numeric (and tab, backspace, delete) keys only
				return (key == 8 || 
						key == 9 ||
						key == 46 ||
						(key >= 48 && key <= 57) ||
						(key >= 96 && key <= 105));	
			})
			
			.bind('focus click', function () {
				var $phone = $(this);
				
				if ($phone.val().length === 0) {
					$phone.val('(');
				}
				else {
					var val = $phone.val();
					$phone.val('').val(val); // Ensure cursor remains at the end
				}
			})
			
			.blur(function () {
				var $phone = $(this);
				
				if ($phone.val() === '(') {
					$phone.val('');
				}
			});
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

		function addEditableFieldsActions(){
			$('.editable-field').each(function(){
				var editor = new Editor(this);
			});
		}


		function draw(){
		}

		function load(){
			mainContainer.find('form').on('submit', formSubmitAction);
			addSignatureEvents(mainContainer);
			addPhoneFieldEvents($('#application-container'));
			addActionFieldMultiple();
			addEditableFieldsActions();
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