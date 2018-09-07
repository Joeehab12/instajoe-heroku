function photoController($scope,$http,$cookies,$rootScope){
    $scope.$on('dataAdded', function(event, photos) {
        console.log(photos);

    });
}
angular.module('instajoe').controller('photoController',['$scope','$http','$cookies','$rootScope',photoController]);
