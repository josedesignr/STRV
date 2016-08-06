'use strict';

angular.module('strv').filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});