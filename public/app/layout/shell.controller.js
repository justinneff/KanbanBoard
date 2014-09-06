(function() {
	angular
		.module('kanbanBoard')
		.controller('ShellController', ShellController);

	function ShellController() {
		var vm = this;
		vm.message = 'Hello from the Shell Controller!!';
	}
}());