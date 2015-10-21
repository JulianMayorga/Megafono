angular.module('Megafono.Splash', [ ])

.config(function ($stateProvider) {
  $stateProvider.state('splash', {
    url: '/',
    templateUrl: 'js/splash/splash.html',
    controller: 'SplashController'
  });
})

.controller('SplashController', function ($scope, $state, $ionicHistory) {
  $scope.$on('$ionicView.beforeEnter', function () {
    if (auth.$getAuth()) {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $state.go('menu');
    }
  });
});
