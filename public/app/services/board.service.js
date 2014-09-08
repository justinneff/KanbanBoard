(function() {
	angular
		.module('kanbanBoard')
		.factory('BoardService', BoardService);

	BoardService.$inject = ['$http', '$q'];
	function BoardService($http, $q) {
		return {
			getBoard: getBoard
		};

		function getBoard() {
			var dfd = $q.defer();
			$http
				.get('/api/board')
				.then(function(response) {
					dfd.resolve(response.data);
				});
			return dfd.promise;
		}
	}
}());