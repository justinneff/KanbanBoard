(function() {
	angular
		.module('kanbanBoard')
		.controller('BoardController', BoardController);

	function BoardController() {
		var vm = this;
		// Hand code some lanes and cards for now to get started
		vm.lanes = [
			{
				title: 'To Do',
				card_limit: 0,
				display_order: 1,
				cards: [
					{
						title: 'Task 1'
					},
					{
						title: 'Task 2'
					}
				]
			},
			{
				title: 'Doing',
				card_limit: 3,
				display_order: 2,
				cards: [
					{
						title: 'Task 3',
						description: 'This is a description of what the task is for.',
						priority: 'high'
					},
					{
						title: 'Task 4'
					},
					{
						title: 'Task 5'
					}
				]
			},
			{
				title: 'Done',
				card_limit: 0,
				display_order: 3,
				cards: []
			}
		];
	}
}());