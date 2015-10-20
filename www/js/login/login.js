angular.module('Megafono.Login', [])

.config(function($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'js/login/login.html',
    controller: 'LoginController'
  });
})

.controller('LoginController', function($scope, $firebaseAuth, $ionicHistory, megafonoUtils) {
  var uiSrefNoBack = megafonoUtils.uiSrefNoBack($ionicHistory);

  $scope.login = function login(user) {
    auth.$authWithPassword({
      email: user.email,
      password: user.password
    }).then(function(authData) {
      uiSrefNoBack('complaints.list');
    }).catch(function(error) {
      console.error("ERROR: " + error);
    });
  };
});
