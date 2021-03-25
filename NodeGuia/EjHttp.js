const http = require('http');//usar HTTPS si se tiene un certificado
const url2 = require('url');//Para analizar urls
const path2 = require('path');//para manipular rutas de sistemas de archivos
const fs2 = require('fs');//para leer archivos
const { Readable } = require('stream');

function serve(routeDirectory, port) {
    let server = new http.Server();//se crea un nuevo servidor http
    server.listen(port);//Escucha en el puerto especificado
    console.log(`Escuchando en el puerto ${port}`);

    server.on("request", (request, response) => {//cuando lleguen solicitudes las manipulamos con esta funcion
        let endpoint = url2.parse(request.url).pathname;
        if (endpoint === "/test/mirror") {
            response.setHeader("Content-Type", "text/plain; charser-UTF-8");
            response.writeHead(200);//se especifica el codigo de estado de la respuesta
            response.write(`${request.method} ${request.url} HTTP/${//esto sería el cuerpo(body) de la respuesta
                request.httpVersion
                }\r\n`);
            let headers = request.rawHeaders;
            for (let k = 0; k < headers.length; k += 2) {
                response.write(`${headers[k]}: ${headers[k + 1]}\r\n`);
            }
            response.write("\r\n");
            request.pipe(response);//Copiamos cualuier cuerpo del request al cuerpo del response, dado que ambos son flujos.
        } else if (endpoint === "/test/file") {
            let fileName = process.argv[2];
            fileName = fileName.replace(/\.\.\\/g, "");//remplaza cualquier ../ por vacio
            fileName = path2.resolve(routeDirectory, fileName);//Convertimos una ruta relativa a auna ruta absoluta
            console.log(fileName);
            let typeFile;

            switch (path2.extname(fileName)) {
                case '.html':
                case '.htm':
                    typeFile = 'text/html';
                    break;
                case '.js':
                    typeFile = 'text/javascript';
                    break;
                case '.css':
                    typeFile = 'text/css';
                    break
                case '.png':
                    typeFile = 'image/png';
                    break
                case '.txt':
                    typeFile = 'text/plain';
                    break
                default:
                    typeFile = 'application/octet-stream';
                    break;
            }

            let stream = fs2.createReadStream(fileName);
            stream.once('readable',() => {
                response.setHeader('Content-Type',typeFile);
                response.writeHead(200);
                stream.pipe(response);
            });
            stream.on('error', err => {
                response.setHeader('Content-Type','text/plain; charset = UTF-8');
                response.writeHead(404);
                response.end(err.message);
            });
        }
    });
}
serve(process.argv[2] || "/tmp", parseInt(process.argv[3] || 8002));
