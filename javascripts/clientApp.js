define(["helper/util", "models/card", "handlebars", "jquery", "can"], function (util, Card, Handlebars, $, can) {
    "use strict";

    var log = util.log.bind(util);

    var App = {

        init() {
            log("spacedRep initializing...");

            // -------
            window.localStorage.clear();

            var card = new Card()
            card.attr({
                foreignWord: "House",
                ownWord: "Casa"
            });
            card.attr({
                foreignWord: "Dog",
                ownWord: "Perro"
            });
            card.attr({
                ownWord: "Perrele"
            });


            // -------

            this.domCache();
            this.render();
        },

        domCache() {
            this.loginArea = $(".login-tag");
            this.mainLayer = $("#main-layer");
        },

        render() {
            this.loginArea.html(Handlebars.compile($("#login-template").html()));
            this.mainLayer.html(Handlebars.compile($("#one-card-template").html())({foreignWord: "Word", ownWord: "Palabra"}));
        }
    };

    // Se exporta la funcionalidad que se desea exponer
    return App;

}); // Fin requirejs define
