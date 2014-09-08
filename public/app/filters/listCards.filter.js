(function(){
	angular
		.module('kanbanBoard')
		.filter('listCards', listCardsFilter);

	function listCardsFilter() {
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