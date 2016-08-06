'use strict';
/**
 * @ngdoc function
 * @name hrdirektApp.controller:TableCtrl
 * @description
 * # TableCtrl
 * Controller of the hrdirektApp
 */
angular.module('strv').controller('CommentsCtrl', ['$scope', '$http', function ($scope, $http) {


	$scope.comments = [];

	$http.get('json/comments.json').success(function(data) {
      $scope.amountComments = data.comments.length;
      $scope.comments = data.comments;
    });

    $scope.myAvatar = "avatar-me.png";

    $scope.commentNotSent = "";

    $scope.addReview = function(_comment){
    	$scope.objToAdd = {
    		"Avatar": $scope.myAvatar,
    		"Name": "Álvaro José",
    		"Lastname": "Solís",
    		"Date": Date.now(),
    		"Comment": _comment,
    		"Replies": []
    	}
		$scope.comments.push($scope.objToAdd);
		$scope.commentNotSent = "";
	};

}]);
