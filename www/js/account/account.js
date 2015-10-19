angular.module('Megafono.Account', [ ])

.config(function ($stateProvider) {
  $stateProvider.state('account', {
    url: '/account',
    templateUrl: 'js/account/account.html',
    controller: 'AccountController',
    resolve: {
      newsItems: function ($http) {
        return [];
      }
    }
  });
})

.controller('AccountController', function ($scope, $ionicHistory, megafonoUtils, newsItems) {
  $scope.newsItems = newsItems;
  $scope.uiSrefNoBack = megafonoUtils.uiSrefNoBack($ionicHistory);
});
