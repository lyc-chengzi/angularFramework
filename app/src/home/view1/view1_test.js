'use strict';

describe('myApp.list module', function() {

  beforeEach(module('myApp.view1'));

  describe('list controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});