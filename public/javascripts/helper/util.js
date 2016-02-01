// Objeto contenedor de utilidades.

define({

    // Muestra 'msg' por consola en caso de que la variable DEBUG sea true
    // NOTE: La varibale DEBUG en Producción siembre debe ser false
    DEBUG: true,
    log: function (msg) {
        "use strict";
        if (typeof msg === "object") {
            msg = JSON.stringify(msg);
        }
        if (this.DEBUG) {
            console.log(msg);
        }
    }
});
