/**
 * Created by bobolicious3000 on 3/16/16.
 */
(function() {
  'use strict';

  angular
    .module('workshops')
    .factory('Contact', function($log, $http) {
        var self = this;


      function Contact () {
          var self = this;
          $log.log("Creating a contact: " + self.firstName)
        self.firstName = "Jim";
        self.lastName = "Jim";
        self.phoneNumber = "609-432-5555";

        self.doSomething = function() {
          $log.log("Doing something.");
        }

      }



      return Contact;

  })

})();
