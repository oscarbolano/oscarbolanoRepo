/**
 * NodeJs:
 * No se ejecuta en un navegador si no que ya es un entorno ejecutando codigo javascript en un sistema operativo.
 * V8: Es el motor de JavaScript para google chrome, este fue tomado para que se ejecute en el sistema operativo.
 * SpiderMonkey: Motor de JavaScript para firefox.
 * 
 * lodash: https://www.npmjs.com/package/lodash -> esta es una librería de ejemplo npm
 * 
 */

console.log(process.argv);

/**
* Buffers:
* Es un tipo que nos ayuda a leer datos de archivos o de la red, es una secuencia de bytes enlugar de una secuencia de caracteres.
* Buffer es una subclase de la clase Uint8Array. Buffer esta diseñano para operar con cadenas de JavaScript,
* esto significa que se pueden inicializar a partir de cadenas de caracteres o convertirse a cadenas de caracteres.
* 
* Caracteristicas de Buffer:
* 
* 1. Asigna a cada caracter un valor numerico entero.
*  
* Codificaciones admitidas:
* - UTF-8: valor por defecto
* - Unicode
* - UTF-16LE: Unicode de 2 bytes
* - Latin1: para idiomas de Europa occidental
* - ASCII: la  tabla ASCII, 7 bites.
* - Exadecimal: convierte cada byte en un par de digitos exadecimales de ASCII.
* - Base64: Convierte cada secuencia de 3 bytes en una secuencia de 4 caracteres ASCII.  
* 
*/

let buffer = Buffer.from([0x42, 0x42, 0x43]);
console.log(buffer.toString());
console.log(buffer.toString("hex"));

let computer = Buffer.from("IBM 3111", "ascii");
console.log(computer.toString("ascii"));
console.log(computer.subarray(0, 3).map(x => x + 1).toString());

for (i = 0; i < computer.length; i++) {
    computer[i]--;
}
console.log(computer.toString("ASCII"));

let ceros = Buffer.alloc(1024);//si se le envia solo un parmetro por defecto llena de ceros
console.log(ceros);

let unos = Buffer.alloc(128, 1);//el segund parametro le indicamos en que los vamos a inicializar
console.log(unos);

let patterns = Buffer.alloc(1024, "DBEF", "hex");//tercer parametro el fomrmeto que queremos darle
console.log(patterns);

const { Socket } = require('dgram');
/**
 * Eventos:
 * 
 */
const eventEmitter = require('events');
const net = require('net');

let server = new net.Server();
console.log(server instanceof eventEmitter);//en este caso Server es una subclase de eventEmitter, Herencia.

server.on('connection', socket => {
    socket.end("Hola desde evento connection", "UTF-8");
});

server.emit('event');

/**
 * Streams:
 * - Readable. Son streams fuentes de datos, lo que hacen es generar una fuente. Devuelve un fs.createReadStream
 * - Writeable. Reseptores o destinatarios de datos. Devuelve un fs.createWriteStream
 * - Duplex. Combinan el Readable y el Writable.
 * - Transform. Pueden leer y escribir pero con la diferencia que los datos se transforman solamete en legibles (Readable).
 * 
 * 
 */

const fs = require('fs');

function pipeFileToSocket(fileName, socket) {
    fs.createReadStream(fileName).pipe(socket);
}

/**
 * Process:
 * 
 * - process.arch : muestra arquitectura de trabajo actual
 * - console.log(process.cwd());
 * - cpuUsage : uso de la cpu
 * - 
 * */

console.log(process.argv);
console.log(process.arch);//muestra la arquitectura de 
console.log(process.cwd());
//console.log(process.chdir());
console.log(process.cpuUsage());
console.log(process.memoryUsage());

/**
    process.argv // Una matriz de argumentos de la línea de comandos.
    process.arch // La arquitectura de la CPU: "x64", por ejemplo.
    process.cwd () // Devuelve el directorio de trabajo actual.
    process.chdir () // Establece el directorio de trabajo actual.
    process.cpuUsage () // Informa el uso de la CPU.
    process.env // Un objeto de variables de entorno.
    process.execPath // La ruta absoluta del sistema de archivos al ejecutable del nodo.
    process.exit () // Termina el programa.
    process.exitCode // Un código entero que se informará cuando se cierre el programa.
    process.getuid () // Devuelve el ID de usuario de Unix del usuario actual.
    process.hrtime.bigint () // Devuelve una marca de tiempo de nanosegundos de "alta resolución".
    process.kill () // Envía una señal a otro proceso.
    process.memoryUsage () // Devuelve un objeto con detalles de uso de memoria.
    process.nextTick () // Como setImmediate (), invoca una función pronto.
    process.pid // El ID de proceso del proceso actual.
    process.ppid // El ID del proceso padre.
    process.platform // El sistema operativo: "linux", "darwin" o "win32", por ejemplo.
    process.resourceUsage () // Devuelve un objeto con detalles de uso de recursos.
    process.setuid () // Establece el usuario actual, por id o nombre.
    process.title // El nombre del proceso que aparece en los listados `ps`.
    process.umask () // Establece o devuelve los permisos predeterminados para nuevos archivos.
    process.uptime () // Devuelve el tiempo de actividad de Node en segundos.
    process.version // Cadena de versión de Node
    process.versions // Cadenas de versión para las bibliotecas de las que depende Node.
 */

const os = require('os');
console.log(os.arch());
console.log(os.cpus());
console.log(os.userInfo());
/**
    os.arch() // Devuelve la arquitectura de la CPU. "x64" o "arm", por ejemplo.
    os.constants // Constantes útiles como os.constants.signals.SIGINT.
    os.cpus() // Datos sobre los núcleos de la CPU del sistema, incluidos los tiempos de uso.
    os.endianness() // El endianness nativo de la CPU "BE" o "LE".
    os.EOL // El terminador de línea nativo del sistema operativo: "\ n" o "\ r \ n".
    os.freemem() // Devuelve la cantidad de RAM libre en bytes.
    os.getPriority() // Devuelve la prioridad de programación del sistema operativo de un proceso.
    os.homedir() // Devuelve el directorio de inicio del usuario actual.
    os.hostname() // Devuelve el nombre de host de la computadora.
    os.loadavg() // Devuelve los promedios de carga de 1, 5 y 15 minutos.
    os.networkInterfaces () // Devuelve detalles sobre la red disponible. conexiones.
    os.platform() // Devuelve OS: "linux", "darwin" o "win32", por ejemplo.
    os.release() // Devuelve el número de versión del SO.
    os.setPriority() // Intenta establecer la prioridad de programación para un proceso.
    os.tmpdir() // Devuelve el directorio temporal predeterminado.
    os.totalmem() // Devuelve la cantidad total de RAM en bytes.
    os.type() // Devuelve SO: "Linux", "Darwin" o "Windows_NT", p. ej.
    os.uptime() // Devuelve el tiempo de actividad del sistema en segundos.
    os.userInfo() // Devuelve uid, nombre de usuario, inicio y shell del usuario actual.
*/

/**
 * Modulo fs (FileSystem):
 * Es una API para tranajar con archivos y directorios
 * La mayoria de sus funciones son asincronas
 * fs.readFile() > fs.readFileSync()
 * fs.promises.readFile() -> se puede usar promises despues de la version 10 de nodeJs.
 */

//PATHS

console.log(process.pwd);
console.log(__filename);
console.log(__dirname);
console.log(os.homedir());

const path = require("path");
console.log(path.sep);

let directorio = "src/pkg/test.js"
console.log(path.basename(directorio));
console.log(path.extname(directorio));
console.log(path.dirname(directorio));
console.log(path.basename(path.dirname(directorio)));

//Normalize

console.log(path.normalize("a/b/c/../d/"));
console.log(path.normalize("a/./b"));
console.log(path.normalize("//a//b//"));

//Join

console.log(path.join("src", "pkg", "t.js"));

//Resolve

console.log(path.resolve());// similar al process.cwd(), muestra ruta absoluta
console.log(path.resolve("t.js"));// similar a path.join("process.cwd()","t.js")
console.log(path.resolve("/tmp", "t.js"));
console.log(path.resolve("/a", "/b", "t.js"));
console.log(path.posix);

//Lectura de archivos

//Lectura de forma sincrona

let buffer2 = fs.readFileSync(path.join(__dirname, "fs.txt"));
console.log(buffer2);

let text = fs.readFileSync("fs.txt", "utf-8");
console.log(text);

//Lectura de forma asincrona con callback
fs.readFile("fs.txt", (err, buffer) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`Ok: ${buffer}`);
    }
});

//Lectura de archivo de forma asincrona con promises

fs.promises.readFile("fs.txt", "utf-8")
    .then(processFileText => {
        console.log(processFileText);
    }).catch(handledReadError => {
        console.log(handledReadError);
    });

//Lectura de archivo con Async Await

async function processText(fileName, encoding = "utf-8") {
    try {
        let text2 = await fs.promises.readFile(fileName, encoding);
        console.log(text2);
    } catch (err) {
        console.log(err);
    }
}
processText("fs.txt");

/**
 * Descriptores
 * Salida estandar a nivel de contenedores
 * 
 * Recomendacion, generar logs log4j salida estandar, no en archivos para poder hacer seguimiento a errores.
 * 
 * stdOut
 */

function printFile(fileName, encoding = "utf8") {
    fs.createReadStream(fileName, encoding).pipe(process.stdout);
}
printFile("salidaEstandar.txt");

//Escribir archivos

let configuracion = { name: "Juan", apellido: "Perez" };
let archivo = path.resolve(__dirname, "configuracion.json");

//forma sincrona
// usarlo cuando el servidor tiene muchos recursos y el archivo es pequeño

fs.writeFileSync(archivo, JSON.stringify(configuracion));

//forma asincrona con callback

fs.writeFile(archivo, JSON.stringify(configuracion), err => {
    if (!err) {
        console.log("Se creó y escribió el archivo Ok");
    } else {
        console.log(`Error: ${err}`)
    }
})

//forma asincrona con promises

fs.promises.writeFile(archivo, JSON.stringify(configuracion))
    .then(
        console.log("Se creó y escribió el archivo Ok")
    ).catch(processError => {
        console.log(processError);
    });

//forma asincrona con async await

async function writeFileAsyncAwait(fileName) {
    try {
        await fs.promises.writeFile(fileName, JSON.stringify(configuracion));
        console.log("Se creó y escribió el archivo Ok");
    } catch (err) {
        console.log(err);
    }
}
writeFileAsyncAwait(archivo);

//escribir nuevas lineas al archivo appendFile de forma sincrona
fs.appendFile(archivo, "\n Nueva linea appendFile forma sincrona", err => {
    if (!err) {
        let configuracionTest = fs.readFileSync(path.resolve(__dirname, "configuracion.json"));
        console.log(configuracionTest);
    } else {
        console.log(err);
    }
});

//escribir nuevas lineas al archivo appendFile de forma asincrona con callback

fs.appendFile(archivo, "\n Nueva linea con appendFile con la forma callback", err => {
    if (!err) {
        fs.readFile(archivo, (err, buffer) => {
            if (err) {
                console.log(`Error: ${err}`);
            } else {
                console.log(`Ok: ${buffer}`);
            }
        });
    } else {
        console.log(`Error: ${err}`)
    }
})


//escribir nuevas lineas al archivo appendFile de forma asincrona con promises

fs.promises.appendFile(archivo, "\n Nueva linea con appendFile con la forma promises")
    .then(
        fs.promises.readFile(archivo, "utf-8")
            .then(processFileText => {
                console.log(processFileText);
            }).catch(handledReadError => {
                console.log(handledReadError);
            })
    ).catch(processError => {
        console.log(processError);
    });

//escribir nuevas lineas al archivo appendFile de forma asincrona con async await

async function appendFileAsyncAwait(fileName) {
    try {
        await fs.promises.appendFile(archivo, "\n Nueva linea con appendFile con la forma async await");
        let info = await fs.promises.readFile(fileName, "utf8");
        console.log(info);
    } catch (err) {
        console.log(err);
    }
}
appendFileAsyncAwait(archivo);


/**
 * Metadatos de archivos
 */

let stats = fs.statSync(archivo);
console.log(stats.isFile());
console.log(stats.isDirectory());
console.log(stats.size);
console.log(stats.atime);//fecha de ultima vez leido
console.log(stats.mtime);//fecha ultima modificacion
console.log(stats.uid);//Id del usuario dueño del archivo, mas usado en linux
console.log(stats.gid);//Id grupoueño del archivo, mas usado en linux
console.log(stats.mode.toString(8));//Imprime un octal en string de los permisos del archivo

/**
 * Copia de archivos
 */

fs.copyFileSync(archivo, "configuracionCopia.json");

//escribir de 0 a 100 en el archivo

let output = fs.createWriteStream(archivo);
for (i = 0; i <= 100; i++) {
    output.write(`${i} \n`);
}
console.log(output.end());



/**
 * seguir investigando sobre fs
 * 
 * https://nodejs.org/api/fs.html
 * 
 */

/**
 * HTTP, HTTPS, HTTP2
 * 
 * Estos son los modulos por excelencia de NodeJs que son implementaciones de los protocolos de HTTP.
 * Estas implementaciones tienen imlementaciones relativamente de bajo nivel.
 * 1. Crear un nuevo objeto de servidor.
 * 2. llamar al listener para que se escuchen solicitudes de un puerto especifico.
 * 3. Registrar un controlador de eventos para eventos de request.
 */

const http = require('http');//usar HTTPS si se tiene un certificado
const url2 = require('url');//Para analizar urls
const path2 = require('path');//para manipular rutas de sistemas de archivos
const fs2 = require('fs');//para leer archivos
const { Readable } = require('stream');

function serve(rootDirectory, port) {
    let server = new http.Server();//se crea un nuevo servidor http
    server.listen(port);//Escucha en el puerto especificado
    console.log(`Escuchando en el puerto ${port}`);

    server.on("request", (request, response) => {//cuando lleguen solicitudes las manipulamos con esta funcion
        let endpoint = url2.parse(request.url).pathname;
        if (endpoint === "/test/mirror") {
            response.setHeader("Content-Type", "text/plain; charser-UTF-8")
            response.writeHead(200);//se especifica el codigo de estado de la respuesta
            response.write(`${request.method} ${request.url} HTTP/${//esto sería el cuerpo(body) de la respuesta
                request.httpVersion
                }\r\n`);
            let headers = request.rawHeaders;
            for (let k = 0; k < headers.length; k += 2) {
                response.write(`${headers[k]}: ${headers[k + 1]}\r\n`)
            }
            response.write("\r\n");
            request.pipe(response);//Copiamos cualuier cuerpo del request al cuerpo del response, dado que ambos son flujos.
        } else if (endpoint === "/test/file") {
            let fileName = endPoint.substring(1);
            fileName = fileName.replace(/\.\.\\/g, "");//remplaza cualquier ../ por vacio
            fileName = path2.resolve(routeDirectory, fileName);//Convertimos una ruta relativa a auna ruta absoluta
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

            let stream = fs2.createWriteStream(fileName);
            stream.once('readable',() => {
                response.setHeader('Content-Type',typeFile);
                response.writeHead(200);
                stream.pipe(response);
            });
            stream.on('error',() => {
                response.setHeader('Content-Type','text/plain; charset = UTF-8');
                response.writeHead(404);
                response.end(err.message);
            });
        }
    });
}
serve(process.argv[2] || "/tmp", parseInt(process.argv[3] || 8002));
