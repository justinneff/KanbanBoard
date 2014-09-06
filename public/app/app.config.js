(function() {
	angular
		.module('kanbanBoard')
		.config(configureApp);

	configureApp.$inject = ['$locationProvider'];

	function configureApp($locationProvider) {
		$locationProvider.html5Mode(true);
	}
}());