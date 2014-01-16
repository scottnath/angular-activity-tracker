'use strict';

angular.module('activityTrackerApp')
  .controller('ActivitiesCtrl', function($scope, Projects, repeatOptions) {
    $scope.test = 'tester232';
	  $scope.projects = Projects;
	  $scope.items = repeatOptions;
	})
  .filter('repeatName', function(repeatOptions) {
	  return function(input) {
	    return _.filter(repeatOptions, {id: input})[0].name;
	  };
	});
