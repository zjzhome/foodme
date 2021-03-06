
NEJ.define([
    '{pro}app.js',
    '{pro}services/cart.js',
    '{pro}services/customer.js'
], function(foodMeApp) {

  foodMeApp.controller('CheckoutController', ['$scope', 'cart', 'customer', '$location',
      function CheckoutController($scope, cart, customer, $location) {

    $scope.cart = cart;
    $scope.restaurantId = cart.restaurant.id;
    $scope.customer = customer;
    $scope.submitting = false;


    $scope.purchase = function() {
      if ($scope.submitting) return;

      $scope.submitting = true;
      cart.submitOrder().then(function(orderId) {
        $location.path('thank-you').search({orderId: orderId});
      });
    };
  }]);

});