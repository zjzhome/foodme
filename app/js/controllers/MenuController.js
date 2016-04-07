
NEJ.define([
    '{pro}app.js',
    '{pro}services/Restaurant.js',
    '{pro}services/cart.js'
], function(foodMeApp) {

    foodMeApp.controller('MenuController',
        function MenuController($scope, $routeParams, Restaurant, cart) {

      $scope.restaurant = Restaurant.get({id: $routeParams.restaurantId});
      $scope.cart = cart;

    });

});