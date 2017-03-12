angular.module('music.services', [])

.factory('GenderFactory', function($http,$rootScope) {

  return {
    list: function() {

      return $http({
        method: 'GET',
        url: $rootScope.urlBackend+'api/v1/genders'
      });
    }
  };
})

.factory('ArtistFactory', function($http,$rootScope) {

  return {
    list: function() {

      return $http({
        method: 'GET',
        url: $rootScope.urlBackend+'api/v1/artists'
      });
    }
  };
})

.factory('AlbumFactory', function($http,$rootScope) {

  return {
    list: function() {

      return $http({
        method: 'GET',
        url: $rootScope.urlBackend+'api/v1/albums'
      });
    }
  };
})

;
