(function() {
    function RoomModalCtrl($scope, Room, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.create = function() {
            Room.createRoom($scope.name);
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('RoomModalCtrl', ['$scope', 'Room', '$uibModalInstance', RoomModalCtrl]);
})();