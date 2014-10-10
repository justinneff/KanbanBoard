(function() {
	angular
		.module('kanbanBoard')
		.controller('ListController', ListController);

	ListController.$inject = ['$scope'];

	function ListController($scope) {
		var vm = this;
		vm.list = $scope.list;
		vm.addCardToList = addCardToList;

		function addCardToList() {
			alert('Add Card clicked from ' + vm.list.title + '!');
		}
	}
}());