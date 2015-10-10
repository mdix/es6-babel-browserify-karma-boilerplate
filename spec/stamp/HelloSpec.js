var Stamp = require('../../src/stamp/Hello.js');

describe('object from Hello stamp', function () {
    it('should be able to say hello', () => {
        let hello = Stamp();
        expect(hello.sayHello()).toEqual('Hello');
    });
});
