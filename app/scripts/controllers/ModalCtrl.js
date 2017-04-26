(function() {
    function ModalCtrl($scope, Room, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.create = function() {
            Room.createRoom($scope.name);
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', 'Room', '$uibModalInstance', ModalCtrl]);
})();