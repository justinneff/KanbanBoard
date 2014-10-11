(function() {
	angular
		.module('kanbanBoard')
		.controller('ListController', ListController);

	ListController.$inject = ['$scope'];

	function ListController($scope) {
		var vm = this;
		vm.list = $scope.list;
		vm.isAdding = false;
		vm.addNewCard = addNewCard;
		vm.saveCard = saveCard;
		vm.cancelAddCard = cancelAddCard;

		function addNewCard() {
			vm.isAdding = true;
			vm.newCard = {};
		}

		function saveCard() {
			vm.newCard.listId = vm.list._id;
			vm.isAdding = false;
		}

		function cancelAddCard() {
			vm.isAdding = false;
			vm.newCard = undefined;
		}
	}
}());