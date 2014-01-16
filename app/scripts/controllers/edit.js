'use strict';

angular.module('activityTrackerApp')
  .controller('EditCtrl', function($scope, $location, $routeParams, $firebase, Firebase, fbURL, repeatOptions) {
    var projectUrl = fbURL + $routeParams.projectId;
    $scope.project = $firebase(new Firebase(projectUrl));
	  $scope.repeatTypes = repeatOptions;
    $scope.destroy = function() {
      $scope.project.$remove();
      $location.path('/');
    };

    $scope.save = function() {
      $scope.project.$save();
      $location.path('/activities');
    };
	})
  .filter('repeatName', function(repeatOptions) {
	  return function(input) {
	    return _.filter(repeatOptions, {id: input})[0].name;
	  };
	});


