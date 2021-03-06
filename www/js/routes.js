angular
  .module('music')
	.config(config);

function config($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.genders', {
    url: '/genders',
    views: {
      'tab-genders': {
        templateUrl: 'templates/tab-genders.html',
        controller: 'GenderCtrl'
      }
    }
  })

  .state('tab.artists', {
    url: '/artists',
    views: {
      'tab-artists': {
        templateUrl: 'templates/tab-artists.html',
        controller: 'ArtistCtrl'
      }
    }
  })
  
  .state('tab.albums', {
    url: '/albums',
    views: {
      'tab-albums': {
        templateUrl: 'templates/tab-albums.html',
        controller: 'AlbumCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
};
