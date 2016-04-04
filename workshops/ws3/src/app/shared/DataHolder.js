/**
 * Created by bobolicious3000 on 3/16/16.
 */
(function() {
  'use strict';

  angular
    .module('workshops')
    .service('DataHolder', function($log) {
      var self = this;

      self.contactArray = [];

      $log.log("DataHolder initalized.");

    });


})();
