import Hello from '../../src/class/Hello.js';

describe('object from Hello class', function () {
    it('should be able to say hello', () => {
        let hello = new Hello();
        expect(hello.sayHello()).toEqual('Hello');
    });
});
