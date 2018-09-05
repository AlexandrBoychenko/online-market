const http                          = require('http');
const staticServer                  = require('node-static');
const port                          = 3000;


const file = new staticServer.Server('', {
    cache: 0
});

const requestHandler = (request, response) => {
    file.serve(request, response);
    console.log(request.url)
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('error is happened', err)
    }
    console.log(`server is listening on ${port}`)
});