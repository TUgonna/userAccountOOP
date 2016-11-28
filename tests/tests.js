(function(){
  'use strict';

  var chai = require('chai');
  var expect = chai.expect;

  var myApp = require('../app/library.js');

  var userOne=new myApp.userAccount("Ugonna Thelma", "TUgonna", "hello123");

  describe("OOP User Creation and Change Password Test", function() {
  describe("Case to test Change password", function() {

    it("should return 'password is incorrect' when currentpassword argument is hello", function() {
      expect(userOne.changePassword("hello", "newpassword")).to.equal('password is incorrect');
    });

    it("should return 'password has been changed to hello643' when currentpassword argument is hello123", function() {
      expect(userOne.changePassword("hello123", "hello643")).to.equal('password has been changed to hello643');
    });

  });




});



    
})();
