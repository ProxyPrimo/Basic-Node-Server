const http = require('http');
const routes = require('./userRoutes');

const server = http.createServer(routes);


server.listen(3000);