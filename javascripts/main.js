require.config({
    baseUrl: "javascripts",
    paths: {
        jquery: "../node_modules/jquery/dist/jquery.min",
        handlebars: "../node_modules/handlebars/dist/handlebars.amd.min",
        can: "../node_modules/can/dist/amd/can",
        localstorage: "../node_modules/canjs-localstorage/can.localstorage"
    }
});

require(["clientApp"], function (Application) {
    "use strict";
    Application.init();
});
