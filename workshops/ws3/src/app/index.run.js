(function() {
  'use strict';

  angular
    .module('workshops')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
