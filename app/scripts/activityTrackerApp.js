'use strict';
define([ 'jquery', 'angular', 'jqueryUi', 'angularResource', 'angularRoute', 'angularCookies', 'angularMocks', 'firebase', 'firebaseSimpleLogin', 'angularFire', 'lodash', 'angularUiDate', 'listActivities', 'editActivity' ], function() {

	var ata = angular.module('activityTrackerApp', ['ngRoute','firebase','ata.listActivities','ata.editActivity']);

  
	ata.factory('Projects', function($firebase, Firebase, fbURL) {
	  return $firebase(new Firebase(fbURL));
	});
	// Firebase database
	ata.value('fbURL', 'https://scottnath.firebaseio.com/');
	
  ata.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/activities', {
        templateUrl: 'views/activities.html',
        controller: 'ActivitiesCtrl'
      })
      .when('/edit/:projectId', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
	    })
      .otherwise({
        redirectTo: '/'
      });
  });
	
	ata.factory('repeatOptions', function() {
	  return [
	      { id: 'yesno', name: 'Yes/No' },
	      { id: 'number', name: 'Number times' },
	      { id: 'duration', name: 'Duration' }
	    ];
	});

});