require.config({
    baseUrl: "javascripts",
    paths: {
        jquery: "../node_modules/jquery/dist/jquery.min",
        handlebars: "../node_modules/handlebars/dist/handlebars.amd.min"
    }
});

require(["clientApp"], function (Application) {
    "use strict";
    Application.init();
});
