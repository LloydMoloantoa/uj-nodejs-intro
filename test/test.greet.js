const assert = require('assert'); 
const greet = require('../greet');
describe('The greet function', function(){

    it('should greet', function(){
        assert.equal("Hello, Lloyd", greet("Lloyd"));
    }); 

});