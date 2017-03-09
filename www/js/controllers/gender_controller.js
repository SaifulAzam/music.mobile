angular
  .module('music')
  .controller('GenderCtrl', GenderCtrl);

function GenderCtrl($scope, GenderFactory) {

  GenderFactory.list().then(function(res) {
    $scope.ready = false;
    $scope.genders = res.data;
    $scope.ready = true;
  },
  function(err){
    $scope.error = true;
  });
}
