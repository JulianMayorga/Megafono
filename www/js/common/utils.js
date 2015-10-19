angular.module('Megafono.Utils', [])

.factory('megafonoUtils', function($state) {
  var MegafonoUtils = function() {
    this.uiSrefNoBack = function(ionicHistory) {
      ionicHistory.nextViewOptions({
        disableBack: true
      });
      return function (state) {
        $state.go(state);
      };
    };
  };

  return new MegafonoUtils();
});
