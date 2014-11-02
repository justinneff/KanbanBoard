(function() {
	angular
		.module('app.board')
		.controller('Board', Board);

	Board.$inject = ['dataService', 'logger'];
	function Board(dataService, logger) {
		var vm = this;

		activate();

		function activate() {
			dataService
				.getBoard()
				.then(onGetBoardCompleted);
		}

		function onGetBoardCompleted(data) {
			vm.board = data;
			logger.success('Kanban Board loaded!');
		}
	}
}());