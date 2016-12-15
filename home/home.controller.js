(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope'];
    function HomeController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];

        initController();

        function initController() {
            console.log(getAuthUser())
        }

        function getAuthUser()
        {
           return JSON.parse(localStorage.getItem('auth_alugalogo'));
        }
    }

})();