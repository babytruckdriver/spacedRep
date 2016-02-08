define(["helper/util", "models/card", "handlebars", "jquery", "can", "stache"], function (util, Card, Handlebars, $, can, stache) {
    "use strict";

    var log = util.log.bind(util);

    var App = {

        init() {
            log("spacedRep initializing...");

            // -------

            window.localStorage.clear();

            this.card = new Card();
            this.card.attr({
                foreignWord: "House",
                ownWord: "Casa"
            });
            this.card.attr({
                foreignWord: "Dog",
                ownWord: "Perro"
            });

            // La vista (template) se actualiza automáticamente al cambiar el Modelo
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
        },

        render() {

            let oneCardTemplate = stache($("#one-card-template").html());
            //Handlebars.compile($("#one-card-template").html())({foreignWord: "Word", ownWord: "Palabra"})

            this.loginArea.html(Handlebars.compile($("#login-template").html()));
            this.mainLayer.html(oneCardTemplate(this.card));
        }
    };

    // Se exporta la funcionalidad que se desea exponer
    return App;

}); // Fin requirejs define
