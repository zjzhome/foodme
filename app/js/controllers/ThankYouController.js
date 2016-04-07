
NEJ.define([
    '{pro}app.js'
], function(foodMeApp) {

    foodMeApp.controller('ThankYouController', function ThankYouController($scope, $routeParams) {
      $scope.orderId = $routeParams.orderId;
    });

});