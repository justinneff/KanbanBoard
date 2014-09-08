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
				.then(function(data) {
					vm.board = data;
				})
		}
	}
}());