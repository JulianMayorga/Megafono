var fb = null;

angular.module('Megafono.Firebase', ['firebase'])

.run(function () {
  fb = new Firebase('https://megafono.firebaseio.com');
});
