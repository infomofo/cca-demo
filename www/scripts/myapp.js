var app = angular.module("myapp", []);

app.controller('myctrl', function($scope, $q){
	$scope.avatar = "https://www.gravatar.com/avatar/2686311a342b32f10b3b75144491e58a?s=128&d=identicon&r=PG";
	$scope.storedImage = null;
	var deferred = $q.defer();
	var xhr = new XMLHttpRequest();
	xhr.open('GET', $scope.avatar, true);
	xhr.responseType = 'blob';
	xhr.onload = function(e) {
  	console.log('Fetched image via XHR: ' + e);
  	var reader = new window.FileReader();
		reader.readAsDataURL(this.response);
		reader.onloadend = function() {
			var base64data = reader.result;
  	  console.log('Fetched image via XHR: ' + base64data);
			$scope.storedImage = base64data;
			$scope.$digest();
		};
	};
	xhr.send();
});
