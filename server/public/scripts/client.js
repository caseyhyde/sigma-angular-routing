var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/bear', {
      templateUrl: '/views/templates/bear.html',
      controller: 'BearController',
      controllerAs: 'bear'
    })
    .when('/bat', {
      templateUrl: '/views/templates/bat.html',
      controller: 'BatController',
      controllerAs: 'bat'
    })
    .when('/thing', {
      templateUrl: '/views/templates/thing.html',
      controller: 'ThingController',
      controllerAs: 'thing'
    })
    .otherwise({
      redirectTo: 'bear'
    });

}]);

app.controller('BearController', function() {
  console.log('Bear controller running');
  var self = this;
  self.message = "Bear controller is the best!";

});

app.controller('BatController', function() {
  console.log('Bat controller running');
  var self = this;
  self.message = "Bat controller is the best!";

});

app.controller('ThingController', function() {
  console.log('Thing controller is running');
  var self = this;
  self.message = "Thing controller is the best!"
});
