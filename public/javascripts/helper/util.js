/*jslint indent:8, devel:true, browser:true, vars:true*/
/*global define*/

// Objeto contenedor de utilidades.

define({

        // Muestra 'msg' por consola en caso de que la variable DEBUG sea true
        // NOTE: La varibale DEBUG en Producción siembre debe ser false
        DEBUG: true,
        log: function (msg) {
                "use strict";
                if (this.DEBUG) {
                        console.log(msg);
                }
        }
});