(function() {
	angular
		.module('app.core')
		.factory('dataService', dataService);

	dataService.$inject = ['$http', '$q'];
	function dataService($http, $q) {
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