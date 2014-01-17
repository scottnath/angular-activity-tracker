'use strict';

define([ 
	'jquery',
	'angular',
	'jqueryUi',
	'angularResource',
	'angularRoute',
	'angularCookies',
	'angularMocks',
	'angularTranslate',
	'ataTranslate',
	'firebase',
	'firebaseSimpleLogin',
	'angularFire',
	'lodash',
	'angularUiDate',
	'listActivities',
	'editActivity'
	],
	function() {
	
		var ata = angular.module('activityTrackerApp', [
			'ngRoute',
			'firebase',
			'ata.listActivities',
			'ata.editActivity',
			'ata.translate'
		]);
		
		
    //////////////////////////////
    // Route Configuration for Angular Activity Tracker
    //
    // - $routeProvider: Allows for configuration of routes
    // - $locationProvider: Allows for configuration of routing strategy
    //////////////////////////////
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
    //////////////////////////////
    // Factory for site configuration
    //////////////////////////////
    ata.factory('siteConfig', function ($http, $ataTranslate) {
    
			var recordOptions = [
			  { id: 'yesno', name: 'Yes/No' },
			  { id: 'number', name: 'Number times' },
			  { id: 'minutes', name: 'Minutes' }
			];
			
			return {
        getRecordOptions: function() {
          return recordOptions;
        }
       
       };
			
		});
	  
	  ata.filter('recordTypeName', function(siteConfig) {
		  return function(input) {
		    return _.filter(siteConfig.getRecordOptions(), {id: input})[0].name;
		  };
		});
  
	ata.factory('Projects', function($firebase, Firebase, fbURL) {
	  return $firebase(new Firebase(fbURL));
	});
	// Firebase database
	ata.value('fbURL', 'https://scottnath.firebaseio.com/');
	
	
	ata.factory('repeatOptions', function() {
	  return [
	      { id: 'yesno', name: 'Yes/No' },
	      { id: 'number', name: 'Number times' },
	      { id: 'minutes', name: 'Minutes' }
	    ];
	});

});