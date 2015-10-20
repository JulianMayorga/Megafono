angular.module('Megafono.Utils', [ ])

.factory('megafonoUtils', function () {
  return new MegafonoUtils();
});

var MegafonoUtils = function ($ionicHistory, $state) {
  this.uiSrefNoBack = function (state) {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $state.go(state);
  };
};
