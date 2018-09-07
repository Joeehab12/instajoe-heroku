

function registerValidationController($scope){
    $scope.submitForm = function isValid(){
        if (isValid){
            alert('our form is amazing');
        }
    }
}

angular.module('instajoe').controller('registerValidationController',registerValidationController);
