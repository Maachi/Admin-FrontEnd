;(function(window){

	'use strict';


	/**
	 * @author Sebastian Romero - Maachi LLC
	 * This class represents the Editor editor, more info https://developer.mozilla.org/en-US/docs/Rich-Text_Editing_in_Mozilla
	 * @return {[type]} public reference
	 */
	window.Editor = function(){
			/** @type {HTMLObject} reference of the editor */
		var editor,
			/** @type {Memento} current steps*/
			userSteps,
			/** @type {Number} Steps required for the Memento class */
			defaultMaxOfSteps = 8,
			/** @type {Number} reference of the timeout, keeping this globally to clear the event */
			eventTimeout,
			/** @type {Number} lapse of time to fire the event */
			eventTime = 1000,
			/** @type {Array} events for to handle the selection */
			selectionEvents = [],
			/** @type {Object} enumarates the editor events */
			editorEvents = {
				"ON_SELECTION" : "onSelect"
			};

		/**
		 * Constructor
		 */
		function editor(htmlObject){
			editor = htmlObject;
			addEvents();
			editable(true);
		}

		/**
		 * Makes the editor element captured in the constructor editable or not according with the param
		 * @param  {Boolean} isEditable enables the edition to the editor object
		 */
		function editable(isEditable){
			if(editor){
				editor.setAttribute("contenteditable", isEditable);
				editor.designMode = "On";
			}
		}


		/**
		 * Triggers the editor event
		 * @param  {[type]} event [description]
		 */
		function triggerEvent(event){
			var editorEvent,
				i = 0;
			if(selectionEvents.length>0){
				for(; i<selectionEvents.length; i++){
					if(typeof selectionEvents[i] == "function"){
						editorEvent = new EditorEvent();
						editorEvent.x = event.pageX;
						editorEvent.y = event.pageY;
						selectionEvents[i](editorEvent);
					}
				}
			}
		}


		/**
		 * Event trigger when theres focus in the element
		 * @param  {[type]} event [description]
		 */
		function onFocus(event){
			var selection;
			if(eventTimeout){
				clearInterval(eventTimeout);
			}
			if(event){
				selection = getSelection();
				if(selection){
					if(selection.length > 0){
						/** Send the position when there is a selection */
						eventTimeout = setTimeout(function(){
							triggerEvent(event);
						}, eventTime);
					}
				}
			}
		}


		/**
		 * Gets the selection of the user
		 * @return {[String]} HTML of the selection
		 */
		function getSelection(){
			var selection,
				container,
				html,
				len,
				i;
			if(window.getSelection()){
				selection = window.getSelection();
				if (selection.rangeCount){
					container = document.createElement('div');
					for (i = 0, len = selection.rangeCount; i < len; i += 1) {
						container.appendChild(selection.getRangeAt(i).cloneContents());
					}
					html = container.innerHTML;
				}
			}
			return html;
		}


		/**
		 * Appends the html in the selection
		 * @param  {[type]} selection html to append in the container
		 */
		function appendHTML(selection){
			document.execCommand('insertHTML', false, selection);
		}


		/** Adds the events to the landing page */
		function addEvents(){
			editor.addEventListener('focus', onFocus);
			editor.addEventListener('click', onFocus);
			userSteps = new Memento(defaultMaxOfSteps);
		}


		/**
		 * This method is very usefull if you want to add a special content such as comment or quote
		 * @param {[type]} tag element that wraps the content
		 * @param {[type]} className special class name for the container
		 */
		function addSpecialContent(tag, className){
			var selection = getSelection();
			if(selection){
				userSteps.add(editor.innerHTML);
				selection = "<" + tag + " class='" + className + "'>" + selection + "</" + tag + ">";
				appendHTML(selection);
			}
		}


		/**
		 * Adds html to the given selection after validating if is a valid html tag given
		 * @param {[type]} tag [description]
		 */
		function addHTMLToSelection(tag){
			var selection = getSelection();
			if(selection){
				userSteps.add(editor.innerHTML);
				selection = "<" + tag + ">" + selection + "</" + tag + ">";
				appendHTML(selection);
			}
		}


		/** @type {Object} Exposes the editor events outside of the editor component */
		editor.prototype.editorEvents = editorEvents;


		/**
		 * @public
		 * Adds an event to the editor
		 * @return {[Object]} returns editor reference
		 */
		editor.prototype.addEventListener = function(event, action){
			if(typeof action === "function" && event === editorEvents.ON_SELECTION){
				selectionEvents.push(action);
			}
		};



		/**
		 * @public
		 * Sets the selection in bold
		 * @return {[Object]} returns editor reference
		 */
		editor.prototype.setBold = function(){
			addHTMLToSelection("strong");
		};


		/**
		 * @public
		 * Sets the selection in italic
		 * @return {[Object]} returns editor reference
		 */
		editor.prototype.setItalic = function(){
			addHTMLToSelection("i");
		};


		/**
		 * @public
		 * Undos action
		 * @return {[Object]} returns editor reference
		 */
		editor.prototype.undo = function(){
			var step = userSteps.undo();
			if(step){
				editor.innerHTML = step;
			}
		};
		return editor;
	}();



	/**
	 * @author Sebastian Romero - Maachi LLC
	 * Represents the editor event as an object
	 */
	var EditorEvent = function(){
			/** @type {Number} [description] */
		var x = 0,
			/** @type {Number} [description] */
			y = 0;
		/**
		 * @constructor
		 */
		function editorEvent(){
		}
		editorEvent.prototype.x = x;
		editorEvent.prototype.y = y;
		return editorEvent;
	}();



	/**
	 * @author Sebastian Romero - Maachi LLC
	 * Saves the differents mementos of the editor
	 */
	var Memento = function(){
			/** @type {Array} array of object that contains the steps */
		var steps,
			/** @type {Number} current index of the steps */
			index = 0,
			/** @type {Number} Maximum of steps support by the program*/
			maxSteps = 2;

		/**
		 * @constructor
		 * @param  {[Number]} maxS Optional Max of steps supported 
		 */
		function memento(maxS){
			if(maxS){
				maxSteps = maxS;
			}
		}

		/**
		 * Adds a step to the mometum
		 * @param {[type]} step [description]
		 */
		memento.prototype.add = function(step){
			var tempSteps,
				i = 1;
			if(!steps){
				steps = [];
			}
			if(steps.length == maxSteps){
				tempSteps = steps;
				steps = [];
				for (; i<tempSteps.length; i++){
					steps.push(tempSteps[i]);
				}
			}
			steps.push(step);
			index = steps.length-1;
		};


		/**
		 * Get back one step
		 * @return {[Object]} returns object reference
		 */
		memento.prototype.undo = function(){
			var reference;
			if(steps){
				reference = steps[index];
				steps.splice(index, 1);
				index--;
			}
			return reference;
		};

		return memento;
	}();


}(window));