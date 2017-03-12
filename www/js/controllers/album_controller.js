angular
  .module('music')
  .controller('AlbumCtrl', AlbumCtrl);

function AlbumCtrl($scope, AlbumFactory) {

  AlbumFactory.list().then(function(res) {
    $scope.ready = false;
    $scope.albums = res.data;
    $scope.ready = true;
  },
  function(err){
    $scope.error = true;
  });
}
