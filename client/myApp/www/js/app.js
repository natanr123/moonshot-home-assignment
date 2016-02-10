angular.module('starter', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('QuestionController', ['$scope','$http', function($scope,$http) {
	var server = 'http://54.200.56.193:8000';
	$scope.selectedQuestionDetails = {'id':null,'title':null,'description':null,'author':null};
	$scope.authorName = '';
	var questionsListUrl = server+'/questions/';
	$http.get(questionsListUrl,{})
	
	.then(function(response)
	{
		console.log(response);
		$scope.questionsSrc = response.data;
	});
	
	$scope.onQuestionItemClicked = function(selectedQuestionId)
	{
		var questionUrl = server+'/questions/'+selectedQuestionId;
		$http.get(questionUrl,{})
		.then(function(response)
		{
			var question = response.data;
			console.log(question);
			$scope.selectedQuestionDetails.id = question.id;
			$scope.selectedQuestionDetails.title = question.title;
			$scope.selectedQuestionDetails.description = question.description;
			var autherUrl = question.author;
			console.log(autherUrl);
			return $http.get(autherUrl,{})
		})
		.then(function(response)
		{
			console.log(response.data);
			$scope.selectedQuestionDetails.authorName = response.data.username;
		})
		
	}
}]);

