angular.module('musicAlbumApp.services', ['ngResource'])
    .value('version', '1.0')
    
    //Utilisation de la librairie elasticsearch (https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html)
    // Ce module fournit un service esFactoryy
    .service('es', ['esFactory', function (esFactory) {
        return esFactory({
            hosts: 'localhost',
            port: 8080
            log: 'trace',
            sniffOnStart: false
        });
    }])