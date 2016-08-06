'use strict';
/**
 * @ngdoc function
 * @name hrdirektApp.controller:TableCtrl
 * @description
 * # TableCtrl
 * Controller of the hrdirektApp
 */
angular.module('strv').controller('CommentsCtrl', ['$scope', '$http', function ($scope, $http) {


	$http.get('json/comments.txt').success(function(data) {
      //$scope.amountComments = data.comments.length;
      $scope.comments = data.comments;
      console.log("DATA:");
      console.log($scope.comments[0]);
    });

}]);
