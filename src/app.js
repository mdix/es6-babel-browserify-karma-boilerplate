import Hello from './class/Hello.js';
var Stamp = require('./stamp/Hello.js');

let hello = new Hello();
console.log(hello.sayHello());

let stamp = Stamp();
console.log(stamp.sayHello());
