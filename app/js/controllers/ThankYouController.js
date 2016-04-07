
NEJ.define([
    '{pro}app.js'
], function(foodMeApp) {

    foodMeApp.controller('ThankYouController', ['$scope', '$routeParams', function ThankYouController($scope, $routeParams) {
      $scope.orderId = $routeParams.orderId;
    }]);
});