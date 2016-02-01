require.config({
    baseUrl: "javascripts",
    paths: {
        jquery: "vendor/jquery-2.1.1",
        handlebars: "vendor/handlebars-v1.3.0"
    },
    shim: { //Se configuran los módulos no AMD
        handlebars: {
            exports: "Handlebars"
        }
    }
});

require(["clientApp"], function (Application) {
    "use strict";
    Application.init();
});
