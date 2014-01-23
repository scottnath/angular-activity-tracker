'use strict';

define([ 'angular' ], function() {

  var editActivity = angular.module('ata.addActivity', ['firebase','ui.date']);

  editActivity.controller('AddCtrl', function($scope, $location, $timeout, siteConfig, Projects) {
	  $scope.repeatTypes = siteConfig.getRecordOptions();
	  $scope.dateOptions = {
        changeYear: true,
        changeMonth: true,
        yearRange: '1900:-0'
    };
		$scope.save = function() {
	    Projects.$add($scope.project, function() {
	      $timeout(function() { $location.path('/activities'); });
	    });
      $location.path('/activities');
	  };
	});

});