odoo.define('academy.HelloWorld', function (require) {
    "use strict";

    var greeter = require('academy.Greeting');
    greeter.greet('Mateusz');
});