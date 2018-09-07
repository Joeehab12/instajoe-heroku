function loginController($window,$http,$cookies,$scope){
    var self = this;
    this.click = function(event){
        $http.post('http://localhost:8000/login',{email: $scope.email,password: $scope.password})
        .then(function(res){
            $cookies.put('token',res.data.token);
            if (res.data.status == "success"){
                $window.location.href = 'http://localhost:8008/feed';
            }
            else{
                self.errorMessage = res.data.message;
            }
        });
    }
}
// angular.module('instajoe')
app.controller('loginController',['$window','$http','$cookies','$scope',loginController]);
