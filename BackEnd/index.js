console.log('Hello World');

// creacion de un servidor web

const http = require('http'); // importa o módulo http

const host = '0.0.0.0'; //el host es el servidor que va a escuchar las peticiones
const port = 3000; //el puerto es el puerto que va a escuchar las peticiones

const server = http.createServer((req, res) => { //crea el servidor
    res.statusCode = 200; //el código de estado es 200, que significa que todo está bien y que la petición se ha realizado correctamente
    res.setHeader('Content-Type', 'text/plain'); //el tipo de contenido es texto plano, setHeader es para establecer el tipo de contenido
    res.end('Hello World'); //el contenido es Hello World y end es para finalizar la respuesta
});

// ensendido del servidor
server.listen(port, host, () => { //el servidor escucha en el puerto y el host que hemos definido anteriormente
    console.log(`Server running at http://${host}:${port}/`); //el servidor imprime en consola que está escuchando en el puerto y el host
});



