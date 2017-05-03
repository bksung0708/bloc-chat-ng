(function() {
  function Room($firebaseArray, $cookies) {
    var Room = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(Room);

    return {
        all: rooms,
        createRoom: function(name){
            rooms.$add({roomName: name});
        }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', '$cookies', Room]);
})();