const http = require('http');
const server = http.createServer((req, res) => {
    const {headers, url, method} = req;
    console.log('headers', headers);
    console.log('url', url);
    console.log('method', method);

    res.end('hi hallooo');
})
const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

