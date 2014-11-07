var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
	return {message: 'Data from service'}
})

myApp.filter('reverse', function() {
	return function(text) {
		return text.split('').reverse().join('');

	}
}) 


function control1 ($scope, Data){
  $scope.data = Data;
}

function control2 ($scope, Data){
  $scope.data = Data;

  $scope.splitData = function(message) {
  	return angular.uppercase(message);
  }
}

function control3 ($scope, Data){
  $scope.data = Data;

  $scope.reversedData = function(message) {
  	return message.split('').reverse().join('');
  }
}