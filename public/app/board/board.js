(function() {
	angular
		.module('app.board')
		.controller('Board', Board);

	Board.$inject = ['dataService']
	function Board(dataService) {
		var vm = this;

		activate();

		function activate() {
			dataService
				.getBoard()
				.then(onGetBoardCompleted);
		}

		function onGetBoardCompleted(data) {
			vm.board = data;
		}
	}
}());