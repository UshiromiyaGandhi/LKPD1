const http = require("http");

const todos = [
    {id: 1, text: 'Todo one'},
    {id: 2, text: 'Todo two'},
    {id: 3, text: 'Todo three'}
]

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('X-Powered-By', 'Node.js')

    res.writeHead(404, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js',
    })

    let body = [];

    req
        .on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body);
            console.log(body.toString());
        });

    const data = JSON.stringify({
        success: true,
        error: 'Not Found',
        data: null
    });

    res.end(data);
})
const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

