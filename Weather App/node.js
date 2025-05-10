const fs = require("fs");
var requests = require("requests");
import { createRequire } from 'module';
const require = createRequire(
    import.meta.url);

const homeFile = fs.readFileSync('index.html', 'utf-8');

const server = http.createServer((req, res) => {
    if (req.url == "/") {

        requests("http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=9af3546c187d071f18c1503a174fb8f9")

        .on('data', (chunk) => {
                console.log(chunk);
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
            });

    }


});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port 8000");
});

// const http = require('http');

// const requestListener = function(req, res) {
//     res.writeHead(200);
//     res.end('Hello, World!');
// }

// const server = http.createServer(requestListener);
// server.listen(8080);
// console.log('this');