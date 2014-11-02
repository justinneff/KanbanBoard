(function(){
	angular
		.module('app.core')
		.filter('listCards', listCards);

	function listCards() {
		return function(input, listId) {
			var output = [];
			for (var i = 0; i < input.length; i++) {
				if (input[i].listId == listId) {
					output.push(input[i]);
				}
			}
			return output;
		}
	}
}());