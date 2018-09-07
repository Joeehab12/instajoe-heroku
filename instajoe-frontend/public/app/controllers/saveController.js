function saveController($scope,$http,$cookies){
    var token = $cookies.get('token');
    var decoded = jwt_decode(token);
    var self = this;
    this.click = function(event){
        $http.post("http://localhost:8000/photo/" + decoded.id + '?token=' + token,
        {caption:$scope.caption,
        location:$scope.location,
        url: "http://localhost:8008/assets/" + decoded.id + "/" + angular.element(document.querySelector(".file_browse"))[0].files[0].name
        })
        .then(function(res){
                self.message = res.data.message;
        });
    }
}

app.controller('saveController',['$scope','$http','$cookies',saveController]);
