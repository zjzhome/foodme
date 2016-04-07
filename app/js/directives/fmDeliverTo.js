
NEJ.define([
    '{pro}app.js'
], function(foodMeApp) {

    foodMeApp.directive('fmDeliverTo', function() {
      return {
        restrict: 'E',
        templateUrl: '/js/directives/fmDeliverTo.html',
        scope: {},
        controller: function FmDeliverToController($scope, customer) {
          $scope.customer = customer;
        }
      };
    });

});
