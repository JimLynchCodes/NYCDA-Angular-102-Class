(function() {
  'use strict';

  angular
    .module('playlistHomework')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
