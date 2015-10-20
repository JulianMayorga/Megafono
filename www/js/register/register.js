angular.module('Megafono.Register', [])

.config(function($stateProvider) {
  $stateProvider.state('register', {
    url: '/register',
    templateUrl: 'js/register/register.html',
    controller: 'RegisterController'
  });
})

.controller('RegisterController', function($scope, $ionicHistory, $firebaseAuth, megafonoUtils) {
  var uiSrefNoBack = megafonoUtils.uiSrefNoBack($ionicHistory);

  $scope.register = function register(user) {
    var fbAuth = $firebaseAuth(fb);
    fbAuth.$createUser({
      email: user.email,
      password: user.password
    }).then(function() {
      return fbAuth.$authWithPassword({
        email: user.email,
        password: user.password
      });
    }).then(function(authData) {
      uiSrefNoBack('complaints.list');
    }).catch(function(error) {
      console.error('ERROR ' + error);
    });
  };

});
