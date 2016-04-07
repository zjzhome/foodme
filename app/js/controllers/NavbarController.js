
NEJ.define([
    '{pro}app.js'
], function(foodMeApp) {

    foodMeApp.controller('NavbarController', function NavbarController($scope, $location) {

      $scope.routeIs = function(routeName) {
        return $location.path() === routeName;
      };

    });

});

