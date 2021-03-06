var app = app || {};

app.LunchView = Backbone.View.extend({
	el: '#lunch',

	attributes: {
  		'ondrop': 'ev.dataTransfer.getData("text")',
  		'ondragover': 'allowDrop(event)'
  	},

  	events: {
	  	'dragenter': 'dragEnter',
	  	'dragover': 'dragOver',
	  	'drop': 'dropped'
  	},

	initialize: function() {},

	render: function() {},

	dragEnter: function (e) {
  		e.preventDefault();
  	},

    dragOver: function(e) {
  		e.preventDefault();
  	},

    dropped: function(ev) {
  		var data = ev.originalEvent.dataTransfer.getData("text/plain");
  		ev.target.appendChild(document.getElementById(data));
  	}
});

new app.LunchView