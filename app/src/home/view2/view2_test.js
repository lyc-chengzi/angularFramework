'use strict';

describe('myApp.detail module', function() {

  beforeEach(module('myApp.view2'));

  describe('detail controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});