(function() {
	angular
		.module('kanbanBoard')
		.controller('BoardController', BoardController);

	BoardController.$inject = ['BoardService']
	function BoardController(BoardService) {
		var vm = this;

		activate();

		function activate() {
			BoardService
				.getBoard()
				.then(onGetBoardCompleted);
		}

		function onGetBoardCompleted(data) {
			vm.board = data;
		}
	}
}());