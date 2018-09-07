angular.module('instajoe',['ngCookies']);

function registerController ($window,$http,$cookies,$scope){
    var self = this;
    this.click = function(event){
        $http.post('http://localhost:8000/register',{email:$scope.email,password:$scope.password,username: $scope.username,fullName:$scope.fullName}).then(function(res){
            if (res.data.status == 'success'){
                $window.location.href = 'http://localhost:8008/feed';
            }
            else{
                self.error_msg = res.data.message;
            }
        });
    }
}

angular.module('instajoe').controller('registerController',['$window','$http','$cookies','$scope',registerController]);
