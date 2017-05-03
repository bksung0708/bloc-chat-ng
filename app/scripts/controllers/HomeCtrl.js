(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        this.chatRooms = Room.all;
        this.selectedRoom = null;
        this.messages = null;
        
        this.selectRoom = function(room) {
            this.selectedRoom = room;
            this.messages = Message.getMsgByRoomId(this.selectedRoom.$id);
        };
        
        this.sendMessage = function() {
            Message.send(this.newMessage, this.selectedRoom.$id, this.userName);
        };
        
        this.clickModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'templates/roomModal.html',
                controller: 'RoomModalCtrl',
                size: 'md'
            });
            
            modalInstance.result.then(function(data) {
 				Room.createRoom(data);
 			});
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();