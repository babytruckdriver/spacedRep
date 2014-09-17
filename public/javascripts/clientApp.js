/*jslint indent: 8, devel: true, browser: true, vars: true, nomen: true*/
/*global jQuery, $, Handlebars, define*/

define(["helper/util", "handlebars", "jquery", "underscore", "backbone"], function (util, Handlebars, $, _, Backbone) {
        "use strict";

        var log = util.log.bind(util);

        var App = {

                init: function () {
                        log("spacedRep initializing...");
                        /*log("util: " + typeof util);
                        log("Handlebars: " + typeof Handlebars);
                        log("$: " + typeof $);
                        log("_: " + typeof _);
                        log("Backbone: " + typeof Backbone);*/

                        var UserModel = Backbone.Model.extend({
                                defaults: {
                                        userInfo: {}
                                },
                                initialize: function () {
                                        log("Creating a new User Model instance..");
                                        this.on("change:userInfo.name", function () {
                                                log("The name field has been changed.");
                                        });
                                        this.on("change:userInfo.pass", function () {
                                                log("The pass field has been changed.");
                                        });
                                        this.on("invalid", function (model, error) {
                                                log(error);
                                                //TODO: Mostrar en pantalla que algo ha ido mal
                                        });
                                },
                                validate: function (attrs) {

                                        // NOTE: En este punto no es posible cambiar las propiedades de "attrs", a no ser que estén en el interior de un objeto (attrs.userInfo.name)
                                        if (!attrs.hasOwnProperty("userInfo")) {
                                                return "I need user information :/";
                                        } else {
                                                if (attrs.userInfo.hasOwnProperty("name")) {
                                                        attrs.userInfo.name = attrs.userInfo.name.trim();
                                                } else {
                                                        return "I need an user name :/";
                                                }

                                                if (!attrs.userInfo.hasOwnProperty("pass")) {
                                                        return "I need an user pass :/";
                                                }
                                        }
                                }
                        });

                        /*var me = new User();

                        var attrs = {
                                userInfo: {
                                        name: " smux ",
                                        pass: "abcdef"
                                }
                        };

                        me.set(attrs, {validate: true});

                        log(me.get("userInfo").name);*/

                        var LoginView = Backbone.View.extend({

                                tagName: "div",
                                el: $(".login-tag"),

                                // Cache the template function for a single item.
                                loginTpl: Handlebars.compile($('#login-template').html()),

                                events: {
                                        'change #name': "login",
                                        'change #pass': "login",
                                },

                                initialize: function (options) {
                                        // In Backbone 1.1.0, if you want to access passed options in
                                        // your view, you will need to save them as follows:
                                        //this.options = options || {};
                                        this.model = new UserModel();
                                        this.render();
                                },

                                // Re-render the title of the todo item.
                                render: function () {
                                        this.$el.html(this.loginTpl(this.model.attributes));
                                        //this.input = this.$('.edit');
                                        return this;
                                },

                                login: function () {
                                        log("You are triying to login!");
                                }
                        });

                        var loginView = new LoginView();


                }
        };

        // Se exporta la funcionalidad que se desea exponer
        return App;

}); // Fin requirejs define
