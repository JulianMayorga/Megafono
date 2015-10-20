var fb = null;
var auth = null;

angular.module('Megafono.Firebase', ['firebase'])

.run(function ($firebaseAuth) {
  fb = new Firebase('https://megafono.firebaseio.com');
  auth = $firebaseAuth(fb);
});
