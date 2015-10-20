angular.module('Megafono.Account', [ ])

.config(function ($stateProvider) {
  $stateProvider.state('account', {
    url: '/account',
    templateUrl: 'js/account/account.html',
    controller: 'AccountController'
  });
})

.controller('AccountController', function ($scope, $ionicHistory, $ionicNavBarDelegate, megafonoUtils) {
  $ionicNavBarDelegate.showBackButton(true)
  $scope.user = {
    email: auth.$getAuth().password.email,
    profileImage: auth.$getAuth().password.profileImageURL
  };
  $scope.logout = function logout() {
    auth.$unauth();
    $scope.uiSrefNoBack('splash');
  };
  $scope.uiSrefNoBack = megafonoUtils.uiSrefNoBack($ionicHistory);
});
