'use strict';

describe('myF1App.version module', function() {
  beforeEach(module('myF1App.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
