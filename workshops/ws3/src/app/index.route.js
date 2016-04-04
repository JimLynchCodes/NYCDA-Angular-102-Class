(function() {
  'use strict';

  angular
    .module('workshops')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('myContact', {
        url: '/myContacts',
        templateUrl: 'app/main/main.html',
        controller: 'MyContactController',
        controllerAs: '$ctrl'
      })
      .state('addContact', {
        url: '/addContacts',
        templateUrl: 'app/main/addContacts.html',
        controller: 'AddContactController',
        controllerAs: '$ctrl'
      });

    $urlRouterProvider.otherwise('/myContacts');
  }

})();
