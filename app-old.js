const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {

        nombre: 'Vic FLores',
        edad: 19,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
})

.listen(3000);

console.log('EScuchando el puerto 3000');