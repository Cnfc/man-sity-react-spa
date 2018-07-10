/*global requirejs:true*/
'use strict';


requirejs.config({
    paths: {}
});


require([/* Dependencies */], function () {

    var app = {
        initialize: function () {
            // Your code here
            console.log('code is working');
        }
    };

    app.initialize();

});
$(document).foundation();
