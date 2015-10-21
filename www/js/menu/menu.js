angular.module('Megafono.Menu', [])

.config(function($stateProvider) {
  $stateProvider.state('menu', {
    url: '/menu',
    templateUrl: 'js/menu/menu.html',
    controller: 'MenuController'
  });
})

.controller('MenuController', function($scope, $ionicPopup) {
  $scope.alert = function() {
    $ionicPopup.alert({
      template: 'Proximamente!'
    });
  };
});
