(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    return {
        getMsgByRoomId: function(roomId) {
            //messages.orderByChild('roomId').EqualTo(roomId);
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
       
        },
        createMessage: function(newMessage, roomId) {
            messages.$add({content:newMessage, roomId:roomId});
        }
    };
  
  }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();