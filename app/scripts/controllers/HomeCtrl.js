(function() {
    function HomeCtrl(Room, $uibModal) {
        this.chatRooms = Room.all;
        
        this.clickModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'templates/modal.html',
                controller: 'ModalCtrl',
                size: 'md'
            });
            modalInstance.result.then(function(data) {
 				Room.createRoom(data);
 			});
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','$uibModal', HomeCtrl]);
})();