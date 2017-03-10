angular
	.module('music')
	.controller('ArtistCtrl', ArtistCtrl);

function ArtistCtrl($scope, ArtistFactory){

	ArtistFactory.list().then(function(res) {
    $scope.ready = false;
    $scope.genders = res.data;
    $scope.ready = true;
  },
  function(err){
    $scope.error = true; 
  });		
};
