(function() {
    function UserNameModalCtrl(Message, $cookies, $uibModalInstance) {
        this.create = function(userName) {
            if(userName !== undefined) {
                var today = new Date();
                var expiresValue = new Date(today);
                expiresValue.setMinutes(today.getMinutes() + 1);
                $cookies.put('blocChatCurrentUser', userName, {'expires':expiresValue});
                $uibModalInstance.dismiss('cancel');   
            }
        };
    }
    
    angular
        .module('blocChat')
        .controller('UserNameModalCtrl', ['Message', '$cookies', '$uibModalInstance', UserNameModalCtrl]);
})();