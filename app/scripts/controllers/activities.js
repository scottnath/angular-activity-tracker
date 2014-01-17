'use strict';


define([ 'angular' ], function() {

  var listActivities = angular.module('ata.listActivities', ['firebase']);
/*
  timestamp.directive('ticketTimestamp', function() {
      return {
          restrict: 'E',
          templateUrl: '/angular/ticket-timestamp.html'
      };
  });
*/
  
  listActivities.controller('ActivitiesCtrl', function($scope, Projects, repeatOptions, $ataTranslate, siteConfig) {
	  $scope.projects = Projects;
	  $scope.items = repeatOptions;
	});
  
	
});