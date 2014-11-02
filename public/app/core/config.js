(function(){
	var core = angular.module('app.core');

	core.config(toastrConfig);

	toastrConfig.$inject = ['toastr'];

	function toastrConfig(toastr) {
		toastr.options.timeOut = 4000;
		toastr.options.positionClass = 'toast-bottom-right';
	}

	var config = {
		appTitle: 'Kanban Board',
		appVersion: '0.1.0'
	};

	core.value('config', config);

	core.config(configure);

	configure.$inject = ['$locationProvider'];

	function configure($locationProvider) {
		$locationProvider.html5Mode(true);
	}

}());