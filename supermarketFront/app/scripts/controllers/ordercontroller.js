'use strict';

/**
 * @ngdoc function
 * @name supermarketFrontApp.controller:OrdercontrollerCtrl
 * @description # OrdercontrollerCtrl Controller of the supermarketFrontApp
 */
angular.module('supermarketFrontApp').controller(
		'OrdercontrollerCtrl',
		function($scope, orderservice, $log) { 
			
			$scope.tableOrders = {};
			$scope.ordersDetail = [];

			$scope.btnConfirmation = function() {

				var d = new Date();
				
				// Last month
				var startDate = d.getFullYear() + "-" + ("0"+(d.getMonth())).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);;
				var endDate = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);;

				orderservice.getorders($scope.email, startDate, endDate).then(
						function(res) {
							if (res.success){
								if (res.total == 0){
									$('#tableOrders').hide();
									$scope.warning = res.msg;
									$('#warningMessage').show();
								} else {
									$('#warningMessage').hide();
									$scope.tableOrders = res.data;
									$('#tableOrders').show();
								}
							}else{
								$('#tableOrders').hide();
								$scope.warning = res.msg;
								$('#warningMessage').show();
							}
							

						});

			};

		});
