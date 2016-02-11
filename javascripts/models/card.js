define(["localstorage"], function (LocalStorage) {
    "use strict";

    // Basic Card entry model
    var Card = LocalStorage.extend({
        storageName: "cards-canjs"
    }, {
            // Instance properties
        define: {
            ownWord: {
                value: "default", // FIXME: No está cogiendo el valor por defecto: "undefined"
                type: "string",
                set(newValue) {
                    return newValue.trim();
                }
            },
            foreignWord: {
                value: "",
                type: "string",
                set(newValue) {
                    return newValue.trim();
                }
            },
            pronunciation: {
                value: "",
                type: "string",
                set(newValue) {
                    return newValue.trim();
                }
            },
            quickView: {
                get() {
                    return this.attr("ownWord") + ": " + this.attr("foreignWord") + " " + this.attr("pronunciation");
                }
            }
        },

        init() {

            // Autosave when changing something
            this.bind("change", function (ev, prop) {

                // Listado de las propiedades propias de este modelo concreto
                let ownProps = Object.getOwnPropertyNames(this).filter(function (el) {
                    return !/^_/.exec(el) && !/id/.exec(el);
                });

                // ¿Está la propiedad entre las propias del modelo?
                if (ownProps.includes(prop)) {
                    ev.target.save();
                }
            });

            // La modificación de una propiedad lanza un evento con el nombre de la propiedad
            // FUTURE: Esto puede ser util... para algo :/
            this.bind("ownWord", function (ev, newVal, oldVal) {
                console.log("La propiedad 'ownWord' ha cambiado: " + oldVal + " -> " + newVal);
            });
        }
    });

    return Card;
});
