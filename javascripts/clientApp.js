define(["helper/util", "handlebars", "jquery", "can"], function (util, Handlebars, $, can) {
    "use strict";

    var log = util.log.bind(util);

    var App = {

        init() {
            log("spacedRep initializing...");

            // Observable object
            var person = new can.List(["Icíar", "González"]);

            var info = can.compute(function () {
                return person.join(" ") + " rules!";
            });

            log(info());

            info.bind("change", function (ev, newVal) {
                log("Cabió!: " + newVal);
            });

            person.pop();

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
