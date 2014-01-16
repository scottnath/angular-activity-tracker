requirejs.config({
    baseUrl: '/scripts',
    paths: {
        bower: '/bower_components',
        jquery: '/bower_components/jquery/jquery.min',
        jqueryUi: '/bower_components/jquery-ui/ui/jquery-ui',
        angular: '/bower_components/angular/angular.min',
        angularResource: '/bower_components/angular-resource/angular-resource',
        angularCookies: '/bower_components/angular-cookies/angular-cookies',
        angularRoute: '/bower_components/angular-route/angular-route',
        angularMocks: '/bower_components/angular-mocks/angular-mocks',
        firebase: '/bower_components/firebase/firebase',
        firebaseSimpleLogin: '/bower_components/firebase-simple-login/firebase-simple-login',
        angularFire: '/bower_components/angularfire/angularfire',
        lodash: '/bower_components/lodash/dist/lodash.compat.min',
        listActivities: 'controllers/activities',
        editActivity: 'controllers/edit'
        
    }
});

define([ 'jquery', 'angular', 'activityTrackerApp' ], function() {
    angular.bootstrap(document.getElementById('activityTrackerApp'), [ 'activityTrackerApp' ]);
});