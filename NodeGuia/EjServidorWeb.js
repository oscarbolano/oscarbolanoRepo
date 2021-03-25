const http = require('http')//se incluye el modulo http

const hostname = '127.0.0.1'//se define el nombre del host
const port = 9000//se define el puerto de escucha

const server = http.createServer((req, res) => {//crea un nuevo servidor HTTP y lo devuelve.
  res.statusCode = 200 //indica una respuesta exitosa.
  res.setHeader('Content-Type', 'text/plain')//se establece el encabezado Content-Type
  res.end('Hello World!\n')//se cierra la respuesta, pasando el contenido que mostraría e el navegador a la funcion end
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
