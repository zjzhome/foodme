
NEJ.define([
    '{pro}app.js'
], function(foodMeApp) {

  angular.module('foodMeApp.filters', [])
    .filter('dollars', function() {
      var DOLLARS = {
        1: '$',
        2: '$$',
        3: '$$$',
        4: '$$$$',
        5: '$$$$$'
      }

      return function(dollarCount) {
        return DOLLARS[dollarCount]
      };
    });

});