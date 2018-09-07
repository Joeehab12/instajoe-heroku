var app = angular.module('instajoe',['ngCookies']);


function profileController($scope,$http,$cookies,$rootScope){
    var token = $cookies.get('token');
    var decoded = jwt_decode(token);
    var self = this;
    $http.get("http://localhost:8000/photos/" + decoded.id + "?token=" + token).
    then(function(res){
        // console.log(res.data);
        var photos = res.data.photos;
        self.photos = photos;
        $rootScope.photos = photos;
        $rootScope.$broadcast('dataAdded',photos);
        // console.log($rootScope);
        var photo_count = 0;
        var photo_map = {
            0: "first",
            1: "second",
            2: "third"
        }
        angular.element(document.querySelector('.gallery')).append('<div class = "photos-row">');
        photos.forEach(function(photo){
            angular.element(document.querySelector('.photos-row:last-child')).append('<div class = "' + photo_map[photo_count%3] +'">'
            + '<a href="javascript:void(0)"><img class = "photo-thumbnail" src = "' + photo.photo_url + '" width = "293" height = "293"></a></div>');
            if (photo_count % 3 == 2){
                angular.element(document.querySelector('.gallery')).append('<div class = "photos-row">');
            }
            photo_count++;
        });
    });
}



app.controller('profileController',['$scope','$http','$cookies','$rootScope',profileController]);

// export { photos };
