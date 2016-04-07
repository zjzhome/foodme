
NEJ.define([
    '{pro}app.js',
    '{pro}services/customer.js'
], function(foodMeApp) {

    foodMeApp.directive('fmDeliverTo', function() {
      return {
        restrict: 'E',
        templateUrl: '/js/directives/fmDeliverTo.html',
        scope: {},
        controller: ['$scope', 'customer', function FmDeliverToController($scope, customer) {
          $scope.customer = customer;
        }]
      };
    });

});
