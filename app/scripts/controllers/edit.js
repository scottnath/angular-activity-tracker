'use strict';


define([ 'angular' ], function() {

  var editActivity = angular.module('ata.editActivity', ['firebase','ui.date']);

  editActivity.controller('EditCtrl', function($scope, $location, $routeParams, $firebase, Firebase, fbURL, repeatOptions) {
    var projectUrl = fbURL + $routeParams.projectId;
    $scope.project = $firebase(new Firebase(projectUrl));
	  $scope.repeatTypes = repeatOptions;
	  $scope.dateOptions = {
        changeYear: true,
        changeMonth: true,
        yearRange: '1900:-0'
    };
    $scope.destroy = function() {
      $scope.project.$remove();
      $location.path('/');
    };

    $scope.save = function() {
      $scope.project.$save();
      $location.path('/activities');
    };
	});
  editActivity.filter('repeatName', function(repeatOptions) {
	  return function(input) {
	    return _.filter(repeatOptions, {id: input})[0].name;
	  };
	});

});
