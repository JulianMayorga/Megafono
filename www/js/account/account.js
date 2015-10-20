angular.module('Megafono.Account', [ ])

.config(function ($stateProvider) {
  $stateProvider.state('account', {
    url: '/account',
    templateUrl: 'js/account/account.html',
    controller: 'AccountController'
  });
})

.controller('AccountController', function ($scope, $ionicHistory, megafonoUtils, megafonoAuth) {
  $scope.user = {
    email: megafonoAuth.data.password.email,
    profileImage: megafonoAuth.data.password.profileImageURL
  };
  $scope.uiSrefNoBack = megafonoUtils.uiSrefNoBack($ionicHistory);
});
