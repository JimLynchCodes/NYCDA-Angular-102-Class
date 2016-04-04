(function() {
  'use strict';

  angular
    .module('workshops')
    .controller('MyContactController',
  function ($log, DataHolder, Contact) {
    var self = this;
    self.contactArray = DataHolder.contactArray;

    createAContact();

    function createAContact() {
      var contact = new Contact();
      DataHolder.contactArray.push(contact);
      contact.doSomething();
      $log.log("contact.firstName: " + contact.firstName);
    }


  });

})();
