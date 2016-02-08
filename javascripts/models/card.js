define(["localstorage"], function (LocalStorage) {
    "use strict";

    // Basic Card entry model
    var Card = LocalStorage.extend({
        storageName: "cards-canjs"
    }, {
        init: function () {
            // Autosave when changing something
            this.bind("change", function (ev, prop) {

                // Listado de las propiedades propias de este modelo concreto
                let ownProps = Object.getOwnPropertyNames(this).filter(function (el) {
                    return !/^_/.exec(el) && !/^id/.exec(el);
                });

                // ¿Está la propiedad entre las propias del modelo?
                if (ownProps.includes(prop)) {
                    ev.target.save();
                }
            });
        }
    });

    return Card;
});
