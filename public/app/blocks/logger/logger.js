(function(){

	angular
		.module('blocks.logger')
		.factory('logger', logger);

	logger.$inject = ['$log', 'toastr'];

	function logger($log, toastr) {
		var service = {
			showToasts: true,
			error: error,
			info: info,
			success: success,
			warning: warning,
			log: $log.log
		};

		return service;

		function error(message, data, title) {
			if (service.showToasts)
				toastr.error(message, title);
			$log.error('Error: ' + message, data);
		}

		function info(message, data, title) {
			if (service.showToasts)
				toastr.info(message, title);
			$log.info('Info: ' + message, data);
		}

		function success(message, data, title) {
			if (service.showToasts)
				toastr.success(message, title);
			$log.info('Success: ' + message, data);
		}

		function warning(message, data, title) {
			if (service.showToasts)
				toastr.warning(message, title);
			$log.warn('Warning: ' + message, data);
		}
	}
}());