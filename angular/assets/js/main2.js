var myApp = angular.module('myApp', []);
myApp.factory('Avengers', function() {
	var Avengers = {};
	Avengers.cast = [
      {
        name: "Dario ",
        character: "Computer Science",
        age: "Studio Art"
      },
      {
        name: "Devan",
        character: "International Relations",
        age: "Philosophy"
      },
      {
        name: "Ben",
        character: "Buisness",
        age: "Stern"
      },
      {
        name: "Morgan",
        character: "Criminal Science",
        age: "???"
      }
    ];

	return Avengers;
})

function AvengersCtrl ($scope, Avengers) {
	$scope.avengers = Avengers;
}