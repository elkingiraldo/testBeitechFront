'use strict';

/**
 * @ngdoc service
 * @name supermarketFrontApp.orderservice
 * @description # orderservice Service in the supermarketFrontApp.
 */
angular.module('supermarketFrontApp').service(
		'orderservice',
		function($http,$log) {
			
			var orderservice = {};

			orderservice.getorders = function(email, startDate, endDate) {

				return $http.get(
						'http://localhost:8080/ordersList?registeredEmail=' + email + '&startDate=' + startDate + '&endDate='+ endDate).then(function(res) {
							return res.data;

				});

			};
			
			return orderservice;

		});
