'use strict';

angular.module('activityTrackerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  
	.factory('Projects', function($firebase, Firebase, fbURL) {
	  return $firebase(new Firebase(fbURL));
	})
	// Firebase database
	.value('fbURL', 'https://scottnath.firebaseio.com/')
	
  .config(function ($routeProvider) {
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
  })
	
	.factory('repeatOptions', function() {
	  return [
	      { id: 'yesno', name: 'Yes/No' },
	      { id: 'number', name: 'Number times' },
	      { id: 'duration', name: 'Duration' }
	    ];
	});
