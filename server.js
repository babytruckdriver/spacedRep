/**
 * Static HTTP Server
 *
 * Create a static file server instance to serve files
 * and folder in the './public' folder
 */

// modules
var static = require( "node-static" ),
    port = 8080,
    http = require( "http" );

// config
var file = new static.Server( "", {
    cache: 0,
    gzip: true
} );

// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( port );

console.log("El servidor de archivos estáticos está ejecutando en\n  => http://localhost:" + port + "/\nCTRL + C para apagar.");
