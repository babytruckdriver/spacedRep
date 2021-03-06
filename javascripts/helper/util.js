// Objeto contenedor de utilidades.

define({

    // Muestra 'msg' por consola en caso de que la variable DEBUG sea true
    // NOTE: La varibale DEBUG en Producción siembre debe ser false
    DEBUG: true,
    log(msg) {
        "use strict";
        if (typeof msg === "object") {
            msg = JSON.stringify(msg);
        }
        if (this.DEBUG) {
            console.log(msg);
        }
    },
    domCache(list, obj) {
        "use strict";

        // Helper que convierte los selectores en nombre de variables JS Cammel Case {{ #soy-un-selector => soyUnSelector}}
        function nameMe(ori) {
            let regex1 = /^#|[\.]/g; // Selecciona el punto o almuadilla del comienzo

            let temp = ori.replace(regex1, "");
            let arrTemp = temp.split("-");
            return arrTemp.shift() + arrTemp.map((val) => val.replace(/^./g, (a) => a.toUpperCase())).join("");
        }

        // Se crea un objeto en el que crear todas las propiedades a cachear
        let tempObj = {};

        list.forEach(function (selector) {
            tempObj[nameMe(selector)] = $(selector);
        });

        // Se copian las propiedades del objeto temporal al objeto principal
        Object.assign(obj, tempObj);
    }
});
