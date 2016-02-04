define(["helper/util", "handlebars", "jquery", "can"], function (util, Handlebars, $, can) {
    "use strict";

    var log = util.log.bind(util);

    var App = {

        init() {
            log("spacedRep initializing...");

            // -------

            var Person = can.Map.extend({
                define: {
                    fullName: {
                        get() {
                            return this.attr("first") + " " + this.attr("last");
                        }
                    }
                }
            });

            var person = new Person({
                first: "Icíar",
                last: "González Izquierdo"
            });

            log(person.attr("fullName"));

            person.bind("fullName", function (ev, newVal) {
                log("Cambio: " + newVal);
            });

            person.attr("first", "Ramiya");

            // -------

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
