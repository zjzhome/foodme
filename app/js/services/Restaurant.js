
NEJ.define([
    '{pro}app.js'
], function(foodMeApp) {

    foodMeApp.factory('Restaurant', ['$resource', function($resource) {
      return $resource('/api/restaurant/:id', {id: '@id'});
    }]);

});
