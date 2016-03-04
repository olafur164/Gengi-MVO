var model = {
	// Get JSON data from http://apis.is/currency/:source
	//var gengi = $.get("http://apis.is/currency/arion").then( function( data, status, jqXHR ) { return data; });
	
	gengi: [
		{
			test : ''
		}
	]
};

var octopus = {
	init: function() {
		//currencyListView.init();
		console.log("test");
	},
	getCurrencyList: function() {
		model.gengi;
	}
};

var currencyView = {
	init: function() {

	},

	render: function() {

	}
}

var currencyListView = {
	init: function() {
		//return $.get("templates/template.handlebars").then( function( template, status, jqXHR ) { return template; });
		var template = $.get("templates/template.gengi");
		//this.currencyListElem = document.getElementById('currency-list');

		// render this view
		this.render(template);
	},
	render: function(template) {
		console.log("test");
		var renderer = Handlebars.compile(template);
		var gengi = octopus.getCurrencyList();
		var result = renderer(gengi);
		$("#content").html(result);
	}
};

octopus.init;