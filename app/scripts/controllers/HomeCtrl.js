(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        this.chatRooms = Room.all;
        this.selectedRoom = null;
        this.messages = null;
        
        this.selectRoom = function(room) {
            this.selectedRoom = room;
            this.messages = Message.getMsgByRoomId(this.selectedRoom.$id);
        };
        
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
        
        this.createMessage = function(newMessage) {
            Message.createMessage(newMessage);  
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();