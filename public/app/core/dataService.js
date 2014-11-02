(function() {
	angular
		.module('app.core')
		.factory('dataService', dataService);

	dataService.$inject = ['$http'];
	function dataService($http) {
		return {
			getBoard: getBoard
		};

		function getBoard() {
			return $http
				.get('/api/board')
				.then(getBoardComplete);

			function getBoardComplete(response) {
				return response.data;
			}
		}
	}
}());