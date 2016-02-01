define(["helper/util", "handlebars", "jquery"], function (util, Handlebars, $) {
    "use strict";

    var log = util.log.bind(util);

    var App = {

        init() {
            log("spacedRep initializing...");
            this.domCache();
            this.render();
        },

        domCache() {
            this.loginArea = $(".login-tag");
        },

        render() {
            this.loginArea.html(Handlebars.compile($("#login-template").html()));
        }
    };

    // Se exporta la funcionalidad que se desea exponer
    return App;

}); // Fin requirejs define
