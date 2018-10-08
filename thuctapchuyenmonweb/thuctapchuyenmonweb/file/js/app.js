var app = angular.module("myModule", ['angularUtils.directives.dirPagination'])
				.controller("myController2ne1", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "2NE1", p_image: "img/2ne1.jpg", p_price: 2899000},
					{p_id: "2", p_name: "SAB", p_image: "img/2ne14.jpg", p_price: 6013800},
					{p_id: "3", p_name: "CL", p_image: "img/aoa7.jpg", p_price: 1519000},
					{p_id: "4", p_name: "MINZY", p_image: "img/2ne13.jpg", p_price: 7518700},
					{p_id: "5", p_name: "AOA ppaa", p_image: "img/aoa6.jpg", p_price: 50115000},
					{p_id: "6", p_name: "2ne11", p_image: "img/2ne16.jpg", p_price: 90130},
					{p_id: "7", p_name: "2ne22", p_image: "img/aoa5.jpg", p_price: 23130},
					{p_id: "8", p_name: "2ne22", p_image: "img/aoa4.jpg", p_price: 23130},
					{p_id: "9", p_name: "2ne22", p_image: "img/aoa3.jpg", p_price: 23130},
					{p_id: "10", p_name: "2ne22", p_image: "img/aoa3.jpg", p_price: 23130}
				];
				
				
				/*
				.controller("myControllerbb", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "2NE1", p_image: "img/bb1.jpg", p_price: 2899000},
					{p_id: "2", p_name: "SAB", p_image: "img/bb2.jpg", p_price: 6013800},
					{p_id: "3", p_name: "CL", p_image: "img/bb3.jpg", p_price: 1519000},
					{p_id: "4", p_name: "MINZY", p_image: "img/2ne13.jpg", p_price: 7518700},
					{p_id: "5", p_name: "AOA ppaa", p_image: "img/aoa6.jpg", p_price: 50115000},
					{p_id: "6", p_name: "2ne11", p_image: "img/2ne16.jpg", p_price: 90130},
					{p_id: "7", p_name: "2ne22", p_image: "img/aoa5.jpg", p_price: 23130},
					{p_id: "8", p_name: "2ne22", p_image: "img/aoa4.jpg", p_price: 23130},
					{p_id: "9", p_name: "2ne22", p_image: "img/aoa3.jpg", p_price: 23130}
				];
				
				*/
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});
	
app.controller("myControllerbb", ['$scope', function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "2NE1", p_image: "img/bb1.jpg", p_price: 2899000},
					{p_id: "2", p_name: "SAB", p_image: "img/bb4.jpg", p_price: 6013800},
					{p_id: "3", p_name: "CL", p_image: "img/bb7.jpg", p_price: 1519000},
					{p_id: "4", p_name: "MINZY", p_image: "img/bb3.jpg", p_price: 7518700},
					{p_id: "5", p_name: "AOA ppaa", p_image: "img/aoa6.jpg", p_price: 50115000},
					{p_id: "6", p_name: "2ne11", p_image: "img/2ne16.jpg", p_price: 90130},
					{p_id: "7", p_name: "2ne22", p_image: "img/aoa5.jpg", p_price: 23130},
					{p_id: "8", p_name: "2ne22", p_image: "img/aoa4.jpg", p_price: 23130},
					{p_id: "9", p_name: "2ne22", p_image: "img/aoa3.jpg", p_price: 23130}
				];
}]);