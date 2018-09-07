angular.module('instajoe',['ngCookies']);
// import jwt_decode from 'jwt-decode';
function feedController($scope,$http,$cookies){
    var token = $cookies.get('token');
    var decoded = jwt_decode(token);
    this.username = decoded.username;
    this.fullName = decoded.fullName;
    angular.element(document.querySelector('.regular-img')).attr('src',decoded.profilePic);
}

angular.module('instajoe').controller('feedController',['$scope','$http','$cookies',feedController]);
