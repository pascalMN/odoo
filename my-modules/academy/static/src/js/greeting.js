odoo.define('academy.Greeting', function (require) {
    "use strict";
    var Greeting = {
        greet: function (name) {
            console.log('hello ', name);
        }
    };

    return Greeting;
});
