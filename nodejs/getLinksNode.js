/**
Escriba un programa de nodo que lea la página https://nodejs.org/api/all.html y escriba en un archivo 
(y le muestre contenido después de leerlo) los vínculos internos que contienen algo de texto pasado como parámetro.

$ nodo getLinksNode.js createServer El archivo se guardó! 
https://nodejs.org/api/all.html#http_http_createserver_requestlistener 
https://nodejs.org/api/all.html#https_https_createserver_options_requestlistener 
https://nodejs.org/api/all.html#net_net_createserver_options_connectionlistener 
https://nodejs.org/api/all.html#tls_tls_createserver_options_secureconnectionlistener

$ nodo getLinksNode.js readFile El archivo se guardó! 
https://nodejs.org/api/all.html#fs_fs_readfile_file_options_callback 
https://nodejs.org/api/all.html#fs_fs_readfilesync_file_options
 */

const fs = require('fs');

function escribirArchivo(nombreArchivo, contenidoArchivo) {
    fs.writeFile(nombreArchivo, contenidoArchivo, err => {
        if (!err) {
            console.log(`El archivo ${nombreArchivo} fue creado exitosamente`);
        } else {
            console.log(err);
        }
    });
}

function leerArchivo(nombreArchivo) {
    fs.readFile(nombreArchivo, 'utf-8', (err, data) => {
        if (!err) {
            console.log(data);
        } else {
            console.log(err);
        }
    });
}

function getInfoUrl(nombreUrl) {
    let url = new URL(nombreUrl);
    url.searchParams.set("txt", "esto es texto de ejemplo");
    txtRet = `
    Href: ${url.href}  
    Protocolo: ${url.protocol}  
    Puerto: ${url.port}
    `;

    return txtRet;
}
let url = "https://nodejs.org/api/all.html#http_http_createserver_requestlistener";

let contenidoArchivo = getInfoUrl(url);

let nombreArchivo = "infoUrl.txt";

escribirArchivo(nombreArchivo, contenidoArchivo);
leerArchivo(nombreArchivo);





