/*jslint indent:8, devel:true, browser:true, vars:true*/
/*global jQuery, $, Handlebars, define*/

define(["helper/util", "handlebars", "jquery", "underscore", "backbone"], function (util, Handlebars, $, _, Backbone) {
        "use strict";

        var log = util.log.bind(util);

        var App = {

                init: function () {
                      log("spacedRep initializing...");
                }
        };

        //Se exporta la funcionalidad que se desea exponer
        return {
                "App" : App
        };

}); //Fin requirejs define
