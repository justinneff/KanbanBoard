(function() {
	angular
		.module('app.board')
		.controller('Board', Board);

	Board.$inject = ['dataService', 'logger', '$q'];
	function Board(dataService, logger, $q) {
		var vm = this;

		activate();

		function activate() {
			$q
				.when(getBoard())
				.then(function() {
					logger.success('Board Activated!');
				});
		}

		function getBoard() {
			dataService
				.getBoard()
				.then(onGetBoardCompleted)
		}

		function onGetBoardCompleted(data) {
			vm.board = data;
		}
	}
}());