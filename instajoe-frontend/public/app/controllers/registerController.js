function registerController ($window,$http,$cookies,$scope){
    var self = this;
    this.click = function(event){
        $http.post('http://localhost:8000/register',{email:$scope.email,password:$scope.password,username: $scope.username,fullName:$scope.fullName}).then(function(res){
            if (res.data.status == 'success'){
                $http.post('http://localhost:8000/login',{email:$scope.email,password:$scope.password})
                .then(function(res){
                    if (res.data.status == "success"){
                        $cookies.put('token',res.data.token);
                        $window.location.href = 'http://localhost:8008/feed';
                    }
                });
            }
            else{
                self.error_msg = res.data.message;
            }
        });
    }
}
// angular.module('instajoe')
app.controller('registerController',['$window','$http','$cookies','$scope',registerController]);
