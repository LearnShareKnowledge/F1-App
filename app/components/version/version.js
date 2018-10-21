'use strict';

angular.module('myF1App.version', [
  'myF1App.version.interpolate-filter',
  'myF1App.version.version-directive'
])

.value('version', '0.1');
