(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    return {
        getMsgByRoomId: function(roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
       
        },
        send: function(newMessage, roomId) { 
            var userName = $cookies.get('blocChatCurrentUser');
            messages.$add({content:newMessage, userName: userName, roomId:roomId});
        }
    };
  }

//moment.js
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();