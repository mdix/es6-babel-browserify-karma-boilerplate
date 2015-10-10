const stampit = require('stampit');

var Stamp =
    stampit()
        .methods({
            sayHello: function() {
                return 'Hello';
            }
        });

module.exports = Stamp;
