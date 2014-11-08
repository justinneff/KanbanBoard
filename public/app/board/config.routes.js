(function(){
	angular
		.module('app.board')
		.config(configureBoardRoutes);

	configureBoardRoutes.$inject = ['$routeProvider'];

	function configureBoardRoutes($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/partials/board/board.html'
			})
			.otherwise({ redirectTo: '/' });
	}
}());