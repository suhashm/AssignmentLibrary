
//uploadAssignmentController for uploading actions

learningModule.controller('uploadAssignmentController', function($scope, $http){
    $scope.showLogin = false;

    $scope.showLoginForm = function(){
        $scope.showLogin = true;
    }
});
