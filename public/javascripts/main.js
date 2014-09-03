/*jslint indent:8, devel:true, browser:true, vars:true*/
/*global require*/

require.config({
        baseUrl: "javascripts",
        paths: {
                jquery: "vendor/jquery-2.1.1",
                handlebars: "vendor/handlebars-v1.3.0",
                underscore: "vendor/underscore-min-v1.7.0",
                backbone: "vendor/backbone-min-v1.1.2"
        },
        shim: { //Se configuran los módulos no AMD
                handlebars: {
                        exports: "Handlebars"
                }
        }
});

require(["clientApp"], function (Application) {
        "use strict";
        Application.App.init();
});
