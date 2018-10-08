(function() {
    'use strict';

   var app=  angular
        .module('app', [])
        .factory('PagerService', PagerService)
        .controller('ExampleController', ExampleController);


    function ExampleController(PagerService) {
        var vm = this;

        vm.dummyItems = _.range(1, 151); // dummy array of items to be paged
        vm.pager = {};
        vm.setPage = setPage;

        initController();

        function initController() {
            // initialize to page 1
            vm.setPage(1);
        }

        function setPage(page) {
            if (page < 1 || page > vm.pager.totalPages) {
                return;
            }

            // get pager object from service
            vm.pager = PagerService.GetPager(vm.dummyItems.length, page);

            // get current page of items
            vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
        }
    }

    function PagerService() {
        // service definition
        var service = {};

        service.GetPager = GetPager;

        return service;

        // service implementation
        function GetPager(totalItems, currentPage, pageSize) {
            // default to first page
            currentPage = currentPage || 1;

            // default page size is 10
            pageSize = pageSize || 10;

            // calculate total pages
            var totalPages = Math.ceil(totalItems / pageSize);

            var startPage, endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            } else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                } else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                } else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }

            // calculate start and end item indexes
            var startIndex = (currentPage - 1) * pageSize;
            var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

            // create an array of pages to ng-repeat in the pager control
            var pages = _.range(startPage, endPage + 1);

            // return object with all pager properties required by the view
            return {
                totalItems: totalItems,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: pages
            };
        }
    }
})();


		app.controller("app", function($scope){
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
				]
		});