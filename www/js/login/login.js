angular.module('Megafono.Login', [])

.config(function($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'js/login/login.html',
    controller: 'LoginController'
  });
})

.factory('megafonoAuth', function() {
  return {
    data: null
  };
})

.controller('LoginController', function($scope, $firebaseAuth, $ionicHistory, megafonoUtils, megafonoAuth) {
  var uiSrefNoBack = megafonoUtils.uiSrefNoBack($ionicHistory);

  $scope.login = function login(user) {
    var fbAuth = $firebaseAuth(fb);
    fbAuth.$authWithPassword({
      email: user.email,
      password: user.password
    }).then(function(authData) {
      megafonoAuth.data = authData;
      uiSrefNoBack('complaints.list');
    }).catch(function(error) {
      console.error("ERROR: " + error);
    });
  };
});
