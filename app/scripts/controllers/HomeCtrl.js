(function() {
    function HomeCtrl(Room, Message, $uibModal) {
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
        
        this.createMessage = function(newMessage) {
            Message.createMessage(newMessage);  
        };
        
        this.messageList = Message.content;
        
        this.udpateMessageList = function(room) {
            //call Message.getMessageByRoomId(room)
            Message.getMsgByRoomId(room);
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();