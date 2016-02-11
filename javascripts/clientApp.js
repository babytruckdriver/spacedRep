define(["helper/util", "models/card", "handlebars", "jquery", "can", "stache"], function (util, Card, Handlebars, $, can, stache) {
    "use strict";

    var log = util.log.bind(util);

    var App = {

        init() {
            log("spacedRep initializing...");

            // -------

            window.localStorage.clear();

            this.card = new Card();
            log(this.card.attr("ownWord"));
            this.card.attr({
                foreignWord: "House",
                ownWord: "Casa",
                age: "tres"
            });
            this.card.attr({
                foreignWord: "Dog    ",
                ownWord: "Perro",
                age: "cuatro"
            });

            log("QuickView: " + this.card.attr("quickView"));

            // La plantilla (template) se actualiza automáticamente al cambiar el Modelo
            window.setTimeout(function () {
                this.card.attr("ownWord", "Cánido");
            }.bind(this), 3000);

            // -------

            this.domCache();
            this.render();
        },

        domCache() {
            this.loginArea = $(".login-tag");
            this.mainLayer = $("#main-layer");

            // Templates
            this.oneCardTemplate = can.view("../oneCardTemplate.stache");
        },

        render() {
            this.loginArea.html(Handlebars.compile($("#login-template").html()));

            // La plantilla observa cambios en el modelo 'card' de forma automática
            this.mainLayer.html(this.oneCardTemplate(this.card));
        }
    };

    // Se exporta la funcionalidad que se desea exponer
    return App;

}); // Fin requirejs define
